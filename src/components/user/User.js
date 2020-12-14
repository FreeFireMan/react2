import React, { Component } from 'react';

import {
  withRouter,
  NavLink
} from 'react-router-dom';

const User =({ item, match: { url } })=> {
    return (
      <div>
        {item.id} - {item.name} - <NavLink to={`${url}/${item.id}`}>user info</NavLink>
      </div>
    )
}
export default withRouter(User);
