const configEnv = {
	baseUrl: process.env.REACT_APP_BASE_API_URL || '',
	version: process.env.REACT_APP_API_VERSION || '',
	apiKey: process.env.REACT_APP_API_KEY,
	baseImageUrl: process.env.REACT_APP_BASE_IMAGE_URL,
	stage: process.env.REACT_APP_STAGE || 'development',
	token: 'access_token',
	refreshToken: 'refresh_token'
};

export default configEnv;