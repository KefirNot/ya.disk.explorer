import React from 'react';
import { Alert } from 'react-bootstrap';
import './loading.scss';

export default () => (
    <div className='loading'>
        <Alert variant='success'>loading</Alert>
    </div>
);