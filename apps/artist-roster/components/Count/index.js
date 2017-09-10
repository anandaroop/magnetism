import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { garamond, unica } from '../../helpers/styles'

const propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired
}

const Container = styled.div`
  // outline: solid 1px red;
  width: 6em;
  flex: 0 0 6em;
  height: 6em;
  padding: 1em;
  text-align: right;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Value = styled.div`
  // outline: solid 1px green;
  font-size: 1.5em;
  font-family: ${garamond};
  flex: 0 0 66%;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`
const Name = styled.div`
  // outline: solid 1px orange;
  color: #ccc;
  font-size: 0.8em;
  font-family: ${unica};
  flex: 0 0 33%;
`
const Count = ({ name, value }) => {
  return (
    <Container>
      <Value>
        {value.toLocaleString()}
      </Value>
      <Name>
        {name}
      </Name>
    </Container>
  )
}
Count.propTypes = propTypes

export default Count
