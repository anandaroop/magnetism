import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import App from './App'

describe('App', () => {
  it('renders', () => {
    const component = renderer.create(<App />).toJSON()
    expect(component).toMatchSnapshot()
  })

  it('responds to clicks', () => {
    const component = shallow(<App />)
    expect(component.state('n')).toEqual(1)

    component.find('a').simulate('click', { preventDefault: jest.fn() })
    expect(component.state('n')).toEqual(2)
  })
})
