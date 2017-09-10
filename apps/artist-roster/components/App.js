import React, { Component } from 'react'
import styled from 'styled-components'

const Heading = styled.h1`
  color: red;
  font-family: sans-serif;
`

class App extends Component {
  render() {
    return (
      <div>
        <Heading>Hi Styles</Heading>
        <p>I'm a properly linted App!</p>
      </div>
    )
  }
}

export default App
