import { addArtist, removeArtist, removeAllArtists, receiveArtist } from '../actions'
import rootReducer from './'

it('adds an artist', () => {
  const initialState = {
    artistIds: []
  }
  const expectedState = {
    artistIds: ['andy-warhol']
  }
  const action = addArtist('andy-warhol')

  const newState = rootReducer(initialState, action)

  expect(newState).toMatchObject(expectedState)
})

it('removes an artist', () => {
  const initialState = {
    artistIds: ['andy-warhol']
  }
  const expectedState = {
    artistIds: []
  }
  const action = removeArtist('andy-warhol')

  const newState = rootReducer(initialState, action)

  expect(newState).toMatchObject(expectedState)
})

it('removes all artists', () => {
  const initialState = {
    artistIds: ['andy-warhol', 'barbara-kruger']
  }
  const expectedState = {
    artistIds: []
  }
  const action = removeAllArtists()

  const newState = rootReducer(initialState, action)

  expect(newState).toMatchObject(expectedState)
})

it('receives an artist from the network', () => {
  const initialState = {
    artistsById: {}
  }
  const expectedState = {
    artistsById: { 'andy-warhol': { name: 'Andy Warhol', counts: { foo: 42 } } }
  }
  const action = receiveArtist('andy-warhol', { name: 'Andy Warhol', counts: { foo: 42 } })

  const newState = rootReducer(initialState, action)

  expect(newState).toMatchObject(expectedState)
})
