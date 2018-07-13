'use strict';
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseObj = require('./base.webpack.config');

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
const ImageMinPlugin = require('imagemin-webpack-plugin').default;

module.exports = merge(baseObj, {
    plugins: [
        new CleanWebpackPlugin(['dist'], {
            root: path.resolve(__dirname, '../'),
            // 打日志
            verbose: true,
            // 移除文件
            dry: false
        }),

        new CommonsChunkPlugin({
            name: 'vendors'
        }),

        new UglifyJSPlugin({
            test: /\.js($|\?)/i,
            parallel: 4
        }),

        new ImageMinPlugin({
            // svg: https://github.com/svg/svgo#what-it-can-do
            svgo: {
                cleanupAttrs: true
            },
            // png: https://github.com/imagemin/imagemin-pngquant
            pngquant: {
                quality: '95-100'
            }
        }),

        new webpack.LoaderOptionsPlugin({
            minimize: true
        }),

        new webpack.HashedModuleIdsPlugin()
    ],
    devtool: false,

    performance: {
        hints: false
    }
});
