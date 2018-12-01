import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { saveComment, fetchComments } from 'actions'

export class CommentBox extends Component {
  state = {
    comment: '',
  }

  handleFormSubmit = (event) => {
    event.preventDefault()
    this.props.saveComment(this.state.comment)

    this.setState({
      comment: ''
    })
  }

  handleTextareaChange = (event) => {
    this.setState({
      comment: event.target.value
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <textarea name="comments" id="" cols="30" rows="10" value={this.state.comment} onChange={this.handleTextareaChange} >
            Enter your comments
          </textarea>

          <button className="submitCommentButton" type="submit">Submit Comment</button>
        </form>
        <button className="fetchCommentButton" onClick={this.props.fetchComments}>Fetch Comments</button>
      </div>
    )
  }
}

let mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    saveComment: saveComment,
    fetchComments: fetchComments
  }, dispatch) 
}

export default connect(null, mapDispatchToProps)(CommentBox)