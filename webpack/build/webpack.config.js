const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode:'development',//开发模式
  // entry:["@babel/polyfill",path.resolve(__dirname,'../src/main.js')],//入口文件
  entry: path.resolve(__dirname,'../src/main.js'),//入口文件
  output: {
    filename:'[name].[hash:8].js',//打包后的文件名称
    path:path.resolve(__dirname,'../dist')//打包后的目录
  },
  plugins: [
    new HtmlWebpackPlugin({
      template:path.resolve(__dirname,'../public/index.html')
    }),
    new MiniCssExtractPlugin({
      filename:"[name].[hash].css",
      chunkFilename:"[id].css"
    }),
    new CleanWebpackPlugin()
  ],
  module:{
    rules:[
      {
        test:/\.css$/,
        use:['style-loader','css-loader']//从左向右解析原则
      },
      {
        test:/\.scss$/,
        use:[MiniCssExtractPlugin.loader,'css-loader',{
          loader:'postcss-loader',
          options:{
            plugins:[require('autoprefixer')]
          }
        },'sass-loader']
      },
      {
        test:/\.(jpe?g|png|jpg|gif)$/i, //图片文件
        use: [
          {
            loader:'url-loader',
            options: {
              limit:10240,
              fallback: {
                loader:'file-loader',
                options: {
                  name:'[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      {
        test:/\.js/,
        use:{
          loader:'babel-loader',
          options:{
            presets:['@babel/preset-env']
          }
        },
        exclude:/node_modules/
      }
    ]
  }
}