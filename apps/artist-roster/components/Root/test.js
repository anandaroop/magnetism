import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Root from './'

xit('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Provider store={{}}>
      <Root />
    </Provider>,
    div
  )
})
