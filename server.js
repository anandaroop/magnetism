import express from 'express'

const app = express()

app.use('/artist-roster', require('./apps/artist-roster').router)

app.get('/', (req, res) => {
  res.redirect('/artist-roster')
})

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`)
})
