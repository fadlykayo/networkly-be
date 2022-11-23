const convertToFormData = requestBody => {
	const formData = new FormData();

	Object.keys(requestBody).forEach(key => {
		formData.append(key, requestBody[key]);
	});

	return formData;
};

const logger = (args) => {
	if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
		// eslint-disable-next-line no-console
		console.log(args);
	}
};

export default {
	convertToFormData,
	logger,
};