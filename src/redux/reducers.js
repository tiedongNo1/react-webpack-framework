import {combineReducers} from 'redux'
import appReducer from './reducers/index'



const reducers = combineReducers({
	app: appReducer
})

const rootReducer = (state,action)=>{
    return reducers(state,action)
}
export default rootReducer