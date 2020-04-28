import { CHANGE_GOAL } from '../actions/types';

export default (state = 150, action) => {
  switch (action.type) {
    case CHANGE_GOAL:
      return action.payload.minutes
    default:
      return state;
  }
}