let proxyObj = {};
/*webpack优化 npm install compression-webpack-plugin --save-dev 开启gzip*/
const CompressionPlugin = require("compression-webpack-plugin");
// proxyObj['/ws'] = {
//     ws: true,
//     target: "ws://localhost:8080"
// };
proxyObj["/api"] = {
  ws: false,
  target: "http://10.16.8.120:9080",
  // target: 'http://localhost:83',
  changeOrigin: true,
  pathRewrite: {
    "^/api": "",
  },
};
proxyObj["/work"] = {
  ws: false,
  target: "http://10.16.8.120:8090",
  // target: 'http://localhost:83',
  changeOrigin: true,
  pathRewrite: {
    "^/work": "",
  },
};

module.exports = {
  devServer: {
    disableHostCheck: true,
    port: 83,
    proxy: proxyObj,
  },
  // configureWebpack: (config) => {
  //   if (process.env.NODE_ENV === "production") {
  //     return {
  //       plugins: [
  //         new CompressionPlugin({
  //           test: /\.js$|\.html$|\.css/,
  //           threshold: 1024,
  //           deleteOriginalAssets: false,
  //         }),
  //       ],
  //     };
  //   }
  // },
};
