import { put, takeLatest } from 'redux-saga/effects';
import { INIT_APP, setToken } from './actions';
import createApi from './api';

let api;

function* initApp(action) {
    api = createApi(action.payload.token);
    yield put(setToken(action.payload.token));
}

function* saga() {
    yield takeLatest(INIT_APP, initApp);
}

export default saga;