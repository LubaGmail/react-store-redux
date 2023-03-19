// Enhances rootReducer with helper functions
import { compose, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk';

import { rootReducer } from './root-reducer';

const middleWares = [process.env.NODE_ENV === 'development' && logger, thunk].filter(
  Boolean
);

const persistConfig = {
  key: 'root',
  storage: storage,             //localstorage
  whitelist: ['cart'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore (
  persistedReducer,
  undefined,
  composedEnhancers
)
export const persistor = persistStore(store)

// with logger middleware
// export const store = createStore(rootReducer, undefined, composedEnhancers);
// export const store = createStore(rootReducer);


