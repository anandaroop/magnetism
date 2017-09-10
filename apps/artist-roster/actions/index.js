import { fetchArtistData } from '../helpers/fetch'

export const ADD_ARTIST = 'ADD_ARTIST'
export const REMOVE_ARTIST = 'REMOVE_ARTIST'
export const REMOVE_ALL_ARTISTS = 'REMOVE_ALL_ARTISTS'
export const REQUEST_ARTIST = 'REQUEST_ARTIST'
export const REQUEST_ARTIST_ERROR = 'REQUEST_ARTIST_ERROR'
export const RECEIVE_ARTIST = 'RECEIVE_ARTIST'

export function addArtist(artistId) {
  return { type: ADD_ARTIST, artistId }
}

export function removeArtist(artistId) {
  return { type: REMOVE_ARTIST, artistId }
}

export function removeAllArtists() {
  return { type: REMOVE_ALL_ARTISTS }
}

export function requestArtist(artistId) {
  return { type: REQUEST_ARTIST, artistId }
}

export function requestArtistError(artistId, error) {
  return { type: REQUEST_ARTIST_ERROR, artistId, error }
}

export function receiveArtist(artistId, artist) {
  return { type: RECEIVE_ARTIST, artistId, payload: artist }
}

export function fetchArtist(artistId) {
  return function(dispatch) {
    dispatch(requestArtist(artistId))
    fetchArtistData(artistId)
      .then(
        response => {
          return response.json()
        },
        error => {
          dispatch(requestArtistError(artistId, error))
          console.error(error)
        }
      )
      .then(json => {
        dispatch(receiveArtist(artistId, json.data.artist))
      })
  }
}
