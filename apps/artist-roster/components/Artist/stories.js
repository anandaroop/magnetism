import React from 'react'
import { Provider } from 'react-redux'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import configureMockStore from 'redux-mock-store'

import Artist from '.'

let mockStore = configureMockStore([])({})

const Layout = styled.div`
  max-width: 60em;
  margin: auto;
`

storiesOf('Artist', module)
  .addDecorator(story =>
    <Provider store={mockStore}>
      <Layout>
        {story()}
      </Layout>
    </Provider>
  )
  .add('with a short name', () => {
    const props = {
      id: 'andy-warhol',
      name: 'Andy Warhol',
      counts: {
        follows: 54321,
        artworks: 432,
        for_sale_artworks: 15,
        articles: 10
      }
    }
    return <Artist {...props} />
  })
  .add('with a long name ', () => {
    const props = {
      id: 'vlad',
      name: 'Vladimir Semenovich Zakharkin',
      counts: {
        follows: 54321,
        artworks: 432,
        for_sale_artworks: 15,
        articles: 10
      }
    }
    return <Artist {...props} />
  })
