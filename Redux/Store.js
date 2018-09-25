import { createStore, combineReducers, applyMiddleware } from 'redux';
import Doctordata from './Reducer/Doctordata';
import Auth from './Reducer/Auth';

import thunk from 'redux-thunk'
import logger from 'redux-logger'

let store = createStore( combineReducers({
    Doctordata,Auth

}) , applyMiddleware(thunk) )

export default store;