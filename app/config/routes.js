import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import Main from '../components/Main.js';
import StickyBoard from '../components/StickyBoard';
import Config from '../components/Config';
import About from '../components/About';
import Home from '../components/Home';

var routes = (
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Home} />
            <Route path="/board" component={StickyBoard} />
            <Route path="/config" component={Config} />
            <Route path="/about" component={About} />
            <Route path="/home" component={Home} />
        </Route>
    </Router>
);

module.exports = routes;





