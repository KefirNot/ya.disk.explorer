import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ReduxConfig from './reduxConfig';
import OAuth from './oauth';
import Token from './token';
import './App.css';

class App extends Component {
    render() {
        return (
            <ReduxConfig>
                <BrowserRouter>
                    <OAuth>
                        <Token />
                    </OAuth>
                </BrowserRouter>
            </ReduxConfig>
        );
    }
}

export default App;
