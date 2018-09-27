const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');//清理dist文件夹

module.exports = {
  entry:'./src/index.js',
  output:{
    filename:'app.js',
    path:path.resolve(__dirname,'dist'),
    publicPath:'/'
  },
  mode:'development',
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
  plugins:[
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, 'src/index.html')
    })
  ],
  resolve:{
    extensions: ['.js', '.jsx']
  },
  devServer:{
    contentBase:path.resolve(__dirname,'./dist'),
    port:3000,
    compress: true,
    hot:true
  }
}