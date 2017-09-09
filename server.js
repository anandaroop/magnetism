import express from 'express'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'

const app = express()
const config = require('./webpack.config.js');
const compiler = webpack(config);

app.use(express.static('public'))

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

app.use('/artist-roster', require('./apps/artist-roster').app)

app.get('/', (req, res) => {
  res.redirect('/artist-roster')
})

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`)
})
