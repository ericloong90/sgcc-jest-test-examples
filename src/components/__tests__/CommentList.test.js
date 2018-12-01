import React from 'react'
import { mount } from 'enzyme'

import CommentList from 'components/CommentList'
import Root from 'Root'

let component

beforeEach(() => {
  const initialState = {
    comments: [
      'Comment 1',
      'Comment 2'
    ]
  }
  component = mount(
    <Root initialState={initialState} >
      <CommentList />
    </Root>
  ) 
})

afterEach(() => {
  component.unmount()
})

it('creates 1 li per comment', () => {
  expect(component.find('li').length).toEqual(2)
})

// Here we are testing if the text that our component is rendering correctly or not.
// The text method here only returns you visible text rendered by the component, excluding the HTML code from your component. 
// We can then use the toContain method to check for string membership if our Comment 1 and Comment 2 string is rendered properly or not.
it('shows the text for each comment', () => {
  expect(component.text()).toContain('Comment 1')
  expect(component.text()).toContain('Comment 2')
})