import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';

const LoginPage = () => <div>login</div>
const MainPage = () => <div>content</div>

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route path={`${process.env.PUBLIC_URL}/`} exact component={MainPage} />
                    <Route path={`${process.env.PUBLIC_URL}/login/`} component={LoginPage} />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
