import React from 'react';
import { connect } from 'react-redux';
import { mapDispatchToProps } from './store/actions';

class Dir extends React.Component {
    componentDidMount() {
        const { fetchDiskDir, location: { pathname } } = this.props;

        fetchDiskDir(pathname);
    }

    makeClickFolderHandler = (dir) => () => {
        const { history } = this.props;

        history.push(dir.replace('disk:', ''));
    }

    render() {
        const { loading, data } = this.props;
        if (loading) return '&loading&';
        return <div>{data.map((x, i) => <div key={i} onClick={x.type === 'dir' ? this.makeClickFolderHandler(x.path) : null}>{x.name}</div>)}</div>;
    }
}

export default connect(state => ({ ...state.disk.dir }), mapDispatchToProps)(Dir);
