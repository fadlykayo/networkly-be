import { EnvConfig } from 'constants';

const refreshTokenKey = EnvConfig.refreshToken;
const tokenKey = EnvConfig.token;

// ==== primary ====
const setItem = (key, value) => {
	return localStorage.setItem(key, JSON.stringify(value));
};

const getItem = key => {
	const jsonValue = localStorage.getItem(key);

	return jsonValue !== null ? JSON.parse(jsonValue) : null;
};

const removeItem = key => {
	return localStorage.removeItem(key);
};

const clearStorage = () => {
	return localStorage.clear();
};

// ==== for authentication ====
const getAccessToken = () => {
	return getItem(tokenKey);
};

const getRefreshToken = () => {
	return getItem(refreshTokenKey);
};

const setTokenUser = dataToken => {
	const keysToSet = [tokenKey, refreshTokenKey];

	return keysToSet.forEach(keyName => setItem(keyName, dataToken[keyName]));
};

const setUserData = user => {
	return setItem('user', user);
};

const clearToken = () => {
	const keysToRemove = [tokenKey, refreshTokenKey];

	return keysToRemove.forEach(keyName => removeItem(keyName));
};

export default {
	setItem,
	getItem,
	removeItem,
	clearStorage,
	getAccessToken,
	getRefreshToken,
	setTokenUser,
	setUserData,
	clearToken,
};
