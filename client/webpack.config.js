require('@babel/polyfill');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = (env) => {
    const isProduction = env === 'production'
    return {
        mode: isProduction ? 'production': 'development',
        entry: ['@babel/polyfill', './src/index.js'],
        output: {
            path: path.join(__dirname, '../', 'app', 'static', 'assets', 'dist'),
            filename: isProduction ? 'bundle.[contenthash].js': 'bundle.js'
        },
        module: {
            rules: [{
                test: /\.js/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },{
              test: /\.scss$/,
              use: [
                "style-loader",
                MiniCssExtractPlugin.loader,
                "css-loader",
                "sass-loader"
              ]
            }]
        },
        plugins: [ 
          new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: isProduction ? 'styles.[contenthash].css':'styles.css',
            chunkFilename: 'styles.[contenthash].css',
          }),
          
          new HtmlWebpackPlugin({
            inject: false,
            template: './public/index.html',
            filename: '../../../app/templates/index.html'
          })
        ],
        performance : {
            hints : false
        },        
        devtool: isProduction ? 'source-map' : 'inline-source-map'
    }
};