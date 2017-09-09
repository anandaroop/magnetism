const path = require('path')

module.exports = {
  entry: {
    artistRoster: './apps/artist-roster/client.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public/assets'),
    publicPath: '/assets'
  }
}
