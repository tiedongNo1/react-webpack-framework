import React from 'react';
import ReactDom from 'react-dom';
import getRouter from './router/router'
import {AppContainer} from 'react-hot-loader'
import store from './redux/store'
import {Provider} from 'react-redux'

console.log(store.getState().app)
//初始化
renderWithHotReload(getRouter())

//热更新
if (module.hot) {
  module.hot.accept('./router/router.js',()=>{
    const getRouter = require('./router/router').default;
    renderWithHotReload(getRouter())
  });
}

function renderWithHotReload(RootElement){
  ReactDom.render(
    <AppContainer>
      <Provider store={store}>
        {RootElement}
      </Provider>
    </AppContainer>, document.getElementById('app'));
}


