import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Route } from 'react-router-dom';
import Drawer from './drawer';
import Dir from './dir';
import './workspace.scss';

class Workspace extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col lg={3} md={4} xs={12}>
                        <Drawer />
                    </Col>
                    <Col>
                        <Route render={(props) => <Dir key={props.location.key} {...props} />} />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Workspace;
