import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';
import warehouses from './warehouses';

export default combineReducers({
    alert,
    auth,
    profile,
    warehouses
});