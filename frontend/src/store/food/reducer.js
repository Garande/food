const { FETCH_CATEGORIES, FETCH_CATEGORIES_SUCCESS, FETCH_FOODS, FETCH_FOODS_SUCCESS } = require("./constants");

const INIT_STATE = {
    categories: [],
    loadingCategories: false,
    loadingFoods: false,
    error: '',
    foods: [],
}


const Food = (state = INIT_STATE, action) => {
    switch (action.type) {
        case FETCH_CATEGORIES:
            return {...state, loadingCategories: true};

        case FETCH_CATEGORIES_SUCCESS:
            return {...state, loadingCategories: false, categories: action.payload};

        case FETCH_FOODS:
            return {...state, loadingFoods: true};

        case FETCH_FOODS_SUCCESS:
            return {...state, loadingFoods: false, foods: action.payload}
    
        default:
            return {...state};
    }
}


export default Food;