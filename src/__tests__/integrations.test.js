import React from 'react'
import { mount } from 'enzyme'
import moxios from 'moxios'

import App from 'components/App'
import Root from 'Root'

describe('As a user, when I click on the fetchComment button, I should be able to see list of comments and display them', () => {

  let component

  beforeEach(() => {
    // Mounting our app before every single it statements
    component = mount(
      <Root>
        <App />
      </Root>
    )
    
    // Installing our moxios environment at the beginning of each it statements
    moxios.install()
    // stubRequest basically intercepts any axios calls that matches the given URL string and instead of making the API call, we can now intercept it and give it a response of our own
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
      status: 200,
      // response will hold the actual data that you want to pass in
      response: [
        {
          name: 'Fetched Comment 1'
        },
        {
          name: 'Fetched Comment 2'
        }
      ]
    })
  });

  afterEach(() => {
    // Clean-up code - unmounting and uninstalling moxios
    component.unmount()

    moxios.uninstall()
  });



  it('should be able to fetch a list of comments and display them', (done) => {
    // Simulate a click event using enzyme
    component.find('button.fetchCommentButton').simulate('click')
    
    // This part is crucial. API calls doesn't come back right away, so programmatically speaking, we cannot assume that moxios would be able to intercept an axios call right away, thus moxios provides us with a wait method here to wait until an axios call has been made and well intercepted by moxios.
    moxios.wait(() => {
      // Proceed to update your component as the axios call now fetched some data and updated the global store, thus prompting your app to rerender parts of it to render new data
      component.update()

      // Assert your component functionality by checking if the rendered list is indeed equal to the length of data that you passed in during the moxios interception
      expect(component.find('li').length).toEqual(2)

      // The done callback here is executed because for a normal callback, it statement will execute the couple of statements in it and instantly check for any errors and assertion and tries to return with a result. In this case, moxios.wait is something like setTimeOut. The moxios.wait/setTimeOut execution is actually just registering a new event on the event loop and instantly claim that their statement is done executing. The done callback here is to make sure that the it statement here waits until the done callback is executed before the it statement concludes its test.
      done()
    })

    
  });
})