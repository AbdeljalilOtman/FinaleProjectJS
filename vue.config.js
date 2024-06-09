const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: 'dist',
  assetsDir: 'static',
  devServer: {
    host: 'localhost',
    port: 8080,
    open: true,
  },
  css: {
    extract: true,
  },
})
