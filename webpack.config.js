var webpack = require('webpack');
var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports ={
    entry:{
        app:[
          './src/js/main.js',
          './src/scss/main.scss'
        ],
    },
    output:{
        path: path.join(__dirname,"app"),
        filename:'js/[name].js'
    },
    module:{
        rules:[
         {
                 test: /\.s[ac]ss$/,
                use: ExtractTextPlugin.extract({
                  use: [
                  {
                    loader:'css-loader',
                    options:{url:false,minimize:true}
                  },
                  'sass-loader'
                  ],
                  fallback: 'style-loader'
                })
         }
        ]
    },
     plugins:[
    new ExtractTextPlugin("./css/[name].css"),
    new webpack.optimize.UglifyJsPlugin()
    ]
};
