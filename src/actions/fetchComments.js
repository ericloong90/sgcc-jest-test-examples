import axios from 'axios'
import { FETCH_COMMENTS } from 'actions/types'

export default () => {
  // let payload = fetch('http://jsonplaceholder.typicode.com/comments').then((response) => {
  //   return response.json()
  // })

  let payload = axios.get('http://jsonplaceholder.typicode.com/comments').then((response) => {
    return response.data
  })


  return {
    type: FETCH_COMMENTS,
    payload
  }
}