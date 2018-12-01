import React, { Component } from 'react'
import { connect } from 'react-redux'

class CommentList extends Component {
  render() {
    return (
      <ol>
        {
          this.props.comments.map((comment, index) => {
            return (
              <li key={index}>{comment}</li>
            )
          })
        }
      </ol>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    comments: state.comments
  }
}

export default connect(mapStateToProps)(CommentList)