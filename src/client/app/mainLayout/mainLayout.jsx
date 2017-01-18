import React from 'react';

const MainLayout = React.createClass({
    render() {
        return (
            <div className="app">
                <header className="primary-header">Main</header>
                <aside className="primary-aside"></aside>
                <main>
                    {this.props.children}
                </main>
            </div>
        );
    }
});

export default MainLayout;