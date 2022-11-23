import React from 'react';

import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import AsyncStorage from '@react-native-community/async-storage';
import thunk from 'redux-thunk';

import UserReducer from './User/user.reducer';
import TransactionReducer from './Transaction/transaction.reducer';
import ProductReducer from './Product/product.reducer';
import WorkplaceReducer from './Workplace/workplace.reducer';
import DraftReducer from './Draft/draft.reducer';
import WorkerReducer from './Worker/worker.reducer';
import MiscReducer from './Misc/misc.reducer';
import ErrorReducer from './Error/error.reducer';
import BottomNotifReducer from './BottomNotif/bottomNotif.reducer';

import autoMergeLevel2Immutable from './autoMergeLevel2Immutable';

const rootReducer = combineReducers({
  user: UserReducer,
  transaction: TransactionReducer,
  product: ProductReducer,
  workplace: WorkplaceReducer,
  worker: WorkerReducer,
  misc: MiscReducer,
  error: ErrorReducer,
  draft: DraftReducer,
  bottomNotif: BottomNotifReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2Immutable,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const asyncStore = createStore(
  persistedReducer,
  compose(
    applyMiddleware(
      thunk,
    ),
  ),
);

const persistor = persistStore(asyncStore);
// persistor.purge();

const ReduxStore = props => {
  return (
    <Provider store={ asyncStore }>
      <PersistGate loading={ null } persistor={ persistor }>
        { props.children }
      </PersistGate>
    </Provider>
  );
};

export { ReduxStore, asyncStore };
