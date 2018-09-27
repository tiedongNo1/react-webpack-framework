import * as types from '../actionType'
import {handleActions} from 'redux-actions'

const initState = {
    list:[],
    searchError:'false',
    currentInfo:'',
    socket:false
};

const reducer={}



reducer[types.GET_TABLE_SUCCESS]=(state,action)=>{
    return   Object.assign({},state,{
        list:action.payload,
        searchError:'false',
    })
}

reducer[types.GET_TABLE_FAIL]=(state,action)=>{
    return   Object.assign({},state,{
        list:[],
        searchError:'true',
    })
}

reducer[types.GET_CURRENT_INFO]=(state,action)=>{
    return   Object.assign({},state,{
        currentInfo:action.payload
    })
}

reducer[types.CONNECTED_SOCKET]=(state,action)=>{
    return   Object.assign({},state,{
        socket:true
    })
}

reducer[types.DIS_CONNECTED_SOCKET]=(state,action)=>{
    return   Object.assign({},state,{
        socket:false
    })
}


export default  handleActions(reducer,initState)