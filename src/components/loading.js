import React from 'react';
import { Alert } from 'react-bootstrap';
import './loading.scss';

export default () => (
    <div className='loading'>
        <Alert variant='primary' className='loading__banner'>loading</Alert>
    </div>
);