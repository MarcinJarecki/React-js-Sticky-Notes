var HtmlWebpackPlugin = require('html-webpack-plugin');

var path = require('path');
var webpack = require('webpack');

var hot_load_port = process.env.HOT_LOAD_PORT || 2992;

var config = {
  devtool: 'eval',
  entry: [
    './app/index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "index-bundle.js",
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint'
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel-loader'],  
        include: path.join(__dirname, 'app')
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader",
        include: path.join(__dirname, 'app')
      }
    ]
  },
  eslint: {
    failOnError: false,
    emitWarning: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + '/app/index.html',
      filename: 'index.html',
      inject: 'body'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dev'),
    historyApiFallback: true,
    hot: true,
    progress: true,
    stats: 'errors-only',
    port: hot_load_port,
    host: '192.168.1.156'
  }

};

module.exports = config;