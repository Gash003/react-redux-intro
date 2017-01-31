import {createStore, applyMiddleware} from 'redux';

import reducers from './reducers/index';
import loggerMiddleware from './middleware/loggerMiddleware'

const store = createStore(
    reducers, 
    applyMiddleware(loggerMiddleware)
);


export default store;