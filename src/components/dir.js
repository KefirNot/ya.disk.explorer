import React from 'react';
import Path from './path';
import { connect } from 'react-redux';
import { mapDispatchToProps } from '../store/actions';
import './dir.scss';

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
        return (
            <div class='dir'>
                <Path />
                <div>
                    {
                        data.map((x, i) => <div
                            key={i}
                            onClick={x.type === 'dir' ? this.makeClickFolderHandler(x.path) : null}
                        >
                            {x.name}
                        </div>)
                    }
                </div>
            </div>
        );
    }
}

export default connect(state => ({ ...state.disk.dir }), mapDispatchToProps)(Dir);
