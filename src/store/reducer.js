import * as actions from './actions.js';
import update from 'immutability-helper';

const initialState = {
    token: null,
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
            currentDir: null,
            data: [],
        },
    }
}

export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case actions.SET_TOKEN:
            return { ...state, token: payload.token };
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
        case actions.FETCH_DISK_DIR_STARTED:
            return update(state, { disk: { dir: { loading: { $set: true }, currentDir: { $set: payload.dir } } } });
        case actions.FETCH_DISK_DIR_SUCCESSED:
            return update(state, { disk: { dir: { loading: { $set: false }, data: { $set: payload.data }, } } });
        default:
            break;
    }
    return state;
}