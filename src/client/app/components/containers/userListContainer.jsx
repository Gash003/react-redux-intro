import React from 'react';
import axios from'axios';

import UserList from '../views/userList';

const UserListContainer = React.createClass({
    getInitialState() {
        return {
            users: []
        };
    },
    componentDidMount() {
        axios.get('/users').then(({data}) => {
            this.setState({users: data.users});
        });
    },
    render() {
        return (
            <UserList users={this.state.users} />
        );
    }
});

export default UserListContainer;