const path = require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        'main': path.resolve(__dirname, '../src/index.ts'),
    },
    devtool: 'inline-source-map',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist')
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    plugins:[
        // new CleanWebpackPlugin([path.resolve(__dirname, '../dist')]),
        new HtmlWebpackPlugin({
            title: 'web-ppt',
            filename: 'index.html',
            template: path.resolve(__dirname, '../public/index.html')
        })
    ]
};
