import React from 'react'
import { mount, shallow } from 'enzyme'

import CommentBoxWithRedux, { CommentBox } from 'components/CommentBox'
import Root from 'Root'

describe('testing if CommentBox is rendering child components correctly', () => {
  let component

  afterEach(() => {
    component.unmount()
  })

  // There are two ways of checking for presence of UI elements in a Redux connected component
  // First one, we can render the CommentBox using mount and connect it to the store directly using Root. 
  // Note that we need to use mount to render our component because Root is now wrapping our CommentBox, textarea is no longer direct child of the component that we are testing
  it('should render a textarea and 2 buttons', () => {
    component = mount(
      <Root>
        <CommentBoxWithRedux />
      </Root>
    )
  
    expect(component.find('textarea').length).toEqual(1)
    expect(component.find('button').length).toEqual(2)
  })
  
  // Second method is shown below. We first amend our CommentBox code to also export the original non-Redux CommentBox component for testing.
  // Since we are only interested with the fact that whether our component is rendering certain parts of UI correctly or not, this is a more preferable and one that makes more sense to test.
  it('should render a textarea and a button', () => {
    component = shallow(<CommentBox />)
  
    expect(component.find('textarea').length).toEqual(1)
    expect(component.find('button').length).toEqual(2)
  })
})

// This section is to make sure that our CommentBox is behaving the way it is intended
describe('testing if CommentBox is working properly', () => {
  let component

  beforeEach(() => {
    component = mount(
      <Root>
        <CommentBoxWithRedux />
      </Root>
    )
  })

  afterEach(() => {
    component.unmount()
  })

  // Here we test for when the user enters text into the textarea
  // To accomplish this, we use simulate to simulate HTML events onto the tested components. Note that we are using HTML events, not the React's onChange or onSubmit handlers that you've been dealing with in React.
  // First argument to the simulate method is the HTML event that we are trying to simulate. Second argument is an object to merge with the event object that gets passed to event handlers as an argument
  it('should allow user to enter text into the textarea', () => {
    component.find('textarea').simulate('change', {
      target: {
        value: 'Hello World'
      }
    })
    // Notice that we are also invoking the update method on our test component. update forces our component to rerender before any of our assertions, so that we can get accurate and updated results. 
    // We need to rerender our component because of how React fundamentally works. Any events and UI changes passed to React asynchronously, thus will not guarantee the UI changes to propagate immediately. 
    component.update()

    // Here we are using the prop method to check the prop value for the given key on the component. It simply returns us with the value that the prop is holding.
    expect(component.find('textarea').prop('value')).toEqual('Hello World')
  })

  it('should empty the textarea when the input is submitted', () => {
    // Here we are also simulating an event, except that we are simulating the click event and we do not need to pass in any new event object to be merged, according to our app logic.
    component.find('button.submitCommentButton').simulate('click')
    component.update()

    expect(component.find('textarea').prop('value')).toEqual('')
  })
})



