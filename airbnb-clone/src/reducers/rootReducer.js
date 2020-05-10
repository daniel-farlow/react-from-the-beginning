import { combineReducers } from 'redux';
import authReducer from './authReducer';
import siteModal from './siteModal';

const stateLabelsAndResponsibleReducers = {
  auth: authReducer,
  siteModal: siteModal
}

const rootReducer = combineReducers(stateLabelsAndResponsibleReducers);

export default rootReducer;