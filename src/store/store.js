import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../reducers/index';

const persistConfig = {
    key: 'root',
    storage,
};

const enhancedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const store = createStore(
    enhancedReducer,
    composeEnhancers(applyMiddleware(thunk)),
);

export default store;
