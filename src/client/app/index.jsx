import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

import Home from './home/home';
import MainLayout from './mainLayout/mainLayout';
import SearchLayout from './searchLayout/searchLayout';
import UserList from './userList/userList';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Home} />
    <Route path="/main" component={MainLayout} />
  </Router>
), document.getElementById('app'));