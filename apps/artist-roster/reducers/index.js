import { combineReducers } from 'redux'
import { ADD_ARTIST, REMOVE_ARTIST, REMOVE_ALL_ARTISTS, RECEIVE_ARTIST } from '../actions'

function artistIds(state = [], action) {
  switch (action.type) {
    case ADD_ARTIST:
      return [...state, action.artistId]
    case REMOVE_ARTIST:
      return state.filter(id => id !== action.artistId)
    case REMOVE_ALL_ARTISTS:
      return []
    default:
      return state
  }
}

function artistsById(state = {}, action) {
  switch (action.type) {
    case RECEIVE_ARTIST:
      const { artistId, payload } = action
      return { ...state, [artistId]: payload }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  artistIds,
  artistsById
})

export default rootReducer
