import express from 'express'
import webpack from 'webpack'

const environment = process.env.NODE_ENV || 'development'

const app = express()
app.use(express.static('public'))

if (environment === 'development') {
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const config = require('./webpack.config.js')
  const compiler = webpack(config)
  app.use(
    webpackDevMiddleware(compiler, {
      publicPath: config.output.publicPath
    })
  )
}

app.get('/', (req, res) => {
  res.redirect('/artist-roster')
})

app.use('/artist-roster', require('./apps/artist-roster').app)

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`)
})
