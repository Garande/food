
import {getLoggedInUser} from '../../providers/firebase'
import { AUTH_API_ERROR, FORGOT_PASSWORD, FORGOT_PASSWORD_SUCCESS, LOGIN_USER, LOGIN_USER_SUCCESS, LOGOUT_USER, REGISTER_USER, REGISTER_USER_SUCCESS } from './constants';

const INIT_STATE = {
    currentUser: getLoggedInUser(),
    loading: false,
    error: '',
    passwordResetStatus: ''
}

const Auth = (state = INIT_STATE, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return { ...state, loading: true };
        case LOGIN_USER_SUCCESS:
            return { ...state, currentUser: action.payload, loading: false, error: null };

        case REGISTER_USER:
            return { ...state, loading: true };
        case REGISTER_USER_SUCCESS:
            return { ...state, currentUser: action.payload, loading: false, error: null };

        case LOGOUT_USER:
            return { ...state, currentUser: null };

        case FORGOT_PASSWORD:
            return { ...state, loading: true };
        case FORGOT_PASSWORD_SUCCESS:
            return { ...state, passwordResetStatus: action.payload, loading: false, error: null };

        case AUTH_API_ERROR:
            console.log('================')
            console.error(action.payload)
            return { ...state, loading: false, error: action.payload };

        default: return { ...state };
    }
}

export default Auth;