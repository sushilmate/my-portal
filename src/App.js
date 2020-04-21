import React, { Component } from 'react';
import './App.css';

import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { About } from './components/About';
import { Login } from './components/Login';

export default class App extends Component {

    render() {
        return (
            <Layout>
                <Route exact path='/' component={Home} />
                <Route path='/login' component={Login} />
                <Route path='/about' component={About} />
            </Layout>
        );
    }
}