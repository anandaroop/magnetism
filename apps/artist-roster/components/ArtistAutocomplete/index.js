import React, { Component } from 'react'
import Autosuggest from 'react-autosuggest'
import styled from 'styled-components'
import { connect } from 'react-redux'

import env from '../../env.json'
import { garamond } from '../../helpers/styles'
import { addArtist, fetchArtist } from '../../actions'

const fetchSuggestions = value => {
  const payload = JSON.stringify({
    query: `{match_artist(term: "${value}", size: 5) { id, name }}`
  })

  const headers = {
    'Content-Type': 'application/json'
  }

  const options = {
    method: 'POST',
    headers: headers,
    body: payload
  }

  return window.fetch(env.metaphysics_url, options)
}

const getSuggestionValue = suggestion => suggestion.name

const renderSuggestion = suggestion =>
  <div>
    {suggestion.name}
  </div>

class ArtistAutocomplete extends Component {
  constructor() {
    super()
    this.state = {
      value: '',
      suggestions: []
    }
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    })
  }

  onSuggestionsFetchRequested = ({ value }) => {
    fetchSuggestions(value)
      .then(response => {
        return response.json()
      })
      .then(response => {
        this.setState({
          suggestions: response.data.match_artist
        })
      })
      .catch(error => console.log(error))
  }

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    })
  }

  render() {
    const { className, onSelect } = this.props
    const { value, suggestions } = this.state
    const inputProps = {
      placeholder: 'Enter artist name',
      value,
      onChange: this.onChange
    }

    return (
      <div className={className}>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
          onSuggestionSelected={(evt, sugg) => {
            onSelect(evt, sugg)
            this.setState({ value: '' })
          }}
        />
      </div>
    )
  }
}

const StyledArtistAutocomplete = styled(ArtistAutocomplete)`
  margin-top: 2em;
  font-family: ${garamond};

  div.react-autosuggest__container {}

  .react-autosuggest__input {
    font-family: ${garamond};
    font-size: 2em;
    width: 100%;
    padding: 0.25em 0;
    border: none;
    border-bottom: solid 1px #ccc;

    ::placeholder {
      color: #ccc;
    }

    :focus {
      outline: none;
    }
  }

  .react-autosuggest__suggestions-container {
    position: relative;
  }

  ul.react-autosuggest__suggestions-list {
    position: absolute;
    list-style: none;
    margin: 0;
    padding: 0;
    border: solid 1px #ccc;
    background: white;
    width: 100%;
  }

  li.react-autosuggest__suggestion {
    font-size: 1em;
    color: black;
    padding: 0.25em;
  }

  li.react-autosuggest__suggestion--highlighted {
    background: purple;
    color: white;
  }
`

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    onSelect: (_evt, { suggestion }) => {
      const artistId = suggestion.id
      dispatch(addArtist(artistId))
      dispatch(fetchArtist(artistId))
    }
  }
}

const ConnectedArtistAutocomplete = connect(mapStateToProps, mapDispatchToProps)(
  StyledArtistAutocomplete
)

// export default StyledArtistAutocomplete
// export default ConnectedArtistAutocomplete
export { ConnectedArtistAutocomplete as default, StyledArtistAutocomplete }
