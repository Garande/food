import { AUTH_API_ERROR, FORGOT_PASSWORD, FORGOT_PASSWORD_SUCCESS, LOGIN_USER, LOGIN_USER_SUCCESS, LOGOUT_USER, REGISTER_USER, REGISTER_USER_SUCCESS } from "./constants";

export const loginUser = (username, password, history) => ({
    type: LOGIN_USER,
    payload: {username, password, history}
});

export const loginUserSuccess = (user) => ({
    type: LOGIN_USER_SUCCESS,
    payload: user
});

export const registerUser = (user, history) => ({
    type: REGISTER_USER,
    payload: { user, history }
});

export const registerUserSuccess = (user) => ({
    type: REGISTER_USER_SUCCESS,
    payload: user
});

export const logoutUser = (history) => ({
    type: LOGOUT_USER,
    payload: { history }
});

export const forgotPassword = (email) => ({
    type: FORGOT_PASSWORD,
    payload: { email }
});

export const forgotPasswordSuccess = (passwordResetStatus) => ({
    type: FORGOT_PASSWORD_SUCCESS,
    payload: passwordResetStatus
});

export const authApiError = (error) => ({
    type: AUTH_API_ERROR,
    payload: error
});