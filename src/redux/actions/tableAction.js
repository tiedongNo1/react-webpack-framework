import * as types from '../actionType'
import axios from 'axios'
let  getTableSuccess=(data)=>{
    console.log(data,data.data.data)
    if(data&&data.data&&data.data.data&&data.data.data.length>=0){
        return {
            type: types.GET_TABLE_SUCCESS,
            payload:data.data.data
        }
    }else{
        return {
            type: types.GET_TABLE_FAIL
        }
    }
    return {
        type: types.GET_TABLE_SUCCESS,
        payload:data
    }
}

let getTableFail=() =>{
    return {
        type: types.GET_TABLE_FAIL
    }
}


let $axios = axios.create({
    baseURL:'/exchange/public/product',
    timeout: 10000,
    responseType: 'jsonp',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
    }
});

let getTable=()=>{
    return dispatch=>{
        return $axios.get()
            .then(response=>dispatch(getTableSuccess(response)))
            .catch(()=>dispatch(getTableFail()))
    }
}

let getCurrentInfo=(data)=>{
    return{
        type:types.GET_CURRENT_INFO,
        payload:data
    }
}

let connectedSocket=()=>{
    console.log('到这里了啦啦啦啦啦啦啦啦啦')
    return{
        type:types.CONNECTED_SOCKET,
    }
}

let disConnectedSocket=()=>{
    return{
        type:types.DIS_CONNECTED_SOCKET,
    }
}
export default {
    getTable,
    getCurrentInfo,
    connectedSocket,
    disConnectedSocket,
}