import React from 'react';
import { Link } from 'react-router';

const MainLayout = React.createClass({
    render() {
        return (
            <div className="app">
                <header className="primary-header">Main</header>
                <aside className="primary-aside">
                <ul>
                    <li><Link activeClassName="active" to="/">Home</Link></li>
                    <li><Link activeClassName="active" to="/users">Users</Link></li>
                    <li><Link activeClassName="active" to="/widgets">Widgets</Link></li>
                </ul>
                </aside>
                <main>
                    {this.props.children}
                </main>
            </div>
        );
    }
});

export default MainLayout;