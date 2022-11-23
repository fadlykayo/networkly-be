import UserAction from './User/user.action';

import UserReducer from './User/user.reducer';

import { ReduxStore, asyncStore } from './config';

const reducers = {
	UserReducer,
};

const actions = {
	UserAction,
};

export {
	reducers,
	actions,
	ReduxStore,
	asyncStore,
};
