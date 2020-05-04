const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");

function pathJoin(dir) {
  return path.resolve(__dirname, dir);
}

module.exports = {
  entry: {
    main: "./src/index.js",
  },
  output: {
    // publicPath: "./",
    filename: "[name]_[hash:6].js",
    path: path.resolve(__dirname, "../dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new webpack.ProvidePlugin({
      _: "loadsh",
    }),
  ],
  optimization: {
    splitChunks: {
      // 默认配置
      chunks: "async",
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 6,
      maxInitialRequests: 4,
      automaticNameDelimiter: "~",
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
    usedExports: true,
  },
  module: {
    rules: [
      {
        test: /\.(jpg|png|gif)$/,
        loader: "url-loader",
        options: {
          outputPath: "images/",
          name: "[name]_[hash:6].[ext]",
          limit: 10240,
        },
      },
      {
        test: /\.(eot|woff|ttf|svg)$/,
        loader: "file-loader",
        options: {
          name: "[name]_[hash:6].[ext]",
          outputPath: "font",
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,

          // "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              importLoaders: 2,
              // modules: true,css模块化配置
            },
          },
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              sourceMap: true,
              plugins: (loader) => [
                require("autoprefixer")({
                  overrideBrowserslist: ["> 0.15% in CN"],
                }), // 添加前缀
              ],
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
    ],
  },
};
