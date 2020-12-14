import { combineReducers } from 'redux';

import Layout from './layout/reducer';
import Auth from './auth/reducer'

export default combineReducers({
    Layout,
    Auth,
});