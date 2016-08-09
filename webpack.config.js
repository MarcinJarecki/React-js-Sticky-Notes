var HtmlWebpackPlugin = require('html-webpack-plugin');

var path = require('path');
var webpack = require('webpack');

var port = process.env.HOT_LOAD_PORT || 2992;

var config = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:' + port,
    'webpack/hot/only-dev-server',
    path.join(__dirname, 'app')
    // './app/index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "index-bundle.js",
    publicPath: '/static/'
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
        loaders: ['react-hot', 'babel'],
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
      inject: true
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true,
    hot: true,
    progress: true,
    stats: 'errors-only',
    port: port
  }

};


// if (process.env.NODE_ENV === "development") {
//   config.devtool = 'eval'; // This is not as dirty as it looks. It just generates source maps without being crazy slow.
// }

// if (process.env.NODE_ENV === "production") {
//   config.resolve.alias = { 'react-a11y': function () { } }; // Aliases react-a11y to nothing in production
// }

config.port = port;

module.exports = config;