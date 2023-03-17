const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
  entry:  {
    app:'./src/index.js'
  },
  
  output: {
    path: path.join(__dirname, "/dist"),
    publicPath: '/',
    filename: "main.js",
    assetModuleFilename: 'images/[name][ext]',
    clean: true, 
  },

  mode: "development",


  devServer: {
    static: {
    directory: path.join(__dirname, "/dist")
    },
  port: 65535,
  devMiddleware: {
    writeToDisk: true,
  },
  open: true,
},


  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              minimize: true,
            }
          }
        ]
      },

      {
        test:/\.css$/,
        use: [
          //'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },

      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
      },

      {

        test: require.resolve('jquery'),

        loader: 'expose-loader',

        options: {

          exposes: ['$', 'jQuery'],

        }

      },

    ]
  },




  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
    }),
    new HtmlWebpackPlugin({
      filename: "product.html",
      template: "./src/product.html",
    }),



    new MiniCssExtractPlugin({filename: "css/style.css"}),

    new OptimizeCSSAssetsPlugin({}),
  ],
};