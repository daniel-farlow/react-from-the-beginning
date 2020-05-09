import { combineReducers } from 'redux';
import frozenReducer from './frozen';

// key-value pairs to make up store
// key = what to call a piece of state being returned by a reducer
// value = the return value (i.e., piece of state) of the reducer being referenced
const stateLabelsAndReducersReturningState = {
  frozen: frozenReducer
}

const rootReducer = combineReducers(stateLabelsAndReducersReturningState);

export default rootReducer;