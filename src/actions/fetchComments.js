import { FETCH_COMMENTS } from 'actions/types'

export default () => {
  let payload = fetch('http://jsonplaceholder.typicode.com/comments').then((response) => {
    return response.json()
  })

  return {
    type: FETCH_COMMENTS,
    payload
  }
}