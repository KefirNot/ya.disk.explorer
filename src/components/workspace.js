import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './workspace.scss';

class Workspace extends React.Component {
    render() {
        const { drawer: Drawer, children } = this.props;
        return (
            <Container fluid className='h-100'>
                <Row className='h-100'>
                    <Col lg={3} md={4} xs={12}>
                        <Drawer />
                    </Col>
                    <Col>
                        {children}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Workspace;
