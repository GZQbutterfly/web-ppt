const path = require('path');
const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

const options = {
    contentBase: path.resolve(__dirname, '../dist'),
    host: '127.0.0.1',
    port: 3008,
    hot: true,
    historyApiFallback: false,
    compress: true,
};

new WebpackDevServer(Webpack(config), options).listen(options.port, options.host, () => {
    console.log(`Starting server on http://${options.host}:${options.port}`);
});