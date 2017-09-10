import env from '../env.json'

export function fetchMetaphysicsArtist(id) {
  const payload = JSON.stringify({
    query: `{
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
  })

  const headers = {
    'Content-Type': 'application/json'
  }

  const options = {
    method: 'POST',
    headers: headers,
    body: payload
  }

  return window.fetch(env.metaphysics_url, options)
}
