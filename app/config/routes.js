import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import Main from '../components/Main.js';
import StickyBoard from '../components/StickyBoard';
import Settings  from '../components/Settings';
import About from '../components/About';
import Home from '../components/Home';
import SignIn from '../components/SignIn';

var routes = (
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Home} />
            <Route path="/board" component={StickyBoard} />
            <Route path="/config" component={Settings} />
            <Route path="/about" header= "Marcin Jarecki" component={About} />
            <Route path="/home" component={Home} />
            <Route path="/sign_in" component={SignIn} />
        </Route>
    </Router>
);

module.exports = routes;






