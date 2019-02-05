import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { clearError } from '../store/actions';

class Alert extends React.Component {
    render() {
        const { caption, text, handleClose, show } = this.props;
        return (
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>{caption}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{text}</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Ок
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default connect(
    state => ({ caption: 'Ошибка', text: state.error, show: !!state.error }),
    dispatch => ({ handleClose: () => dispatch(clearError()) })
)(Alert);