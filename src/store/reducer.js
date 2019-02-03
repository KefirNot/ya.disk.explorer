import * as actions from './actions.js';
import update from 'immutability-helper';

const initialState = {
    token: null,
    error: null,
    disk: {
        info: {
            loading: false,
            user: null,
            trashSize: null,
            totalSpace: null,
            usedSpace: null,
        },
        dir: {
            loading: false,
            data: [],
        },
    }
}

export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case actions.SET_TOKEN:
            return { ...state, token: payload.token };
        case actions.CLEAR_ERROR:
            return { ...state, error: null };
        case actions.FETCH_DISK_INFO_STARTED:
            return update(state, { disk: { info: { loading: { $set: true } } } });
        case actions.FETCH_DISK_INFO_SUCCESSED:
            return update(state, {
                disk: {
                    info: {
                        $set: {
                            loading: false,
                            user: payload.user.display_name,
                            trashSize: payload.trash_size,
                            totalSpace: payload.total_space,
                            usedSpace: payload.used_space,
                        }
                    }
                }
            });
        case actions.FETCH_DISK_INFO_SUCCESSED:
            return update(state, { disk: { info: { loading: { $set: false } } }, error: { $set: payload.text } });
        case actions.FETCH_DISK_DIR_STARTED:
            return update(state, { disk: { dir: { loading: { $set: true } } } });
        case actions.FETCH_DISK_DIR_SUCCESSED:
            return update(state, { disk: { dir: { loading: { $set: false }, data: { $set: payload.data }, } } });
        case actions.FETCH_DISK_DIR_FAILED:
            return update(state, { disk: { dir: { loading: { $set: false }, data: { $set: [] }, } }, error: { $set: payload.text } });
        default:
            break;
    }
    return state;
}