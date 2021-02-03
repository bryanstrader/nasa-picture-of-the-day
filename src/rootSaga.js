import { all, fork } from 'redux-saga/effects';
import podSaga from './components/PicOfDay/podSaga';

function* rootSaga() {
    yield all([
        fork(podSaga),
    ]);
}

export default rootSaga;
