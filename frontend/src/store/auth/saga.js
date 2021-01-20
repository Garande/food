import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { getFirebaseProvider } from "../../providers/firebase";
import { authApiError, forgotPasswordSuccess, loginUserSuccess, registerUserSuccess } from "./actions";
import { FORGOT_PASSWORD, LOGIN_USER, LOGOUT_USER, REGISTER_USER } from "./constants";

const firebaseProvider = getFirebaseProvider();

/**
 * Login the user
 * @param {object} payload - username and password 
 */
function* login({payload: {username, password, history} }){
    try {
        const response = yield call(firebaseProvider.loginUser, username, password);
        yield put(loginUserSuccess(response));
        history.push('/dashboard');
    } catch (error) {
        yield put(authApiError(error));
    }
}

/**
 * Logout the user
 * @param {object} payload 
 */
function* logout({payload: {history}}){
    try {
        localStorage.removeItem('currentUser');
        yield call(firebaseProvider.logout);
        yield call(() => {
            history.push('/login');
        });
    } catch (error) {
        
    }
}


/**
 * Register the user
 * @param {object} payload -  
 */
function* register({payload: {user, history}}){
    try {
        const response = yield call(firebaseProvider.registerUser, user);
        yield put(registerUserSuccess(response));
        history.push('/dashboard');
    } catch (error) {
        yield put(authApiError(error))
    }
}

/**
 * forgot password
 * @param {object} payload 
 */
function* forgotPassword({payload: {email}}){
    try {
        const response = yield call(firebaseProvider.forgotPassword, email);
        if(response){
            yield put(forgotPasswordSuccess('Reset link has been sent to your mailbox, check your mailbox'));
        }
    } catch (error) {
        yield put(authApiError(error))
    }
}

export function* watchLoginUser(){
    yield takeEvery(LOGIN_USER, login);
}

export function* watchLogoutUser(){
    yield takeEvery(LOGOUT_USER, logout)
}

export function* watchRegisterUser(){
    yield takeEvery(REGISTER_USER, register);
}

export function* watchForgotPassword(){
    yield takeEvery(FORGOT_PASSWORD, forgotPassword);
}

function* authSaga(){
    yield all([fork(watchLoginUser),
        fork(watchLogoutUser),
        fork(watchRegisterUser),
        fork(watchForgotPassword),
    ]);
}

export default authSaga;