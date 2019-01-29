import React, { Component } from 'react';
import { connect } from 'react-redux';

class Token extends Component {
    render() {
        const { token } = this.props;
        return <div>{token}</div>;
    }
}

export default connect(state => ({ token: state.token }))(Token);
