import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { removeAllArtists } from '../../actions'

const propTypes = {
  artistIds: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired
}

const slugString = artistIds => artistIds.join('; ')

class Slugs extends React.Component {
  render() {
    const { artistIds, onClick } = this.props
    if (artistIds.length === 0) return null

    return (
      <Wrapper>
        <List
          readOnly
          value={slugString(artistIds)}
          innerRef={el => (this._listArea = el)}
        />
        <Button
          bg="purple"
          onClick={e => {
            this._listArea.select()
            document.execCommand('copy')
          }}
        >
          Copy to clipboard
        </Button>
        <Button bg="gray" p="0.5em" onClick={e => onClick()}>
          Clear artists
        </Button>
      </Wrapper>
    )
  }
}
Slugs.propTypes = propTypes

const mapStateToProps = state => ({
  artistIds: state.artistIds
})

const mapDispatchToProps = dispatch => {
  return {
    onClick: () => {
      dispatch(removeAllArtists())
    }
  }
}

const ConnectedSlugs = connect(
  mapStateToProps,
  mapDispatchToProps
)(Slugs)

export { ConnectedSlugs as default, Slugs }

const Wrapper = styled.div`
  flex: 1 0 0;
  margin: 1em 0;
  padding: 1em 0;
  color: purple;
  display: flex;
  align-items: stretch;
  height: 100px;
`

const List = styled.textarea`
  font-family: monospace;
  border: solid 1px purple;
  padding: 1em;
  flex: 1 0 0;
`

const Button = styled.button`
  background: ${({ bg }) => bg || 'black'};
  color: white;
  padding: ${({ p }) => p || '1em'};
  border: none;
  flex: 0 0 12em;
  margin-right: 1em;
  cursor: pointer;
  &:active {
    background: black;
  }
`
