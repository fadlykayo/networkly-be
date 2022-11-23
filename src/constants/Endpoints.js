import EnvConfig from './EnvConfig';

const baseUrl = EnvConfig.baseUrl;

export default {
	REGISTER: { baseUrl: baseUrl, path: 'register', method: 'POST' },
	REQUEST_OTP: { baseUrl: baseUrl, path: 'otp', method: 'POST' },
	VALIDATE_OTP: { baseUrl: baseUrl, path: 'validate', method: 'POST' },
	LOGIN: { baseUrl: baseUrl, path: 'login', method: 'POST' },
	REGENERATE_TOKEN: { baseUrl: baseUrl, path: 'regenerate', method: 'POST' },

	CHANGE_PASSWORD: { baseUrl: baseUrl, path: 'change-password', method: 'POST' },
	FORGOT_PASSWORD: { baseUrl: baseUrl, path: 'forgot-password', method: 'POST' },
	CHANGE_PHONE_NUMBER: { baseUrl: baseUrl, path: 'change-phone', method: 'POST' },

	GET_WORKER_BY_ID: { baseUrl: baseUrl, path: '$/workers', method: 'GET' },
	POST_WORKER: { baseUrl: baseUrl, path: 'search-worker', method: 'POST' },
	DELETE_AND_REVIEW_WORKER: { baseUrl: baseUrl, path: 'workers/$/end', method: 'POST' },
	DELETE_WORKER: { baseUrl: baseUrl, path: 'workplace/$/workers/&', method: 'DELETE' },
};
