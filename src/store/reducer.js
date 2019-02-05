// @flow
import * as actions from './actions';
import update from 'immutability-helper';

type State = {
    +token: ?string,
    +error: ?string,
    +disk: {
        +info: {
            +loading: boolean,
            +user: ?string,
            +trashSize: ?number,
            +totalSpace: ?number,
            +usedSpace: ?number,
        },
        +dir: {
            +loading: boolean,
            +data: Array<any>,
        }
    }
}

const initialState: State = {
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

export default (state: State = initialState, action: actions.ActionType): State => {
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
        case actions.FETCH_DISK_INFO_FAILED:
            return update(state, { disk: { info: { loading: { $set: false } } }, error: { $set: payload.text } });
        case actions.FETCH_DISK_DIR_STARTED:
            return update(state, { disk: { dir: { loading: { $set: true } } } });
        case actions.FETCH_DISK_DIR_SUCCESSED:
            return update(state, { disk: { dir: { loading: { $set: false }, data: { $set: payload.data } } } });
        case actions.FETCH_DISK_DIR_FAILED:
            return update(state, { disk: { dir: { loading: { $set: false }, data: { $set: [] }, } }, error: { $set: payload.text } });
        default:
            break;
    }
    return state;
}