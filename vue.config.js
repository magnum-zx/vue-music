const webpack = require('webpack');
const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  // 生产环境打包不输出 map
  productionSourceMap: false,
  devServer: {
    disableHostCheck: true,
    port: process.env.DEV_SERVER_PORT || 8080,
    proxy: {
      '^/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/',
        },
      },
    },
  },
  pwa: {
    name: 'VueMusic',
    iconPaths: {
      favicon32: 'img/icons/favicon-32x32.png',
    },
    themeColor: '#ffffff00',
    manifestOptions: {
      background_color: '#335eea',
    },
    // workboxOptions: {
    //   swSrc: "dev/sw.js",
    // },
  },
  // 用于多页配置
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'VueMusic',
      chunks: ['main', 'chunk-vendors', 'chunk-common', 'index'],
    },
  },
  chainWebpack(config) {
    config.module.rules.delete('svg');
    config.module.rule('svg').exclude.add(resolve('src/assets/icons')).end();
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/assets/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]',
      })
      .end();
    config.module
      .rule('napi')
      .test(/\.node$/)
      .use('node-loader')
      .loader('node-loader')
      .end();

    // LimitChunkCountPlugin 可以通过合并块来对块进行后期处理。用以解决 chunk 包太多的问题
    config.plugin('chunkPlugin').use(webpack.optimize.LimitChunkCountPlugin, [
      {
        maxChunks: 3,
        minChunkSize: 10_000,
      },
    ]);
  },
  // 添加插件的配置
  pluginOptions: {
    // electron-builder的配置文件
  },
};
