export const addMinutes = minutes => {
  return {
    type: 'ADD_MINUTES',
    payload: {
      minutes
    }
  }
}