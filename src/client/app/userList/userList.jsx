import React from 'react';

const UserList = React.createClass({
    render() {
        return (
            <ul className="user-list">
                <li>Dan</li>
                <li>Ryan</li>
                <li>Michael</li>
            </ul>
        );
    }
});

export default UserList;