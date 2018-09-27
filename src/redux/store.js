import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers'
import {createLogger} from 'redux-logger';
const logger = createLogger();
let store = createStore(rootReducer,applyMiddleware(thunkMiddleware,logger))

export default store