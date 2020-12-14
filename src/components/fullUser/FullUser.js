import React, { Component } from 'react';
import UserService from '../../service/userService';


class FullUser extends Component {

    userService = new UserService();
    state = { user: null };

    componentDidMount() {
        const {idUser} = this.props;
        this.userService
            .userOne(idUser)
            .then(user => this.setState({ user }))
    }

    render() {
        let { user } = this.state;
        return (
            <div>
                <hr/>
                {user && <div>{user.id} - {user.name} - {user.email}</div>}
            </div>
        )
    }

}
export default FullUser;
