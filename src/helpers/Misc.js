import { useState, useEffect } from 'react';

const convertToFormData = requestBody => {
	const formData = new FormData();

	Object.keys(requestBody).forEach(key => {
		formData.append(key, requestBody[key]);
	});

	return formData;
};

const logger = args => {
	if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
		// eslint-disable-next-line no-console
		console.log(args);
	}
};

const deviceDetect = () => {
	const [width, setWidth] = useState(window.innerWidth);

	const handleWindowSizeChange = () => {
		setWidth(window.innerWidth);
	};

	useEffect(() => {
		window.addEventListener('resize', handleWindowSizeChange);

		return () => {
			window.removeEventListener('resize', handleWindowSizeChange);
		};
	}, []);

	return width <= 768;
};

export default {
	convertToFormData,
	logger,
	deviceDetect,
};