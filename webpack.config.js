const webpack = require('webpack');
const packagejson = require("./package.json");
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'mpegts.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'mpegts',
        libraryTarget: 'umd'
    },

    devtool: 'source-map',

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
        fallback: {
            'fs': false,
            'path': false
        }
    },

    plugins: [
        new webpack.DefinePlugin({
          __VERSION__: JSON.stringify(packagejson.version)
        })
    ],

    module: {
        rules: [
            {
                test: /\.(ts|js)$/,
                use: 'ts-loader',
                exclude: /node-modules/
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                use: 'source-map-loader'
            }
        ]
    },

    devServer: {
        static: ['demo'],
        proxy: [
            {
                context: ['/dist'],
                target: 'http://localhost:8080',
                pathRewrite: {'^/dist' : ''}
            }
        ]
    }
};
