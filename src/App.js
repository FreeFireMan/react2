import React, {Component} from 'react';
import './App.css';
import User from './components/User';
import UserService from './services/userService';


class App extends Component {

    inputMain = React.createRef();
    userService = new UserService();
    state = {
        inputValue: 0,
        users: [],
        user: null,
        formValid: false
    };

    onInputFill = ({target:{value}}) => {

        const {users} = this.state;
        const findUser = users.find(user => user.id === +value)

        this.setState({
            inputValue: value,
            formValid: !!findUser
        });

    }

    toSave = () => {
        const {inputValue: id} = this.state;
        this.userService.user(id).then(user => this.setState({user}))
    }

    componentDidMount() {
        this.userService
            .users()
            .then(users => this.setState({users}))
    }


    render() {
        let {inputValue, user, formValid} = this.state;

        return (
            <div>
                <input type={'number'} onInput={this.onInputFill} value={inputValue}/>
                <button onClick={this.toSave} disabled={!formValid}>send</button>
                <div>
                    {
                        user && <User item={user} key={user.id}/>
                    }
                </div>
            </div>
        )
    }

}

export default App;
