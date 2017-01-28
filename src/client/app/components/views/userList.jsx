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
                <div>
                    {item.name}
                    <button onClick={this.props.deleteUser.bind(null, item.id)}>
                        X
                    </button>
                </div>
            </li>
        );
    }
});

export default UserList;