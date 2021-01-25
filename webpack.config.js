const path = require('path');
const { merge } = require('webpack-merge');
const base = require('../../webpack.config.base');
const commonId = require('../../webpack-plugin/commonId.js');
const {url, name} = require('./config');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = merge(
  {
    entry: './index.js',
    output: {
      path: path.join(__dirname, './lib'),
      filename: '[name][hash].js',
    },
    plugins: [new (commonId(url, name))(), new CleanWebpackPlugin(),],
    externals: ['@feitu/imis']
  },
  base,
);
