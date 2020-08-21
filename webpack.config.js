const path = require('path');

const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: "[name].js"
    },
    module: {
        rules: [
            {test: /\.sass$/i, use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']},
            {test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader']},
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {name: "[name].[ext]", outputPath: 'img'},
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
        new HtmlWebpackPlugin({
            filename: "home.html",
            template: "./src/pages/home.html",
            chunks: ["main"]
        }),
        new HtmlWebpackPlugin({
            filename: "contacts.html",
            template: "./src/pages/contacts.html",
            chunks: ["main"]
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
    ]
}