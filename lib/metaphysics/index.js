import 'isomorphic-fetch'

const metaphysics = (query) => {
  return fetch(process.env.METAPHYSICS_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },

    body: JSON.stringify({ query })
  }).then(res => res.json())
}

export default metaphysics
