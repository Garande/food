import { API_ERROR, FETCH_CATEGORIES, FETCH_CATEGORIES_SUCCESS, FETCH_FOODS, FETCH_FOODS_SUCCESS } from "./constants";

export const fetchCategories = () => ({
    type: FETCH_CATEGORIES,
});

export const fetchCategoriesSuccess = (categories) => ({
    type: FETCH_CATEGORIES_SUCCESS,
    payload: categories,
})

export const fetchFoods = (categoryId) => ({
    type: FETCH_FOODS,
    payload: {categoryId}
});

export const fetchFoodsSuccess = (foods) => ({
    type: FETCH_FOODS_SUCCESS,
    payload: foods
})

export const apiError = (error) => ({
    type: API_ERROR,
    payload: error
})