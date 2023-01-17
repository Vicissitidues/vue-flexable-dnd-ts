module.exports = {
  pages: {
    index: {
      entry: 'examples/main.ts',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  publicPath: './',
  chainWebpack: config => {
    config.module
      .rule('js')
      .include
      .add('/packages')
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        // 修改它的选项...
        return options
      })
  },
  css: {
    requireModuleExtension: true, // setting to true will ignore module for css name
    sourceMap: false, // whether to set soucemap for css, Setting to true may affect the performance of the build
    loaderOptions: {}, // Pass the options to the CSS-related loader
    extract: false // Whether to extract the CSS from the component into a separate CSS file
  }
}
