import React from 'react';
import {render} from 'react-dom';
import App from './App.jsx';

import Login from './views/Login';
import SmsAuth from './views/SmsAuth';
import RegAuth from './views/RegAuth';

import Dashboard from './views/Dashboard';
import CreateWallet from './views/CreateWallet';


import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router'

/*
render(
  <SmsAuth />,
  document.getElementById('root')
);
*/

render((
    <Router history={hashHistory}>

        <Route path="/" component={App}>
            <Route path="/login/" component={Login}/>
            <Route path="/smsAuth" component={SmsAuth}/>
            <Route path="/regAuth" component={RegAuth}/>
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/create-wallet" component={CreateWallet}/>

        </Route>
    </Router>
), document.getElementById('root'));
