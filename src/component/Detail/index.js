import React, {Component} from 'react';
import {connect} from 'react-redux';
import tableAction from "../../redux/actions/tableAction";
import {bindActionCreators} from 'redux'
import socketHandle from '../../socket'
export class Detail extends Component {
    createOrCloseSocket=()=>{
        const {socket} = this.props
        if(socket){
            socketHandle.socketClose()
        }else{
            socketHandle.creatWS()
        }
    }
    render() {
        const {currentInfo,socket} = this.props;
        let buttonText =socket?'close':'connect'    
        return (
            <div>
                <div><button onClick={buttonText}></button></div>
                <div className='baseAssetName'>{`baseAssetName:${currentInfo.baseAssetName}`}</div>
                <div>{`Binance Coin:${currentInfo.quoteAssetName}`}</div>
                <div>{`close:${currentInfo.close}`}</div>
                <div>{`status:${currentInfo.status}`}</div>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        currentInfo :state.app.table.currentInfo,
        socket :state.app.table.socket
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        actions: bindActionCreators(Object.assign({},
            tableAction
        ), dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Detail);