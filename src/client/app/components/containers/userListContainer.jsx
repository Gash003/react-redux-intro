import React from 'react';
import axios from'axios';
import _ from 'lodash';

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
            <UserList users={this.state.users} deleteUser={this.deleteUser} />
        );
    },
    deleteUser(userId) {
        let filteredUserList = _.filter(this.state.users, (user) => {
            return user.id !== userId;
        });

        this.setState({users: filteredUserList});
    }
});

export default UserListContainer;