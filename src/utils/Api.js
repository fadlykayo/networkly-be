import { MiscHelper } from 'helpers';

import createRequest from './createRequest';

const isFunctionType = handler => typeof handler === 'function';

const actionRequest = async (
	onPreRequest,
	onPostRequest,
	payload,
	onSuccess,
	onError,
	onCatchError
) => {
	return new Promise(async (resolve, reject) => {
		try {
			// Before fetch data, e.g: dispatch loading
			if (onPreRequest && isFunctionType(onPreRequest)) {
				await onPreRequest();
			}

			// If endpoint not null, send request to BE
			if (payload.endpoint) {
				// Make request to server
				const response = await createRequest(
					payload.endpoint,
					payload.body,
					payload.additionalConfig
				);

				// If stat_code 200, handle with success function & resolve
				if (response && response.stat_code === 200) {
					if (onSuccess && isFunctionType(onSuccess)) {
						await onSuccess(response);
					}

					resolve();
				} else {
					// If the response code is not 200 and want to do something other than axios interceptors response error handling
					if (onError && isFunctionType(onError)) {
						onError(response, reject);
					}
				}
			}
		} catch (error) {
			// Catch error handle with onCatchError or just show toast with error message default
			MiscHelper.logger('==== Catch Error ====', error);

			if (onCatchError && isFunctionType(onCatchError)) {
				onCatchError(error, reject);
			} else {
				// TODO : show with toast error default seperti "Sorry, we're experiencing some problems"
				alert('Sorry, we\'re experiencing some problems');
			}

		} finally {
			/**
			 * After fetching data, function handler either success or error
			 * e.g. dispatch stop loading
			 */
			if (onPostRequest && isFunctionType(onPostRequest)) {
				onPostRequest();
			}
		}
	});
};

export default actionRequest;

/**
 *
 * @param onPreRequest : onPreRequest digunakan untuk handle start loading, etc
 * @param onPostRequest : onPostRequest akan terpanggil baik sukses ataupun error, e.g. stop loading, etc
 * @param endpoint
 * @param payload : berbentuk object yang berisi parameter function createRequest
 * {
 * endpoint : path, method, content-type
 * body : request body or query params for fetching data
 * additionalConfig
 * }
 *
 * @param onSuccess : onSuccess digunakan jika response from API success (200, atau kondisi lainnya, mis: pengecekan dari stat_code)
 * @param onError
 * onError digunakan jika error dari server memiliki response (bad request, etc)
 * digunakan jika ingin melakukan sesuatu selain yang telah dihandle di axios interceptors response.
 * misal: untuk tetap melakukan callback meskipun error response
 * @param onCatchError : handle catch error
 * @returns : promise
 */