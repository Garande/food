import { all } from 'redux-saga/effects';

import authSaga from './auth/saga';
import foodSaga from './food/saga'

export default function* rootSaga(getState) {
    yield all([
        authSaga(),
        foodSaga()
    ]);
}