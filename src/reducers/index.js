import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import userReducer from './userReducer';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    // localStorage에 저장합니다.
    key: 'root',
    storage,
};

const rootReducer = combineReducers({
    userReducer,
});

export default persistReducer(persistConfig, rootReducer);
