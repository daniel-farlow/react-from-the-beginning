import { combineReducers } from 'redux';
import weatherReducer from './weatherReducer';

const stateLabelsAndAssociatedReducers = {
  weather: weatherReducer
}

const rootReducer = combineReducers(stateLabelsAndAssociatedReducers);

export default rootReducer;