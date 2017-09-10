import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'

import Artist from '../Artist'

const propTypes = {
  artistIds: PropTypes.array.isRequired,
  artistsById: PropTypes.object.isRequired
}

const Placeholder = styled.div`
  padding: 1em;
  text-align: center;
`

const ArtistList = ({ artistIds, artistsById }) => {
  return (
    <div>
      {artistIds.length > 0 &&
        artistIds.map(id => {
          const artist = artistsById[id]
          return artist
            ? <Artist key={id} {...artist} />
            : <Placeholder key={id}>
                {id} …
              </Placeholder>
        })}
    </div>
  )
}
ArtistList.propTypes = propTypes

const mapStateToProps = state => ({
  artistIds: state.artistIds,
  artistsById: state.artistsById
})

const ConnectedArtistList = connect(mapStateToProps)(ArtistList)

export { ConnectedArtistList as default, ArtistList }
