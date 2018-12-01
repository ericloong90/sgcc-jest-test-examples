import commentsReducer from 'reducers/comments'
import { SAVE_COMMENT } from 'actions/types'
import { comment } from 'postcss';

// We are testing if our reducer is handling an action properly or not, in this case, we are testing if it's handling SAVE_COMMENT properly
it('should handle actions with the type SAVE_COMMENT properly', () => {
  // Reducers are actually nothing more than just a function, import the function and execute it like this. Pass in an initial state that you want to test, and the action object with the proper type and payload.
  let actual = commentsReducer([], {
    type: SAVE_COMMENT,
    payload: 'Hello World'
  })

  // Your assertion here is up to whatever you're trying to achieve with your reducer.
  expect(actual).toEqual(['Hello World'])

  // This is a test similar to the one above, but now involves testing if our state is already occupied with some other value.
  actual = commentsReducer(['Hello'], {
    type: SAVE_COMMENT,
    payload: 'World'
  })

  expect(actual).toEqual(['Hello', 'World'])
})

it('should not throw an error if it gets an action with any other defined type', () => {
  expect(() => {
    commentsReducer([], {
      type: 'RANDOM_TYPE'
    })
  }).not.toThrow()
})

it('should still return us with the original state if it gets an action with any other defined type', () => {
  let actual = commentsReducer([], {
    type: 'RANDOM_TYPE',
    payload: 'Random payload'
  })

  expect(actual).toEqual([])

  actual = commentsReducer(['Hello'], {
    type: 'RANDOM_TYPE',
    payload: 'Random payload'
  })

  expect(actual).toEqual(['Hello'])
})