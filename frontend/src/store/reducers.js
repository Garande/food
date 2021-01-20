import { combineReducers } from 'redux';

import Layout from './layout/reducer';
import Auth from './auth/reducer';
import Food from './food/reducer'

export default combineReducers({
    Layout,
    Auth,
    Food,
});