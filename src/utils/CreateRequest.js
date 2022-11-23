import axios from 'axios';

import { MiscHelper } from 'helpers';

import CustomAxios from './AxiosConfig';

/**
 *
 * @param endpoint : path, method, contentType
 * @param body : request body (selain GET) atau query params (untuk GET)
 * @param additionalConfig : AxiosRequestConfig, parameter tambahan untuk axios request berbentuk object, misal handle onUploadProgress, onDownloadProgress
 * @returns : ApiData interface { code, stat_code, stat_msg, data, pagination } atau throw error (kelempar ke catch yg manggil request ini)
 */

const createRequest = async (
	endpoint,
	body,
	additionalConfig
) => {
	const url = endpoint.path;
	const method = endpoint.method;
	const contentType = endpoint.contentType || 'application/json; charset=utf-8';
	const headers = { 'Content-Type': contentType };
	// Jika content-type multipart/form-data, convert body to FormData
	const requestBody = contentType === 'multipart/form-data' && body
		? MiscHelper.convertToFormData(body)
		: body;

	try {
		const response = await CustomAxios.request({
			url,
			headers,
			method,
			data: (method !== 'GET' && requestBody) || null,
			params: (method === 'GET' && requestBody),
			...additionalConfig
		});

		const result = await response.data;

		const data = await {
			code: response.status,
			// ==== moviedb ====
			stat_code: result.status_code || response.status,
			stat_msg: result.status_message || '',
			data: result,
			pagination: {
				count: result.total_results,
				page: result.page,
				page_total: result.total_pages
			}
			// === end of movieb ====
			// ** change stat_code, stat_msg, data, and pagination with the code below
			// stat_code: result.stat_code,
			// stat_msg: result.stat_msg,
			// data: result.data,
			// pagination: result.pagination,
		};

		return data;
	} catch (error) {
		// Axios has a property isAxiosError that is used to detect types
		if (axios.isAxiosError(error)) {
			// Access to config, request, and response
			if (error.response) {
				// Request made and server responded
				const result = await error.response.data;

				MiscHelper.logger('==== Error Response Data ====', result);

				const dataError = {
					code: error.response?.status,
					stat_code: result?.stat_code,
					stat_msg: result?.stat_msg || '',
					data: result?.data,
					pagination: result?.pagination
				};

				/**
				 * Return response ApiData { code, stat_code, .... }
				 * agar semisal mau dihandle lagi selain yang dihandle di axios response interceptors
				 * berdasarkan code nya
				 *
				 * Tidak masuk ke catch (error)
				 */
				return dataError;
			} else {
				/**
				 * The request was made but no response was received
				 * OR
				 * Something happened in setting up the request that triggered an Error
				 *
				 * Masuk ke catch (error)
				 */
				throw error;
			}
		} else {
			/**
			 * Just a stock error
			 *
			 * Masuk ke catch (error)
			 */
			throw error;
		}
	}
};

export default createRequest;
