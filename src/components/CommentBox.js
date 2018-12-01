import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import saveComment from 'actions/saveComment'

class CommentBox extends Component {
  state = {
    comment: '',
  }

  handleFormSubmit = (event) => {
    event.preventDefault()
    this.props.saveComment(this.state.comment)
  }

  handleTextareaChange = (event) => {
    this.setState({
      comment: event.target.value
    });
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <textarea name="comments" id="" cols="30" rows="10" value={this.state.comment} onChange={this.handleTextareaChange} >
          Enter your comments
        </textarea>

        <button type="submit">Submit Comment</button>
      </form>
    )
  }
}

let mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    saveComment: saveComment,
  }, dispatch) 
}

export default connect(null, mapDispatchToProps)(CommentBox)