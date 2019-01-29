import { call, put, takeLatest } from 'redux-saga/effects';
import * as actions from './actions';
import createApi from '../api';

let api;

function* fetchInitialData(action) {
    api = createApi(action.payload.token);
    yield put(actions.setToken(action.payload.token));
    yield put(actions.fetchDiskInfo());
}

function* fetchDiskInfo() {
    try {
        yield put(actions.fetchDiskInfoStarted(data));
        const { data } = yield call(api.getDiskInfo);
        yield put(actions.fetchDiskInfoSuccessed(data));
    }
    catch (error) {
        console.log('error!!!', error)
    }

}

function* saga() {
    yield takeLatest(actions.FETCH_INITIAL_DATA, fetchInitialData);
    yield takeLatest(actions.FETCH_DISK_INFO, fetchDiskInfo);
}

export default saga;