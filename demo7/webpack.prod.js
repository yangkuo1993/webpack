const Merge = require('webpack-merge')
const CommonConfig = require('./webpack.common.js')
const UglifyJSPlugin  = require('uglifyjs-webpack-plugin')

module.exports = Merge(CommonConfig, {
    plugins: [
        new UglifyJSPlugin()
    ]
})