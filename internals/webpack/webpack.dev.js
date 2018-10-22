const argv = require('../../common/argv');
const webpack = require('webpack');

const plugins = [new webpack.HotModuleReplacementPlugin()];

module.exports = require('./webpack.base')({
  mode: 'development',
  devServer: {
    hot: true,
    port: argv.port || 3000,
  },
  plugins,
});
