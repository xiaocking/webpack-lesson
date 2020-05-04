const merge = require("webpack-merge");
const commonCongig = require("./webpack.common");

const prodConfig = {
  mode: "production",
  devtool: "cheap-module-source-map", // production
};
module.exports = merge(commonCongig, prodConfig);
