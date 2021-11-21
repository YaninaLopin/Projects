import { combineReducers } from 'redux';
import clientsReducer from './clientReducer';

export default combineReducers({
    clients: clientsReducer,
    
  });