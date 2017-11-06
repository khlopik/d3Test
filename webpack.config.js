var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

var SRC_DIR = path.resolve(__dirname, 'src');
var DIST_DIR = path.resolve(__dirname, 'dist');

module.exports = {
    context: SRC_DIR,
    entry: [
        'babel-polyfill',
        'webpack-dev-server/client?http://localhost:9000',
        'webpack/hot/only-dev-server',
        'react-hot-loader/patch',
        './index.jsx',
    ],
    output: {
        path: DIST_DIR,
        filename: '[name].bundle.js',
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: SRC_DIR,
                use: 'babel-loader',
            },
            {
                test: /\.scss$/,
                include: SRC_DIR,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader', options: {sourceMap: true}},
                    {loader: 'postcss-loader', options: {sourceMap: true}},
                    {loader: 'sass-loader', options: {sourceMap: true}},
                ],
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                include: SRC_DIR,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: '[name].[ext]?[hash]',
                            outputPath: 'img/',
                            limit: 10000,
                        },
                    },
                    {
                        loader: 'img-loader',
                    },
                ],
            },
            {
                test: /\.svg$/i,
                include: SRC_DIR,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]?[hash:5]',
                            outputPath: 'img/',
                        },
                    },
                    {
                        loader: 'img-loader',
                        options: {
                            svgo: {
                                plugins: [
                                    {removeTitle: true},
                                    {cleanupIDs: false},
                                    {convertPathData: false},
                                ],
                            },
                        },
                    },
                ],
            },
            {
                test: /\.(otf|ttf|eot)(\?[a-z0-9#=&.]+)?$/,
                include: SRC_DIR,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/',
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [SRC_DIR, 'node_modules'],
        alias: {
            '@': SRC_DIR,
        },
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'React + Redux Test Task',
            filename: 'index.html',
            template: './index.ejs',
            favicon: './favicon.png',
            inject: true,
            hash: true,
        }),
        // new ExtractTextPlugin({
        //   filename: 'styles.css',
        //   allChunks: true,
        //   disable: false,
        // }),
        new webpack.LoaderOptionsPlugin({minimize: true}),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
    ],
    devtool: 'eval-source-map'
};
