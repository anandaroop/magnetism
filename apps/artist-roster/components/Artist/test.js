import React from 'react'
import { shallow, mount, render } from 'enzyme'

import Artist from '.'

describe('Artist', () => {
  let component
  let props

  beforeEach(() => {
    props = {}
  })

  xit('does something', () => {
    component = shallow(<Artist {...props} />)
  })
})
