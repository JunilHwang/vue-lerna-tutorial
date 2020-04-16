const path = require('path')

module.exports = {
  pages: {
    index: {
      entry: './src/main.ts'
    }
  },

  chainWebpack: config => {
    config.resolve.alias.set('@', path.join(__dirname, './src'))
  }
}