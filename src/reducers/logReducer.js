import { ADD_MINUTES } from '../actions/types'

export default (state = 0, action) => {
  switch (action.type) {
    case ADD_MINUTES:
      const { minutes } = action.payload
      return state + minutes;
    default:
      return state;
  }
}