import axios from 'axios';

class ApiProvider {
    constructor(){

    }


    fetchCategories = () => {
        return new Promise((resolve, reject) => {
            axios.get('http://127.0.0.1:8000/api/categories/')
            .then(res => {
                resolve(res.data)
            }).catch(error => {
                console.error(error)
                reject(error)
            })
        })
    }

    fetchFoods = () => {
        console.log('=========================================+++++++++')
        return new Promise((resolve, reject) => {
            axios.get('http://127.0.0.1:8000/api/foods/')
            .then(res => {
                console.log(res.data)
                resolve(res.data);
            }).catch(error => {
                console.error(error)
                reject(error)
            })
        })
    }
}


let _apiProvider = null;

const initApiProvider = () => {
    if(!_apiProvider){
        _apiProvider = new ApiProvider();
    }
    return _apiProvider;
}


const getApiProvider = () => {
    if(!_apiProvider){
        _apiProvider = new ApiProvider();
    }
    return _apiProvider;
}


export {initApiProvider, getApiProvider}