const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        filename: 'main.js',
        path: `${__dirname}/dist`,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            }
        ]
    },
    devServer: {
        static: './dist',
        port: 8080,
    },
    plugins: [
        new HtmlWebpackPlugin({
        template: './src/html/index.html'
        }),
        new MiniCssExtractPlugin({
            linkType: false,
        }),
    ],
};