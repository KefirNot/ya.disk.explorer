import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import './loading.scss';

export default () => (
    <div className='loading'>
        <CircularProgress
            size={80}
            thickness={7.2}
        />
    </div>
);