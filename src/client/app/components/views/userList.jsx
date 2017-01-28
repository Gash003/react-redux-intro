import React from 'react';
import { Link } from 'react-router';

const UserList = React.createClass({
    render() {
        return (
            <ul className="user-list">
                {this.props.users.map(this.createListItem)}
            </ul>
        );
    },
    createListItem(item) {
        return (
            <li key={item.id.toString()}>
                <Link to={`/users/${item.id}`}>
                    {item.name}
                </Link>
            </li>
        );
    }
});

export default UserList;