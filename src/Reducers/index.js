import { combineReducers } from 'redux';
import clientsReducer from './clientReducer';
import profileReducer from './profileReduser';

export default combineReducers({
    clients: clientsReducer,
    profile: profileReducer,
  });