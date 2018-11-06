import express from 'express'
import metaphysics from '../../lib/metaphysics'

const app = express()
app.set('view engine', 'pug')
app.set('views', `${__dirname}/views`)

app.get('/', (req, res) => {
  res.render('index.pug')
})

app.get('/match-artist', (req, res) => {
  const q = req.query.q
  const query = `{
    match_artist(term: "${q}", size: 5) {
      id,
      name,
      nationality,
      birthday
    }
  }`
  metaphysics(query).then(data => res.send(data))
})

app.get('/fetch-artist', (req, res) => {
  const id = req.query.id
  const query = `{
    artist(id: "${id}") {
      id,
      name,
      counts {
        artworks
        follows
        for_sale_artworks
        partner_shows
        related_artists
        articles
      }
    }
  }`
  metaphysics(query).then(data => res.send(data))
})

export { app }
