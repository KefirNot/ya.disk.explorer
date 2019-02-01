import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ReduxConfig from './reduxConfig';
import OAuth from './oauth';
import Drawer from './components/drawer';
import Dir from './dir';
import Workspace from './components/workspace';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    render() {
        return (
            <ReduxConfig>
                <BrowserRouter>
                    <OAuth>
                        <Workspace drawer={Drawer}>
                            <Route render={(props) => <Dir key={props.location.key} {...props} />} />
                        </Workspace>
                    </OAuth>
                </BrowserRouter>
            </ReduxConfig>
        );
    }
}

export default App;
