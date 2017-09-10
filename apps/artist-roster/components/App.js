import React, { Component } from 'react'
import styled from 'styled-components'

const Heading = styled.h1`
  color: red;
  font-family: sans-serif;
`

const List = styled.ul`
  list-style: none;
  margin: 0em;
  padding: 0em;
`
const Item = styled.li`
  display: inline-block;
  color: red;
  border: solid 1px red;
  margin: 1em;
  padding: 0.5em;
`

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      n: 1
    }
    this.handleClick = this.handleClick.bind(this)
  }

  renderItems() {
    return Array.from({ length: this.state.n }).map((v, i) => <Item key={i}>{i}</Item>)
  }

  handleClick(e) {
    e.preventDefault()
    this.setState({
      n: this.state.n + 1
    })
  }

  render() {
    return (
      <div>
        <Heading>Hi Styles</Heading>
        <p>
          Do you like numbers? Great!{' '}
          <a href="#" onClick={this.handleClick}>
            Add more
          </a>
        </p>
        <List>{this.renderItems()}</List>
      </div>
    )
  }
}

export default App
