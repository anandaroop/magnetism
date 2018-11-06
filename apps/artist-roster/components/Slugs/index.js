import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'

const propTypes = {
  artistIds: PropTypes.array.isRequired
}

const slugString = artistIds => artistIds.join('; ')

const Slugs = ({ artistIds }) => {
  if (artistIds.length === 0) return null
  return (
    <Wrapper>
      <List>{slugString(artistIds)}</List>
      <Button
        onClick={e => {
          navigator.clipboard.writeText(slugString(artistIds))
        }}
      >
        Copy to clipboard
      </Button>
    </Wrapper>
  )
}
Slugs.propTypes = propTypes

const mapStateToProps = state => ({
  artistIds: state.artistIds
})

const ConnectedSlugs = connect(mapStateToProps)(Slugs)

export { ConnectedSlugs as default, Slugs }

const Wrapper = styled.div`
  margin: 1em 0;
  padding: 1em 0;
  color: purple;
  display: flex;
  /* justify-content: space-between; */
  align-items: stretch;
  height: 100px;
`

const List = styled.div`
  font-family: monospace;
  border: solid 1px purple;
  padding: 1em;
  flex: 1 0 0;
`

const Button = styled.button`
  background: purple;
  color: white;
  padding: 1em;
  border: none;
  flex: 0 0 12em;
  cursor: pointer;
  &:active {
    background: black;
  }
`
