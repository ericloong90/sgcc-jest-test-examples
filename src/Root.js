import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxPromise from 'redux-promise'
import rootReducer from 'reducers'

// let store = applyMiddleware(reduxPromise)(createStore)(rootReducer)

let store = createStore(rootReducer, {}, applyMiddleware(reduxPromise))

export default (props) => {
  return (
    <Provider store={store} >
      {
        props.children
      }
    </Provider>
  )
};
