import React, { Component } from 'react';

import UserService from '../../service/userService';


class FullUser extends Component {

    userService = new UserService();
    state = { user: null };

    async componentDidMount() {
        const {idUser} = this.props;        
        let user = await this.userService.userOne(idUser);        
        this.setState({ user });        
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