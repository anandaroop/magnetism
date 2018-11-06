import React from 'react'
import { Provider } from 'react-redux'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import configureMockStore from 'redux-mock-store'

import { Slugs } from '.'

let mockStore = configureMockStore([])({})

const Layout = styled.div`
  max-width: 60em;
  margin: auto;
`

storiesOf('Slugs', module)
  .addDecorator(story => (
    <Provider store={mockStore}>
      <Layout>{story()}</Layout>
    </Provider>
  ))
  .add('default', () => {
    const props = {
      artistIds: ['andy-warhol', 'barbara-kruger', 'chris-ofili']
    }
    return <Slugs {...props} />
  })
