import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ReduxConfig from './reduxConfig';
import OAuth from './oauth';
import Token from './token';
import DiskInfo from './diskInfo';
import Dir from './dir';
import './App.css';

class App extends Component {
    render() {
        return (
            <ReduxConfig>
                <BrowserRouter>
                    <OAuth>
                        <Token />
                        <DiskInfo />
                        <Route render={(props) => <Dir key={props.location.key} {...props} />} />
                    </OAuth>
                </BrowserRouter>
            </ReduxConfig>
        );
    }
}

export default App;
