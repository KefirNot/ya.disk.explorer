import asyncMaker from './asyncMaker';

export const FETCH_INITIAL_DATA = 'FETCH_INITIAL_DATA';
export const SET_TOKEN = 'SET_TOKEN';
export const CLEAR_ERROR = 'CLEAR_ERROR';

export const fetchInitialData = token => ({ type: FETCH_INITIAL_DATA, payload: { token } });
export const setToken = token => ({ type: SET_TOKEN, payload: { token } });
export const clearError = () => ({ type: CLEAR_ERROR, payload: {} });

export const {
    FETCH_DISK_DIR,
    FETCH_DISK_DIR_STARTED,
    FETCH_DISK_DIR_SUCCESSED,
    FETCH_DISK_DIR_FAILED,
    fetchDiskDir,
    fetchDiskDirStarted,
    fetchDiskDirSuccessed,
    fetchDiskDirFailed,
} = asyncMaker('FETCH_DISK_DIR', 'fetchDiskDir');

export const {
    FETCH_DISK_INFO,
    FETCH_DISK_INFO_STARTED,
    FETCH_DISK_INFO_SUCCESSED,
    FETCH_DISK_INFO_FAILED,
    fetchDiskInfo,
    fetchDiskInfoStarted,
    fetchDiskInfoSuccessed,
    fetchDiskInfoFailed,
} = asyncMaker('FETCH_DISK_INFO', 'fetchDiskInfo');

export type ActionType = { type: string, payload: any };