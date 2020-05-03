const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/index.js",
  },
  devtool: "cheap-module-eval-source-map", // development
  // devtool: "cheap-module-source-map",// production
  output: {
    publicPath: "./",
    filename: "[name]_[hash:6].js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new CleanWebpackPlugin(),
  ],
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
          "style-loader",
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
    ],
  },
};
