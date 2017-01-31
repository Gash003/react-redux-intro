import {combineReducers} from 'redux';

import userReducer from './userReducer'
import widgetReducer from './widgetReducer'

const reducers = combineReducers({
    userState: userReducer, 
    widgetState: widgetReducer 
})

export default reducers;