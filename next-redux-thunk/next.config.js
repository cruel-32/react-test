const withSass = require('@zeit/next-sass')
const path = require('path');

module.exports = withSass()
module.exports = {
  webpack(config, options) {
    config.resolve = {
      alias: {
        '../': path.resolve(__dirname)
      },
      ...config.resolve
    }
    return config
  }
}