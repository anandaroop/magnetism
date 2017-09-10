export function fetchArtistData(id) {
  const headers = {
    'Content-Type': 'application/json'
  }

  const options = {
    headers: headers
  }

  return window.fetch(`/artist-roster/fetch-artist?id=${id}`, options)
}
