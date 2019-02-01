import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { withRouter, Link } from 'react-router-dom';

const BcItem = props => {
    let content = props.label;
    if (!props.active) content = <Link to={props.url}>{content}</Link>;
    return (
        <Breadcrumb.Item active={props.active}>
            {content}
        </Breadcrumb.Item>
    );
};

class Path extends React.Component {
    render() {
        const { location: { pathname } } = this.props;
        const parentDirs = pathname
            .split('/')
            .filter(x => x)
            .map((x, i, arr) => ({
                label: x,
                url: '/' + arr.slice(0, i + 1).join('/'),
                active: i === arr.length - 1,
            }));

        return (
            <Breadcrumb>
                <BcItem url='/' label='Диск' />
                {
                    parentDirs.map((x, i) => <BcItem key={i} {...x} />)
                }
            </Breadcrumb>
        );
    }
}

export default withRouter(Path)