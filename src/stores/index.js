import UserAction from './User/user.action';

import UserReducer from './User/user.reducer';

import { Redux, store } from './config';

const reducers = {
	UserReducer,
};

const actions = {
	UserAction,
};

export {
	reducers,
	actions,
	Redux,
	store,
};
