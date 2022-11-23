import React from 'react';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from '@redux-devtools/extension';

import UserReducer from './User/user.reducer';

const rootReducer = combineReducers({
	user: UserReducer,
});

const persistConfig = {
	key: 'root',
	storage: storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
	persistedReducer,
	composeWithDevTools(
		applyMiddleware(
			thunk,
		),
	),
);

const persistor = persistStore(store);
// persistor.purge();

const Redux = props => {
	return (
		<Provider store={ store }>
			<PersistGate loading={ null } persistor={ persistor }>
				{ props.children }
			</PersistGate>
		</Provider>
	);
};

export { Redux, store };
