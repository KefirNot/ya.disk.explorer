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
        yield put(actions.fetchDiskInfoStarted());
        const { data } = yield call(api.getDiskInfo);
        yield put(actions.fetchDiskInfoSuccessed(data));
    }
    catch (error) {
        console.log('error!!!', error)
    }
}

function* fetchDiskDir(action) {
    try {
        yield put(actions.fetchDiskDirStarted());
        const { data } = yield call(api.getDiskDir, action.payload.arg);
        yield put(actions.fetchDiskDirSuccessed({ data: data._embedded.items }));
    }
    catch (error) {
        console.log('error!!!', error)
    }
}

function* saga() {
    yield takeLatest(actions.FETCH_INITIAL_DATA, fetchInitialData);
    yield takeLatest(actions.FETCH_DISK_INFO, fetchDiskInfo);
    yield takeLatest(actions.FETCH_DISK_DIR, fetchDiskDir);
}

export default saga;