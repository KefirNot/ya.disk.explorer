import { put, takeLatest } from 'redux-saga/effects';
import { FETCH_INITIAL_DATA, setToken } from './actions';
import createApi from './api';

let api;

function* fetchInitialData(action) {
    api = createApi(action.payload.token);
    yield put(setToken(action.payload.token));
    
    // const user = yield call(Api.fetchUser, action.payload.userId);
    // yield put({ type: "USER_FETCH_SUCCEEDED", user: user });
}

function* saga() {
    yield takeLatest(FETCH_INITIAL_DATA, fetchInitialData);
}

export default saga;