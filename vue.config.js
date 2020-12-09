// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  lintOnSave: true,
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'assets',
  devServer: {
    // proxy: {

    // }
  },
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json', '.css', '.ts'],
    },
  },
  css: {
    // 是否开启支持 foo.module.css 样式
    modules: false,

    // 是否使用 css 分离插件 ExtractTextPlugin，采用独立样式文件载入，不采用 <style> 方式内联至 html 文件中
    extract: true,

    // 是否构建样式地图，false 将提高构建速度
    sourceMap: false,

    // css预设器配置项
    loaderOptions: {
      css: {
        // options here will be passed to css-loader
      },

      postcss: {
        // options here will be passed to postcss-loader

      },
    },
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@$', resolve('src'));
    config.plugins.delete('preload');
    config.plugins.delete('prefetch');
  },
};
