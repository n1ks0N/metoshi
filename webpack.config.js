const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
  entry: [
    'react-hot-loader/patch',
    './src/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new MiniCssExtractPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      },
      {
        test: /\.(png|jpg|jpeg|svg|gif)$/,
        include: [
          path.resolve(__dirname, './dist/img/') 
        ],
        use: [{
          loader: 'file-loader',
          options: {
            name: './dist/img/[hash].[ext]',
          }
        }]
      },
      {
        test: /\.(ttf|eot|woff|woff2|png|jpg|jpeg|svg|gif)$/,
        loader: 'url-loader'
      }
    ]
  },
  devServer: {
    'static': {
      directory: './dist'
    }
  }
};

module.exports = config;