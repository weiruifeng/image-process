const path = require('path');
const merge = require('webpack-merge');
const baseObj = require('./base.webpack.config');

module.exports = merge(baseObj, {
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(js|vue)$/,
                enforce: 'pre',
                loader: 'eslint-loader',
                exclude: /node_modules/,
                options: {
                    fix: true
                },
                include: [
                    path.resolve(__dirname, '../src')
                ]
            }
        ]
    },
    devServer: {
        historyApiFallback: true,

        noInfo: true,

        host: '127.0.0.1',

        port: 3535,

        clientLogLevel: 'none'
    }
});
