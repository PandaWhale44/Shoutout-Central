const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv').config({
  path: path.join(__dirname, './.env'),
});
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['./client/index.js'],
  output: {
    path: path.resolve(__dirname, './build'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  mode: process.env.NODE_ENV,
  devServer: {
    host: 'localhost',
    port: 8080,
    hot: true,
    // match the output path
    contentBase: path.resolve(__dirname, './build'),
    // match the output 'publicPath'
    publicPath: '/',
    // fallback to root for other urls
    historyApiFallback: true,
    inline: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    proxy: {
      // express/postman calls to endpoints
      '/api': {
        target: 'http://localhost:3000',
        secure: false,
      },
    },
  },
  module: {
    rules: [
      {
        test: /jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-transform-runtime', '@babel/transform-async-to-generator'],
          },
        },
      },
      {
        test: /\.((sa|s?c)ss)$/i,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', 'ts', 'tsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './index.html'),
    }),
  ],
};
