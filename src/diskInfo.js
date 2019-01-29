import React, { Component } from 'react';
import { connect } from 'react-redux';

class Token extends Component {
    render() {
        const { loading, user, totalSpace, usedSpace } = this.props;

        if (loading) return '!loading!';
        return <div>{`user: ${user}, used: ${Math.floor(usedSpace * 100 / totalSpace)}%`}</div>;
    }
}

export default connect(state => ({ ...state.disk.info }))(Token);
