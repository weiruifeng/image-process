const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

function resolve(dir) {
    return path.join(__dirname, '..', dir);
}
const preFix = process.env.NODE_ENV === 'production' ? '' : 'static/financePlatform/';
const publicPath = process.env.NODE_ENV === 'production' ? '/static/financePlatform/' : '/';
module.exports = {
    entry: {
        app: ['./src/main.js'],
        vendors: ['vue', 'vue-router']
    },

    output: {
        publicPath: publicPath,
        path: path.resolve(__dirname, '../dist'),
        filename: `${preFix}js/[chunkhash:8].[name].js`,
        chunkFilename: `${preFix}js/[chunkhash:8].[name].js`,
        libraryTarget: 'umd'
    },

    resolve: {
        alias: {
            '@': resolve('src'),
            '@components': path.resolve(__dirname, '../src/components'),
            '@views': path.resolve(__dirname, '../src/views'),
            '@plugins': path.resolve(__dirname, '../src/plugins')
        },
        extensions: ['.js', '.json', '.css', '.scss', '.html']
    },

    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        'scss': ExtractTextPlugin.extract({
                            use: ['css-loader', 'sass-loader'],
                            fallback: 'vue-style-loader'
                        })
                    }
                }
            },

            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },

            {
                test: /\.scss/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },

            {
                test: /\.css/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader']
                })
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: `${preFix}fonts/[name].[hash:7].[ext]`
                }
            },

            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: `${preFix}img/[name].[hash:8].[ext]`
                }
            }
        ]
    },

    plugins: [
        new ExtractTextPlugin({
            filename: (getPath) => {
                return getPath(`${preFix}css/[name].[hash:8].css`).replace('css/js', 'css');
            },
            allChunks: false
        }),
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html',
            chunks: ['app', 'vendors'],
            inject: 'body',
            minify: {
                // 移除HTML中的注释
                removeComments: true,
                // 删除空白符与换行符
                collapseWhitespace: true
            }
        })
    ]
};
