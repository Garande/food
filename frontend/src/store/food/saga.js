import { getApiProvider } from "../../providers/api";
import { apiError, fetchCategoriesSuccess, fetchFoodsSuccess } from "./actions";
import { FETCH_CATEGORIES, FETCH_FOODS } from "./constants";

const { all, fork, takeEvery, call, put } = require("redux-saga/effects");

const apiProvider = getApiProvider();

function* fetchCategories(){
    try {
        const response = yield call(apiProvider.fetchCategories);
        yield put(fetchCategoriesSuccess(response));
    } catch (error) {
        yield put(apiError(error));
    }
}


function* fetchFoods(){
    console.log('##############################')
    try {
        const response = yield call(apiProvider.fetchFoods);
        yield put(fetchFoodsSuccess(response));
    } catch (error) {
        console.log(error)
        yield put(apiError(error));
    }
}


export function* watchFetchCategories(){
    yield takeEvery(FETCH_CATEGORIES, fetchCategories);
}

export function* watchFetchFoods(){
    yield takeEvery(FETCH_FOODS, fetchFoods);
}

function* foodSaga(){
    yield all([
        fork(watchFetchCategories),
        fork(watchFetchFoods),
    ])
}


export default foodSaga;