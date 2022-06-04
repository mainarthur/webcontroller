// eslint-disable-next-line import/no-extraneous-dependencies
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

// @ts-ignore
const config = merge(common, {
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    port: 3003,
  },
})

module.exports = config
