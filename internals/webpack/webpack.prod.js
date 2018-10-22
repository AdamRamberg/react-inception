const argv = require('../../common/argv');
const path = require('path');
const plugins = [];

module.exports = require('./webpack.base')({
  mode: 'production',
  devServer: {
    port: argv.port || 3000,
    contentBase: path.join(process.cwd(), 'dist/'),
  },
  plugins,
});
