import { put, takeLatest } from 'redux-saga/effects';
import { FETCH_INITIAL_DATA, setToken } from './actions';
import createApi from './api';

let api;

function* fetchInitialData(action) {
    api = createApi(action.payload.token);
    yield put(setToken(action.payload.token));
}

function* saga() {
    yield takeLatest(FETCH_INITIAL_DATA, fetchInitialData);
}

export default saga;