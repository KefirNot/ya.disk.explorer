import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ReduxConfig from './reduxConfig';
import ThemeConfig from './themeConfig';
import OAuth from './oauth';
import Token from './token';
import DiskInfo from './diskInfo';
import Dir from './dir';
import './App.css';

class App extends Component {
    render() {
        return (
            <ReduxConfig>
                <ThemeConfig>
                    <BrowserRouter>
                        <OAuth>
                            <DiskInfo />
                            <Route render={(props) => <Dir key={props.location.key} {...props} />} />
                        </OAuth>
                    </BrowserRouter>
                </ThemeConfig>
            </ReduxConfig>
        );
    }
}

export default App;
