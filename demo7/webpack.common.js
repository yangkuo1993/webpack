// const path = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
// const webpack = require('webpack')
module.exports = {
    entry: {
        app: './src/app.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Output Management'
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }
}