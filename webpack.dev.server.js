const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');//清理dist文件夹
const webpack = require('webpack');
module.exports = {
  entry:{
    app:[
      'react-hot-loader/patch',
      './src/index.js'],
      vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux']
  } ,
  output:{
    filename:'[name].[hash].js',
    path:path.resolve(__dirname,'dist'),
    publicPath:'/',
    chunkFilename: '[name].[chunkhash].js'
  },
  optimization:{
    splitChunks:{
      cacheGroups: {
        commons: {
          name:'vendor',
          chunks: "initial",
          minChunks: 2
        }
      } 
    }
  },
  mode: 'development',
 devtool: 'inline-source-map',
  module:{
    rules:[
      {
        test:/\.js$/,
        exclude:/node_modules/,
        use: {
          loader: 'babel-loader',
        },
      }
    ]
  },
  resolve:{
    extensions: ['.js', '.jsx']
  },
 
  plugins:[
    new CleanWebpackPlugin(['dist/*.js']),
    new HtmlWebpackPlugin({
      filename:'index.html',
      template: path.join(__dirname, 'src/index.html')
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer:{
    contentBase:path.resolve(__dirname,'./dist'),
    port:3000,
    compress: true,
    hot:true,
    proxy: [
      {
           context: ['/exchange/*'],
           target: 'https://www.binance.co',
           changeOrigin: true,
           secure: false
     }
  ]
  }
}