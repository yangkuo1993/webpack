const Merge = require('webpack-merge')
const CommonConfig = require('./webpack.common.js')
const UglifyJSPlugin  = require('uglifyjs-webpack-plugin')
const webpack = require('webpack')
module.exports = Merge(CommonConfig, {
    devtool: 'cheap-module-source-map',
    plugins: [
        new UglifyJSPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common'  // 公共模块打包名称
        })
    ]
})