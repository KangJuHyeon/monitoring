import { createStore } from 'redux';
import rootReducer from '../reducers/index';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';

const persistConfig = {
    // localStorage에 저장합니다.
    key: 'root',
    storage,
};

const enhancedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(enhancedReducer, composeWithDevTools());

export default store;
