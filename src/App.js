import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";
import ReduxConfig from './reduxConfig';
import './App.css';

class App extends Component {
    render() {
        return (
            <ReduxConfig>
                <BrowserRouter>
                    <div>
                        asd
                    </div>
                </BrowserRouter>
            </ReduxConfig>
        );
    }
}

export default App;
