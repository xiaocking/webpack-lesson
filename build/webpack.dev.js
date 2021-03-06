const webpack = require("webpack");

const merge = require("webpack-merge");
const commonCongig = require("./webpack.common");

const devConfig = {
  mode: "development",
  devtool: "cheap-module-eval-source-map", // development
  plugins: [new webpack.HotModuleReplacementPlugin()],

  devServer: {
    contentBase: "./bundle",
    open: true,
    port: "8090",
    hot: true,
    // hotOnly: true,
  },
};
module.exports = merge(commonCongig, devConfig);
