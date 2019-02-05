import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import './drawer.scss';

const BYTES_IN_GB = 1024 ** 3;

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
            variant: 'primary',
        };

        return (
            <div className='drawer'>
                <div className='drawer__user'>
                    <h4>
                        <FontAwesomeIcon icon={faUser} color='#d8d8d8' /> {user}
                    </h4>
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