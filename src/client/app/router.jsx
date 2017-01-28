import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

//Layouts
import MainLayout from './components/layouts/mainLayout';
import SearchLayout from './components/layouts/searchLayout';
import Home from './components/layouts/home';

//Container Coponents
import UserListContainer from './components/containers/userListContainer';
import WidgetListContainer from './components/containers/widgetListContainer';


export default (
    <Router history={browserHistory}>
        <Route path="/" component={MainLayout}>
        <IndexRoute component={Home} />
        <Route component={SearchLayout} >
            <Route path="users" component={UserListContainer} />
            <Route path="widgets" component={WidgetListContainer} />
        </Route>
        </Route>
    </Router>
);