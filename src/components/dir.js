import React from 'react';
import Path from './path';
import { connect } from 'react-redux';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
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
                <ListGroup className="list-group-flush">
                    {
                        loading
                            ? <Loading />
                            : data.map((x, i) => (
                                <ListGroupItem
                                    key={i}
                                    className='dir__obj--folder'
                                    onClick={x.type === 'dir' ? this.makeClickFolderHandler(x.path) : null}
                                >
                                    {x.name}
                                </ListGroupItem>
                            ))
                    }
                </ListGroup>
            </Card>
        );
    }
}

export default connect(state => ({ ...state.disk.dir }), mapDispatchToProps)(Dir);
