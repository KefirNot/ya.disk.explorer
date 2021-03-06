import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReduxConfig from './reduxConfig';
import OAuth from './oauth';
import Workspace from './components/workspace';
import Modal from './components/alert';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    render() {
        return (
            <ReduxConfig>
                <BrowserRouter>
                    <OAuth>
                        <Workspace />
                        <Modal />
                    </OAuth>
                </BrowserRouter>
            </ReduxConfig>
        );
    }
}

export default App;
