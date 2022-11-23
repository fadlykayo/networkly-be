import axios from 'axios';

import { ConfigEnv, Endpoints } from 'constants';
import {
	NavigationHelper,
	MiscHelper,
	LocalStorageHelper
} from 'helpers';

import createRequest from './createRequest';

const { token, refreshToken } = ConfigEnv;

const axiosApiInstance = axios.create({ baseURL: config.baseUrl });

// ** Request Interceptor
axiosApiInstance.interceptors.request.use(
	config => {
		/**
		 * Uncomment line 25-38 jika API membutuhkan accessToken/refreshToken,
		 * Di example, API moviedb tidak membutuhkannya.
		 */

		// ** Get token from localStorage
		// const accessToken = LocalStorageHelper.getAccessToken();
		// const refreshToken = LocalStorageHelper.getRefreshToken();

		// If interceptors calls refreshAccessToken() API, change authorization with refreshToken
		// const authorization = ConfigEnv.url === Endpoints.refreshToken().path
		// 	? refreshToken
		// 	: (accessToken || null);

		// ConfigEnv.headers = {
		// 	...ConfigEnv.headers,
		// 	Accept: 'application/json',
		// 	Authorization: authorization
		// };

		return config;
	},
	error => Promise.reject(error)
);

const forceLogout = () => {
	LocalStorageHelper.clearStorage();

	NavigationHelper.push('/login');

	// TODO : show with toast error
	alert('Session login tidak valid. Silakan login kembali');
};

// ** Response interceptor
axiosApiInstance.interceptors.response.use(response => {
	return response;
}, async error => {
	const originalRequest = error.config;

	if (!error.response) {
		// network error
		return Promise.reject(error);
	} else {
		const status = error.response.status;
		const response = error.response.data;
		const statMessage = response?.stat_msg;

		MiscHelper.logger('==== Interceptors Error Response ====', error.response);

		if (status === 401 && statMessage === 'ERR:NOT_AUTHORIZED') { // Sesuaikan dengan stat_msg ketika access token tidak valid, refresh token expired/tidak valid, etc
			forceLogout();

			return new Promise(() => { });
		} else if (status === 401 && statMessage === 'ERR:REFRESH_TOKEN') { // Sesuaikan dengan stat_msg ketika access token expired
			if (!originalRequest._retry) {
				originalRequest._retry = true;

				// Jika access token expired, hit refresh token API
				try {
					const { code, data } = await createRequest(Endpoints.refreshToken);

					if (code === 200) {
						/**
						 * - If refresh token success, set headers Authorization with new access token
						 * - Store new access token & refresh token to localStorage
						 * - Return to original request
						 */
						const accessToken = await data[token];
						axios.defaults.headers.common['Authorization'] = await accessToken;

						await LocalStorageHelper.setTokenUser({
							[token]: accessToken,
							[refreshToken]: data[refreshToken]
						});

						return axiosApiInstance(originalRequest);
					} else {
						forceLogout();

						return new Promise(() => { });
					}
				} catch (error) {
					forceLogout();

					return new Promise(() => { });
				}
			}
		} else {
			// TODO : show with toast error stat_msg from backend
			alert(statMessage || 'Oops, something went wrong. Please try again!');

			return Promise.reject(error);
		}
	}
});

export default axiosApiInstance;
