import React from 'react';
import Path from './path';
import { connect } from 'react-redux';
import { Card } from 'react-bootstrap';
import { mapDispatchToProps } from '../store/actions';
import Loading from './loading';
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
            <Card className='dir'>
                <Card.Header className='dir__header'>
                    <Path />
                </Card.Header>
                <Card.Body>
                    {
                        loading
                        ? <Loading />
                        : data.map((x, i) => (
                            <div
                                key={i}
                                onClick={x.type === 'dir' ? this.makeClickFolderHandler(x.path) : null}
                            >
                                {x.name}
                            </div>
                        ))
                    }
                </Card.Body>
            </Card>
        );
    }
}

export default connect(state => ({ ...state.disk.dir }), mapDispatchToProps)(Dir);
