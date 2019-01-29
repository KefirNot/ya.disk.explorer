import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import qs from 'query-string';
import { mapDispatchToProps } from './store/actions';

class OAUTH extends React.Component {
    redirectToOauth = () => {
        const OAUTH_ARGS = {
            response_type: 'token',
            client_id: process.env.REACT_APP_CLIENT_ID,
        };
        const OAUTH_URL = `${process.env.REACT_APP_OAUTH_URL}?${qs.stringify(OAUTH_ARGS)}`;

        window.location.href = OAUTH_URL;
    }

    fetchInitialData = (token) => {
        const { fetchInitialData, history } = this.props;

        fetchInitialData(token);
        history.replace('/');
    }

    componentDidMount() {
        const { token, location: { hash } } = this.props;
        const hashObj = qs.parse(hash);
        if (!token && !hashObj.access_token) {
            this.redirectToOauth();
        } else if (hashObj.access_token) {
            this.fetchInitialData(hashObj.access_token);
        }
    }

    render() {
        const { children, token } = this.props;

        if(!token) return 'loading...';

        return children;
    }
}

export default withRouter(connect(state => ({ token: state.token }), mapDispatchToProps)(OAUTH));
