import { SAVE_COMMENT } from 'actions/types'

export default (comment) => {

  return {
    type: SAVE_COMMENT,
    payload: comment
  }
}