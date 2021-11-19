import { createStore } from 'redux';
import rootReducer from '../reducers/index';

const enhancedReducer = () => {
    rootReducer;
};

const store = createStore(enhancedReducer);

export default store;
