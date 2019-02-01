import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import { connect } from 'react-redux';
import './drawer.scss';

const BYTES_IN_GB = 1024 * 1024 * 1024;

const toGb = bytes => {
    const result = bytes / BYTES_IN_GB;
    return result.toFixed(result % 1 === 0 ? 0 : 2);
}

class Drawer extends React.Component {
    render() {
        const { user, usedSpace, totalSpace } = this.props;

        const progressBarProps = {
            now: Math.round(usedSpace / totalSpace * 100),
            striped: true,
            variant: 'success',
        };

        return (
            <div className='drawer'>
                <div className='drawer__user'>
                    <h4>User: {user}</h4>
                </div>
                <div className='drawer__info'>
                    <ProgressBar {...progressBarProps} />
                    Свободно {toGb(totalSpace - usedSpace)}ГБ из {toGb(totalSpace)}ГБ
                </div>
            </div>
        );
    }
}

export default connect(state => ({ ...state.disk.info }))(Drawer);