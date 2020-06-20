/*
 * @Description: custom config
 * @Author: Looper
 * @Date: 2020-06-20 21:05:59
 * @LastEditors: Looper
 * @LastEditTime: 2020-06-20 21:47:28
 * @FilePath: /Travel/vue.config.js
 */
const path = require("path");

module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        pathRewrite: {
          "^/api": "/mock"
        }
      }
    }
  },

  chainWebpack: (config) => {
    config.resolve.alias
      .set("styles", path.join(__dirname, "./src/assets/styles"))
      .set("@", path.join(__dirname, "./src/"))
  }
}