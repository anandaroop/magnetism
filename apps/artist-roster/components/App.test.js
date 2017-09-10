import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import App from './App'

describe('App', () => {
  it('renders', () => {
    const component = renderer.create(<App />)
    expect(component.toJSON()).toMatchSnapshot()
  })

  it('responds to clicks', () => {
    const component = shallow(<App />)
    expect(component.state('n')).toEqual(1)
    expect(toJson(component)).toMatchSnapshot()
    
    component.find('a').simulate('click', { preventDefault: jest.fn() })
    expect(component.state('n')).toEqual(2)
    expect(toJson(component)).toMatchSnapshot()
  })
})
