import React from 'react'
import { shallow } from "enzyme";

import ComponentA from 'components/ComponentA'

let component

// Executes before every single test suites defined in the context
beforeEach(() => {
  // This to render and mount our ComponentA onto a virtual DOM for testing
  component = shallow(<ComponentA sample='Hello World' />)
})

// Executes after every single test suites defined in the context
afterEach(() => {
  // This is to make sure that our mounted ComponentA dismounts after our testing. This prevents memory overflow, or any other complications that you might encounter for when the virtual DOM is not cleaned up after rendering a component for tests
  component.unmount()
})

it('should render the string ComponentA properly', () => {

  expect(component.contains('ComponentA')).toBeTruthy()
})

it('should render the SGCC link properly', () => {
  
  expect(component.contains(<a href="https://sgcodecampus.com">SG Code Campus</a>)).toBeTruthy()
})
