import React, {Component} from 'react';
import {connect} from 'react-redux';
import tableAction from "../../redux/actions/tableAction";
import {bindActionCreators} from 'redux'
import {  Link} from 'react-router-dom'
import socket from '../../socket'
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    componentDidMount(){
        this.props.actions.getTable()
        if(!this.props.table.socket){
            socket.creatWS()
        }
    }

    render() {
        const {searchError, list,socket } = this.props.table
        let tableHead=   <thead>
        <tr>
          <th>baseAssetName</th>
          <th>quoteAssetName</th>
          <th>close</th>
          <th>status</th>
          <th>operate</th>
        </tr>
      </thead>

      let  tbodyTr=<tr><th>暂无数据</th></tr>
      if(list&&list.length>0){
        tbodyTr=[]
          list.forEach(data=>{
            tbodyTr.push(<tr key={data.symbol}><th>{data.baseAssetName}</th>
                <th>{data.quoteAssetName}</th>
                <th>{data.close}</th>
                <th>{data.status}</th>
                <th><Link to='/detail'><span onClick={()=>this.props.actions.getCurrentInfo(data)}>operate</span></Link></th></tr>)
          })
      }
      let tableBody = <table border="1">
      {tableHead}
      <tbody>
      {tbodyTr}
      </tbody>
    </table>
    
        return (
            <div>
                {tableBody}
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        table :state.app.table
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        actions: bindActionCreators(Object.assign({},
            tableAction
        ), dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);