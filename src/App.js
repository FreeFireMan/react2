import React, { Component } from 'react';
import './App.css';
import User from './components/User';
import UserService from './services/userService';


class App extends Component {

  inputMain = React.createRef();
  userService = new UserService();
  state = { inputValue: 0, 
            users: [], 
            user: [],
            buttonValid: false,
            formValid: false };

  onInputFill = (val) => {        
    let validButton = this.validId(val.target.value);    
    this.setState({ inputValue: this.inputMain.current.value });

  }

  onFormSubmint = (val) => {
    val.preventDefault();    
    
  }

  async toSave(id) {
    let userId = await this.userService.user(id);
    let { user } = this.state;
    user.pop();
    user.push(userId);
    this.setState({ user })
    //this.setState({user: userId})    
  }


  validId(val) {
   let {users, buttonValid} = this.state;
   buttonValid = users.find(value => (value.id === +val)) ? true : false;  
   this.setState({buttonValid}, this.validForm)
  }

  validForm() {
    this.setState({formValid: this.state.buttonValid})
  }
  

  async componentDidMount() {
    let users = await this.userService.users();
    this.setState({ users });
  }
 

  render() {
    let { inputValue, user, formValid } = this.state;

    return (
      <div>
        <form onSubmit={this.onFormSubmint}>
          <input ref={this.inputMain} type={'number'} onInput={this.onInputFill} value={inputValue} />
          <button onClick={() => { this.toSave(inputValue) }}  disabled={!formValid}>send</button>
        </form>

        <div>
          {
            user.map(value => <User item={value} key={value.id} />)
          }


          {/* {user && <div>{user.id} - {user.name} - {user.website}</div>} */}
        </div>

      </div>
    )
  }

}
export default App;
