import { useCallback, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Sizes } from 'constants';

const useForm = (initialValues) => {
	const [values, setValues] = useState(initialValues);

	return [
		values,
		(e, key) => setValues({
			...values,
			[key]: e,
		}),
	];
};

const useCustomDispatch = (action, callback = null) => {
	const dispatch = useDispatch();

	return useCallback((param, optParam = null) => dispatch(action(param, optParam, callback)), [dispatch, action, callback]);
};

const useDebounceValue = (value, delay = 800) => {
	const [debouncedValue, setDebouncedValue] = useState(value);

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);

		return () => {
			clearTimeout(handler);
		};
	}, [value, delay]);

	return debouncedValue;
};

const useWindowDimensions = (mobileSize = 'md') => {
	const [windowDimensions, setWindowDimensions] = useState({
		width: 0,
		height: 0
	});

	const getWindowDimensions = () => {
		const { innerWidth: width, innerHeight: height } = window;

		return {
			width,
			height
		};
	};

	useEffect(() => {
		const handleResize = () => {
			setWindowDimensions(getWindowDimensions());
		};

		handleResize();

		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return {
		windowDimensions,
		isMobile: windowDimensions.width <= Sizes[mobileSize]
	};
};

export default {
	useForm,
	useCustomDispatch,
	useDebounceValue,
	useWindowDimensions
};
