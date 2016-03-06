import React from 'react';
import {render} from 'react-dom';
import App from './App.jsx';

import Login from './views/Login';
import SmsAuth from './views/SmsAuth';
import RegAuth from './views/RegAuth';

import Dashboard from './views/Dashboard';
import Wallet from './views/Wallet';

import CreateWallet from './views/CreateWallet';
import StoryCheckOut from './views/StoryCheckOut';

import CreditCard from './views/CreditCard';

import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router'


render((
    <Router history={hashHistory}>

        <Route path="/" component={App}>
            <Route path="/login/" component={Login}/>
            <Route path="/smsAuth" component={SmsAuth}/>
            <Route path="/regAuth" component={RegAuth}/>
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/wal/:wid" component={Wallet}/>

            <Route path="/create-wallet" component={CreateWallet}/>
            <Route path="/credit-card" component={CreditCard}/>


            <Route path="/story-mock" component={StoryCheckOut}/>
        </Route>
    </Router>
), document.getElementById('root'));
