import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'

import { StyledArtistAutocomplete } from '.'

const Layout = styled.div`
  max-width: 60em;
  margin: auto;
`

storiesOf('ArtistAutocomplete', module)
  .addDecorator(story =>
    <Layout>
      {story()}
    </Layout>
  )
  .add('default', () => {
    return <StyledArtistAutocomplete />
  })
