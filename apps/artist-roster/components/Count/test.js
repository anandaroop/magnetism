import React from 'react'
import { shallow, mount, render } from 'enzyme'

import Count from '.'

describe('Count', () => {
  let component

  it('requires a name and value', () => {
    console.error = jest.fn()
    expect(() => {
      component = render(<Count />)
    }).toThrow()
  })
})
