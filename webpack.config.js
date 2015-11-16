var fs = require('fs');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
//var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var path = require('path');
module.exports = {
    //entry: [path.resolve(__dirname, 'App/js/main.js')],
    entry: {
        main: ['./App/js/main.js'],
        index: ['./App/js/index.js'],
        commons : ['./App/js/d.js','./App/js/e.js']
    },
    output: {
        filename: '[name].js',
        path: 'App/assets/',
        publicPath: "assets/",
        chunkFilename: "[chunkhash].bundle.js"
        /*path: path.resolve(debug ? '/App/__build/' : 'App/assets/'),
        filename: debug ? '[name].js' : 'js/[chunkhash:8].[name].min.js',
        chunkFilename: debug ? '[chunkhash:8].chunk.js' : 'js/[chunkhash:8].chunk.min.js',
        publicPath: debug ? '/App/__build/' : 'assets/'*/
    },
    module: {
        loaders: [
            //{ test: /\.css$/, loader: 'style!css' },
            //{ test: /\.js$/, loader: 'jsx-loader?harmony'},
            { test: /\.js[x]?$/, loader: 'babel-loader' },
             {test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader")},
            //{test: /\.scss$/, loader: "style!css!autoprefixer"},
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=88888192'},
            { test: /\.htm[l]?$/, loader: 'html-loader' }
        ]
    },
    plugins: [
        //commonsPlugin,
        new webpack.optimize.CommonsChunkPlugin('common.js'),
        new ExtractTextPlugin("[name].css"),
        //new ExtractTextPlugin("style.css", {allChunks: true}),
        function() {
            this.plugin("done", function(stats) {
              require("fs").writeFileSync(
                path.join(__dirname, "stats.json"),
                JSON.stringify(stats.toJson()));
            });
        }
    ],
    resolve: {
        //查找module的话从这里开始查找
        root: __dirname + '/App/', //绝对路径
        //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
        extensions: ['', '.js', '.json', '.scss'],
         //模块别名定义，方便后续直接引用别名，无须多写长长的地址
        alias: {
             //zepto: path.join(__dirname, '/node_modules/zepto/dist/zepto.min.js'),//后续直接 require('zepto') 即可
        }
    }
};
