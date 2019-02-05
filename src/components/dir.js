import React from 'react';
import Path from './path';
import { connect } from 'react-redux';
import { Card, ListGroup, ListGroupItem, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder, faFile } from '@fortawesome/free-solid-svg-icons'
import { fetchDiskDir } from '../store/actions';
import Loading from './loading';
import './dir.scss';

const FolderIcon = () => <FontAwesomeIcon icon={faFolder} size='2x' color='#fdefb3' />
const FileIcon = () => <FontAwesomeIcon icon={faFile} size='2x' color='#d8d8d8' />

class Dir extends React.Component {
    componentDidMount() {
        const { fetchDiskDir, location: { pathname, hash } } = this.props;

        fetchDiskDir(pathname + hash);
    }

    makeClickFolderHandler = (dir) => () => {
        const { history } = this.props;

        history.push(dir.replace('disk:', ''));
    };

    sizeToString = (size) => {
        let n = 0;
        const cutSize = (x) => {
            if (x < 1024 || n === 3) return x;
            n++;
            return cutSize(x / 1024);
        }
        const unitNames = ['Б', 'КБ', 'МБ', 'ГБ',];
        return `${Math.floor(cutSize(size))}${unitNames[n]}`;
    }

    get content() {
        const { data } = this.props;

        if (data.length === 0) {
            return (<ListGroupItem className='dir__obj--empty'>пусто</ListGroupItem>);
        }

        return data.map((x, i) => {
            const isDir = x.type === 'dir';
            const Icon = isDir ? FolderIcon : FileIcon;
            return (
                <ListGroupItem key={i} className={`dir__obj--${isDir ? 'folder' : 'file'}`} onClick={isDir ? this.makeClickFolderHandler(x.path) : null}>
                    <Row>
                        <Col xs={2} md={2} lg={1} className='dir__icon'>
                            <Icon />
                        </Col>
                        <Col xs={10} md={10} lg={11}>
                            <Row>
                                <Col md={10} xs={12}>
                                    {x.name}
                                </Col>
                                <Col md={2} xs={12} className='dir__size'>
                                    {isDir ? null : this.sizeToString(x.size)}
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </ListGroupItem>
            );
        })
    }

    render() {
        const { loading } = this.props;
        return (
            <Card className='dir'>
                <Card.Header className='dir__header'>
                    <Path />
                </Card.Header>
                <ListGroup className="list-group-flush">
                    {loading ? <Loading /> : this.content}
                </ListGroup>
            </Card>
        );
    }
}

export default connect(
    state => ({ ...state.disk.dir }),
    dispatch => ({ fetchDiskDir: dir => dispatch(fetchDiskDir(dir)) }),
)(Dir);
