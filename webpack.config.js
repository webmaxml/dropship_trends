'use strict';

const webpack = require( 'webpack' );
const autoprefixer = require( 'autoprefixer' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const ReloadPlugin = require( 'reload-html-webpack-plugin' );
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );
const NODE_ENV = process.env.NODE_ENV || 'development';

let cssExtract = new ExtractTextPlugin( 'style.min.css', { allChunks: true } );

// css loader sourcemaps crushes file loader relative paths, we dont need that
let cssLoader = NODE_ENV === 'development' ? 'style!css!postcss!resolve-url!sass?sourceMap' : 
                                             cssExtract.extract( 'css?postcss!sass' );

module.exports = {

    debug: false,

    entry: {
        app: [ 'babel-polyfill', './src/index.js' ],
    },

    output: {
        path: __dirname + "/dist",
        publicPath: '/',
        filename: "[name].min.js",
        library: 'foo'
    },

    devServer: {
        host: 'localhost',
        port: 8080,
        contentBase: __dirname + '/dist'
    },

    externals: {
        jQuery: 'jQuery',
        $: '$',
        WOW: 'WOW',
        blueimp: 'blueimp'
    },

    resolveLoader: {
        modulesDirectories: [ 'node_modules' ],
        modulesTemplates: [ '*-loader', '*' ],
        extensions: [ '','.js' ]
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel",
                query: {
                    presets: [ 'es2015', 'react' ],
                    plugins: [ 'transform-runtime' ],
                    cacheDirectory: '.babel-cache'
                }
            },
            
            {
                test: /\.scss$/,
                loader: cssLoader
            },
            {
                test: /\.pug$/,
                loader: 'pug?pretty=true'
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                loader: 'file?name=img/[name].[ext]?[hash]!image-webpack?{bypassOnDebug:true,optimizationLevel:7,progressive:true,pngquant:{quality:"65-90",speed:4}}'
            },
            {
                test: /\.(ttf|eot|woff)$/,
                loader: 'file?name=fonts/[name].[ext]?[hash]'
            }
        ]
    },

    postcss: function () {
        return [ autoprefixer ];
    },

    devtool: NODE_ENV === "development" ? "inline-source-map" : null,

    plugins: [
        new ReloadPlugin(),
        new webpack.NoErrorsPlugin(), 
        cssExtract,
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify( NODE_ENV )
        }),
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            _:"underscore",
            Backbone: "backbone"
        })
    ]   
};

if ( NODE_ENV == 'production' ) {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                unsafe: true
            }
        })
    );      
};