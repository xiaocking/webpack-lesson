const merge = require("webpack-merge");
const commonCongig = require("./webpack.common");
const WorkboxPlugin = require("workbox-webpack-plugin");

const prodConfig = {
  mode: "production",
  devtool: "cheap-module-source-map", // production
  plugins: [
    new WorkboxPlugin.GenerateSW({
      // these options encourage the ServiceWorkers to get in there fast
      // and not allow any straggling "old" SWs to hang around
      clientsClaim: true,
      skipWaiting: true,
    }),
  ],
};
module.exports = merge(commonCongig, prodConfig);
