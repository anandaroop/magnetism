import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import Root from './components/Root'
import rootReducer from './reducers'
// import './index.css'
// import registerServiceWorker from './registerServiceWorker'

// import prepopulate from './helpers/prepopulate'

let store = createStore(rootReducer, applyMiddleware(thunk))

// prepopulate(store)

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root')
)
// registerServiceWorker()
