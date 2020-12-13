import { Component } from 'react';
import UserService from '../../service/userService';
import {
  Switch,
  Route,
  withRouter
} from 'react-router-dom';


import User from '../user/User';
import FullUser from '../fullUser/FullUser';


class AllUsers extends Component {
  userService = new UserService();
  state = { users: [] };

  async componentDidMount() {
    let users = await this.userService.user();
    this.setState({ users });
  }
  render() {
    let { users } = this.state;
    let { match: { url } } = this.props;

    return (
      <div>
        {
          users.map(value => (<User item={value} key={value.id} />))
        }
        
        <div>
          <Switch>
            <Route path={`${url}/:id`} render={(props) => {
              let { match: { params: { id } } } = props;
              return <FullUser idUser={id} key={id} />
            }} />
          </Switch>
        </div>
        
      </div>
    )
  }

}
export default withRouter(AllUsers);
