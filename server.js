const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const proxy = require('http-proxy-middleware')
const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));
app.all('/exchange/public/*', proxy('/exchange/public', {
  target: 'https://www.binance.co',
  changeOrigin: true,
  protocolRewrite: true,
  secure: false,
}));

app.all('/ws/*', proxy('/ws/bnbbtc@depth20', {
  target: "wss://stream.binance.cloud:9443",
  changeOrigin: true,
  protocolRewrite: true,
  secure: false,
}));
// Serve the files on port 3000.
app.listen(3000, function () {
  console.log('Example app listening on port 3000!\n');
});