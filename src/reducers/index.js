import { combineReducers } from 'redux';
import logReducer from './logReducer';
import goalReducer from './goalReducer';

export default combineReducers({
  logged: logReducer,
  goal: goalReducer
});