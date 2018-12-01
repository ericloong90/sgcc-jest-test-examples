import React from 'react'
import { shallow } from "enzyme";

import App from 'components/App'
import ComponentA from 'components/ComponentA'

let component

beforeEach(() => {
  component = shallow(<App />)
})

afterEach(() => {
  component.unmount()
})

it('should render 3 ComponentA', () => {

  // find allows you to find based on the passed in React component and return an a ShallowWrapper wrapper that wraps the found nodes.
  expect(component.find(ComponentA).length).toEqual(3)
})

it('should render the string App', () => {

  // To check for if a component contains a certain string, rather than looking for components, use contains instead of find. 
  expect(component.contains('App')).toBeTruthy()
})

it('should have the class app', () => {
  
  // Use hasClass to check for the presence of a certain class. It returns a Boolean
  expect(component.hasClass('app')).toBeTruthy()
})

it('should have name state with the value Eric', () => {

  // state allows you to check for the mounted component's state
  // Passing in a string will make state look for the key with the given string and returns you the value from that state. 
  // Use your own assertion to check if the value is intended or not, not necessarily toEqual e.g. toBeTruthy
  expect(component.state('name')).toEqual('Eric')
})