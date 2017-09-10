import React from 'react'
import styled from 'styled-components'

import ArtistAutocomplete from '../ArtistAutocomplete'
import ArtistList from '../ArtistList'

const Layout = styled.div`
  max-width: 60em;
  margin: auto;
  padding: 1em 1em 10em 1em;
`

const Root = () =>
  <Layout>
    <ArtistList />
    <ArtistAutocomplete />
  </Layout>

export default Root
