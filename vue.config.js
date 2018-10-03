const Dotenv = require('dotenv-webpack')

module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/eth-wallet/'
    : '/',
  outputDir: 'docs',
  configureWebpack: {
    plugins: [new Dotenv()]
  }
}