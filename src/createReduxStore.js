import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './rootReducer';
import saga from './rootSaga';

const initialState = {};

const store = () => {
    const sagaMiddleware = createSagaMiddleware();
    const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ }) : compose;

    const enhancer = composeEnhancers(
        applyMiddleware(sagaMiddleware),
    );

    const theStore = createStore(
        reducer,
        initialState,
        enhancer,
    );

    sagaMiddleware.run(saga);
    return theStore;
};

export default store;
