import { SAVE_COMMENT, FETCH_COMMENTS } from "actions/types";

let initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case (SAVE_COMMENT):
      return [...state, action.payload]

    case (FETCH_COMMENTS):
      const comments = action.payload.map((comment) => {
        return comment.name
      })

      return [...state, ...comments]

    default:
      return state
  }
}