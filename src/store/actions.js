import asyncMaker from './asyncMaker';

export const FETCH_INITIAL_DATA = 'INIT_APP';
export const SET_TOKEN = 'SET_TOKEN';

export const fetchInitialData = token => ({ type: FETCH_INITIAL_DATA, payload: { token } });
export const setToken = token => ({ type: SET_TOKEN, payload: { token } });

export const {
    FETCH_DISK_FILES,
    FETCH_DISK_FILES_STARTED,
    FETCH_DISK_FILES_SUCCESSED,
    FETCH_DISK_FILES_FAILED,
    fetchDiskFiles,
    fetchDiskFilesStarted,
    fetchDiskFilesSuccessed,
    fetchDiskFilesFailed,
} = asyncMaker('FETCH_DISK_FILES', 'fetchDiskFiles');

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

export const mapDispatchToProps = dispatch => ({
    fetchInitialData: token => dispatch(fetchInitialData(token)),
});