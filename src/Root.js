import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxPromise from 'redux-promise'
import rootReducer from 'reducers'

// let store = applyMiddleware(reduxPromise)(createStore)(rootReducer)


export default (props) => {
  // Here we move and customize our store creation code inside the render function so that we can make use of the props feature.
  // createStore's second argument takes in an object that would be used to merge with the original state that rootReducer is already returning. This allows us to control the initial state of the global store if we so prefer. By doing so, we are now able to customize the global store at loading to be used by our tests
  // Thus, we make use of JavaScript's conditional operator, checking if there is any prop.initialState passed in before merging it with a given object or just an empty one
  let store = createStore(
    rootReducer, 
    props.initialState ? props.initialState : {}, 
    applyMiddleware(reduxPromise)
  )

  return (
    <Provider store={store} >
      {
        props.children
      }
    </Provider>
  )
};
