import React, { Component } from 'react';

import {
  withRouter,
  Link
} from 'react-router-dom';

class User extends Component {

  render() {
    let { item, match: { url } } = this.props;
    
    return (
      <div>
        {item.id} - {item.name} - <Link to={`${url}/${item.id}`}>user info</Link>

      </div>
    )
  }

}
export default withRouter(User);