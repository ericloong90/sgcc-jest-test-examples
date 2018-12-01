import React, { Component } from 'react'

import ComponentA from 'components/ComponentA';
import CommentBox from 'components/CommentBox'
import CommentList from 'components/CommentList'

export default class App extends Component {
  state = {
    name: 'Eric'
  }

  render() {
    return (
      <div className="app">
        App
        <ComponentA />
        <ComponentA />
        <ComponentA />
        <CommentBox />
        <CommentList />
      </div>
    )
  }
}