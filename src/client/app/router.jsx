import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

//Layouts
import MainLayout from './components/layouts/mainLayout';
import SearchLayout from './components/layouts/searchLayout';

//Pages
import Home from './components/pages/home';
import UserList from './components/pages/userList';
import WidgetList from './components/pages/widgetList';

export default (
    <Router history={browserHistory}>
        <Route path="/" component={MainLayout}>
        <IndexRoute component={Home} />
        <Route component={SearchLayout} >
            <Route path="users" component={UserList} />
            <Route path="widgets" component={WidgetList} />
        </Route>
        </Route>
    </Router>
);