/* eslint-disable no-var */
var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  devtool: 'source-map',

  entry: {
    app: './src/demo/index.jsx',
  },

  output: {
    path: path.join(__dirname, 'dist/demo'),
    filename: '[name].js',
    libraryTarget: 'umd',
    publicPath: '/',
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new CopyWebpackPlugin([
      { from: 'src/demo/index.html', to: 'index.html' }
    ]),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src'),
        exclude: path.join(__dirname, 'src/lib'),
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
      },
      {
        test: /\.scss/,
        loaders: [
          'style',
          'css?modules&importLoaders=2&localIdentName=[name]__[local]__[hash:base64:6]',
          'autoprefixer',
          'sass',
        ],
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loaders: ['url?limit=10000&mimetype=application/font-woff&name=fonts/[hash].[ext]'],
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loaders: ['file?name=fonts/[hash].[ext]'],
      },
      {
        test: /\.(png|jpg|gif|ico)$/,
        loaders: ['file?name=images/[hash].[ext]'],
      }
    ],
  }, // module

  sassLoader: {
    includePaths: [path.resolve(__dirname, "./src/scss")]
  },
};
