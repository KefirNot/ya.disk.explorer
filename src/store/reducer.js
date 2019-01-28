import * as actions from './actions.js';

const initialState = {
    token: localStorage.getItem('token'),
}

export default (state = initialState, action) => {
    switch (action.type) {
        case actions.SET_TOKEN:
            return { ...state, token: action.payload.token };
        default:
            break;
    }
    return state;
}