import express from 'express'
import metaphysics from '../../lib/metaphysics'

const router = express.Router()

router.get('/', (req, res) => {
  const query = `{
    match_artist(term: "Warh") {
      id,
      name
    }
  }`
  metaphysics(query).then(data => res.send(data))
 })

export { router }
