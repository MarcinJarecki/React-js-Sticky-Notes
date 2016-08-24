import React from 'react';
import { Router, Route, hashHistory, IndexRoute} from 'react-router';
import Main from '../components/Main.js';
import StickyBoard from '../components/StickyBoard';
import Settings  from '../components/Settings';
import About from '../components/About';
import Home from '../components/Home';
import SignUp from '../components/SignUp';
import LoginIn from '../components/LogIn';
import Account from '../components/Account';
import PasswordReset from '../components/PasswordReset';
import PageNotFound from '../components/PageNotFound';


var routes = (
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Home} />
            <Route path="/board" component={StickyBoard} />
            <Route path="/settings" component={Settings} />
            <Route path="/about" header= "Marcin Jarecki" component={About} />
            <Route path="/home" component={Home} />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={LoginIn} />
            <Route path="/account" component={Account} />
            <Route path="password_reset" component={PasswordReset} />
            <Route path="*" component={PageNotFound}/>
        </Route>
    </Router>
);

module.exports = routes;






