import  tableAction from './redux/actions/tableAction'
import store from './redux/store'
let ws
let dispatch = store.dispatch
let creatWS=()=>{
    ws = new WebSocket('wss://stream.binance.cloud:9443/ws/bnbbtc@depth20');

    ws.onopen = function(e){
        console.log("连接服务器成功");
        dispatch(tableAction.connectedSocket())
    }
    ws.onclose = function(e){
        console.log("服务器关闭");
        dispatch(tableAction.disConnectedSocket())
    }
    ws.onerror = function(){
        console.log("连接出错");
    }
    ws.onmessage = function(e){
        
    }  
} 
let socketClose=()=>{
    ws.close()
}
    
export default {creatWS,socketClose}
    
