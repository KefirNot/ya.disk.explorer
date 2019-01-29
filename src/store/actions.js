export const FETCH_INITIAL_DATA = 'INIT_APP';
export const SET_TOKEN = 'SET_TOKEN';

export const fetchInitialData = token => ({ type: FETCH_INITIAL_DATA, payload: { token } });
export const setToken = token => ({ type: SET_TOKEN, payload: { token } });

export const mapDispatchToProps = dispatch => ({
    fetchInitialData: token => dispatch(fetchInitialData(token)),
});