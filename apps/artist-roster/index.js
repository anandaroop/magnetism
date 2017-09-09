import express from 'express'
import metaphysics from '../../lib/metaphysics'

const app = express()
app.set('view engine', 'pug')
app.set('views', `${__dirname}/views`)

app.get('/', (req, res) => {
  const query = `{
    match_artist(term: "Warh") {
      id,
      name
    }
  }`
  metaphysics(query).then(data => res.send(data))
})

app.get('/pug', (req, res) => {
  res.render('index.pug', { title: 'React', message: 'Hello, React?' })
})

export { app }
