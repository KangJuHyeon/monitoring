import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';

const enhancedReducer = () => {
    rootReducer;
};

const store = createStore(enhancedReducer);

export default store;
