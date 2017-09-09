const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: {
    artistRoster: './apps/artist-roster/client.js'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public/assets'),
    publicPath: '/assets'
  },
  plugins: [
    new CleanWebpackPlugin(['public/assets'])
  ],
  devtool: 'inline-source-map'
}
