const { GenerateSW } = require("workbox-webpack-plugin");

module.exports = {
  devServer: {
    proxy: {
      "^/api": {
        target: "https://coincheck.com"
      }
    }
  },
  pwa: {
    name: "hello-vuex",
    appleMobileWebAppCapable: "no",
    appleMobileebAppStatusBarStyle: "black",
    workerboxPluginMode: "GenerateSW",
    workerboxOptions: {}
  },
  configureWebpack: config => {
    config.plugins.push(
      new GenerateSW({
        cacheId: "hello-vuex",
        skipWaiting: false,
        clientsClaim: false
      })
    );
  }
};
