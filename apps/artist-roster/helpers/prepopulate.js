import { addArtist, fetchArtist } from '../actions'

export default store => {
  store.dispatch(addArtist('andy-warhol'))
  store.dispatch(fetchArtist('andy-warhol'))
  store.dispatch(addArtist('barbara-kruger'))
  store.dispatch(fetchArtist('barbara-kruger'))
  store.dispatch(addArtist('chris-ofili'))
  store.dispatch(fetchArtist('chris-ofili'))
}
