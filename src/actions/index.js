import { ADD_MINUTES, CHANGE_GOAL, RESET_PROGRESS } from './types';

export const addMinutes = minutes => {
  return {
    type: ADD_MINUTES,
    payload: {
      minutes
    }
  }
}

export const resetProgress = minuts => {
  return {
    type: RESET_PROGRESS
  }
}

export const changeGoal = minutes => {
  return {
    type: CHANGE_GOAL,
    payload: {
      minutes
    }
  }
}