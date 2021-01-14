import { all, put, takeLatest, call } from 'redux-saga/effects';
import { TYPES } from './podActions';
import { fetchPod } from '../../api/podApi';

export function* getPod() {
	try {
		const response = yield call(fetchPod);
		if (response.status === 200){
			const data = yield response.json();
			yield put({
				type: TYPES.GET_POD_SUCCESS,
				payload: data
			});
		} else {
			const { msg } = yield response.json();
			throw msg;
		}
	}
	catch (error) {
		yield put({type: TYPES.GET_POD_ERROR, error });
	}
}

export default function* saga() {
	yield all([
		takeLatest(TYPES.GET_POD, getPod),
    ]);
}