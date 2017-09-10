import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import Count from '../Count'
import { garamond } from '../../helpers/styles'
import { removeArtist } from '../../actions'

const Container = styled.div`
  border-bottom: solid 1px #eee;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  :hover .delete {
    display: inline-block;
  }
`

const Name = styled.div`
  font-size: 2em;
  font-family: ${garamond};
  flex: 1 0 auto;
`

const Delete = styled.a`
  display: none;
  vertical-align: middle;
  margin-left: 0.5em;
  background: #ccc;
  color: white;
  font-size: 11pt;
  width: 1.5em;
  height: 1.5em;
  line-height: 1.75em;
  border-radius: 0.75em;
  text-align: center;
  :hover {
    cursor: pointer;
  }
`

const Artist = ({
  id,
  name,
  counts: { artworks, follows, for_sale_artworks, partner_shows, articles },
  onClick
}) => {
  return (
    <Container>
      <Name>
        {name}
        <Delete
          className="delete"
          onClick={() => {
            onClick(id)
          }}
        >
          ✕
        </Delete>
      </Name>
      <Count name="follows" value={follows} />
      <Count name="artworks" value={artworks} />
      <Count name="for sale" value={for_sale_artworks} />
      <Count name="articles" value={articles} />
    </Container>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    onClick: artistId => {
      dispatch(removeArtist(artistId))
    }
  }
}

const ConnectedArtist = connect(null, mapDispatchToProps)(Artist)

export { ConnectedArtist as default, Artist }
