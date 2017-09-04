import express from 'express'

const app = express()

app.use('/artist-roster', require('./apps/artist-roster').router)

app.get('/', (req, res) => {
  res.redirect('/artist-roster')
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
})
