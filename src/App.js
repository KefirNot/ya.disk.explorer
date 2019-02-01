import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ReduxConfig from './reduxConfig';
import OAuth from './oauth';
import DiskInfo from './diskInfo';
import Dir from './dir';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    render() {
        return (
            <ReduxConfig>
                    <BrowserRouter>
                        <OAuth>
                            <DiskInfo />
                            <Route render={(props) => <Dir key={props.location.key} {...props} />} />
                        </OAuth>
                    </BrowserRouter>
            </ReduxConfig>
        );
    }
}

export default App;
