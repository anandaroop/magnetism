import React from 'react'
import { Provider } from 'react-redux'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import configureMockStore from 'redux-mock-store'

import { ArtistList } from '.'

let mockStore = configureMockStore([])({})

const Layout = styled.div`
  max-width: 60em;
  margin: auto;
`

let andyResponse = {
  id: 'andy-warhol',
  name: 'Andy Warhol',
  counts: {
    follows: 54321,
    artworks: 432,
    for_sale_artworks: 15,
    articles: 10
  }
}

let barbaraResponse = {
  id: 'barbara-kruger',
  name: 'Barbara Kruger',
  counts: {
    follows: 43210,
    artworks: 321,
    for_sale_artworks: 14,
    articles: 8
  }
}

storiesOf('ArtistList', module)
  .addDecorator(story =>
    <Provider store={mockStore}>
      <Layout>
        {story()}
      </Layout>
    </Provider>
  )
  .add('with fetched and unfetched artists', () => {
    const props = {
      artistIds: ['andy-warhol', 'barbara-kruger'],
      artistsById: {
        'andy-warhol': andyResponse
      }
    }
    return <ArtistList {...props} />
  })
  .add('with only fetched artists', () => {
    const props = {
      artistIds: ['andy-warhol', 'barbara-kruger'],
      artistsById: {
        'andy-warhol': andyResponse,
        'barbara-kruger': barbaraResponse
      }
    }
    return <ArtistList {...props} />
  })
