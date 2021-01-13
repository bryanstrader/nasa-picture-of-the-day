import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './rootReducer';
import saga from './rootSaga'
import createSagaMiddleware from 'redux-saga';

const initialState = {};

const store = () => {
    const sagaMiddleware = createSagaMiddleware();
    const composeEnhancers = typeof window === 'object' && window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] ? 
    window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']({ }) : compose;

    const enhancer = composeEnhancers(
        applyMiddleware(sagaMiddleware)
    );

    const store = createStore(
        reducer,
        initialState,
        enhancer,
    )
    
    sagaMiddleware.run(saga);
    return store;
}


export default store;