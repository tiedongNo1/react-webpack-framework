import React from 'react';
import {Detail} from '../src/component/Detail'
import { shallow, configure,render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import tableAction from '../src/redux/actions/tableAction'
import * as types from '../src/redux/actionType'
configure({ adapter: new Adapter() })

describe('actions', () => {
    it('socket 连接状态', () => {
      const text = 'CONNECTED_SOCKET'
      const expectedAction = {
        type: types.CONNECTED_SOCKET
      }
      expect(tableAction.connectedSocket()).toEqual(expectedAction)
    })
  })
test('展示详情',()=>{
    const props={currentInfo:{baseAssetName:'Ethereum',
    'Binance Coin':'Bitcoin',
    close:'0.033349',
    status:'TRADING'},socket:false}
    const wrapper = shallow(<Detail {...props}/>)

    expect(wrapper.find('.baseAssetName').text()).toEqual("baseAssetName:Ethereum")
})

