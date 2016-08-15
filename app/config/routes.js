import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import Main from '../index.js';
import Config from '../components/config';
import About from '../components/about';


var routes = (
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Main} />
            <Route path="/config" component={Config} />
            <Route path="/about" component={About} />
        </Route>
    </Router>
);

module.exports = routes;






