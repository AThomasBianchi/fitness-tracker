import { ADD_MINUTES, RESET_PROGRESS } from '../actions/types'

export default (state = 0, action) => {
  switch (action.type) {
    case ADD_MINUTES:
      const { minutes } = action.payload
      return state + minutes;
    case RESET_PROGRESS:
      return 0;
    default:
      return state;
  }
}