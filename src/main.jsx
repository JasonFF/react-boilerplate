/*eslint-disable no-unused-vars*/
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'

import MyPage from './containers/MyPage/MyPage'
import Root from './containers/Root/Root'
import reducer from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware())
)

ReactDOM.render(
  <Root store={store}/>,
  document.getElementById('root')
)