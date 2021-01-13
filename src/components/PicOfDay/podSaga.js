import { all, put, takeLatest } from 'redux-saga/effects';
import { TYPES } from './podActions';
import { NASA } from '../../config/config';

export function* getPod() {
	try {
		const { url, apiKey } = NASA;
		let picDate = new Date();
		picDate = `${picDate.getFullYear()}-${picDate.getMonth()+1}-${picDate.getDate()}`;
		const response = yield fetch(`${url}/planetary/apod?api_key=${apiKey}&date=${picDate}`);
		if (response.status === 200){
			const data = yield response.json();
			yield put({
				type: TYPES.GET_POD_SUCCESS,
				payload: data
			});
		}else{
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