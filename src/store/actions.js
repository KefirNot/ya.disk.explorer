export const INIT_APP = 'INIT_APP';
export const SET_TOKEN = 'SET_TOKEN';

export const initApp = token => ({ type: INIT_APP, payload: { token } });
export const setToken = token => ({ type: SET_TOKEN, payload: { token } });

export const mapDispatchToProps = dispatch => ({
    initApp: token => dispatch(initApp(token)),
});