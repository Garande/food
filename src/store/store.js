import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import {persistStore} from 'redux-persist'
import reducers from './reducers';
import sagas from './sagas';


const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

export function configureStore(initialState) {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(
        reducers,
        initialState,
        composeEnhancers(
            applyMiddleware(...middlewares)
        ),
    );
    sagaMiddleware.run(sagas);
    return store;
}

export const persistor = persistStore(configureStore());