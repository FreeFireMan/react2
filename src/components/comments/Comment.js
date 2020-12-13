import React, {Component} from 'react';
import {
    Link,
    withRouter
  } from 'react-router-dom';

class Comment extends Component{
  
render(){
    let {itemCom, match:{url}} = this.props;

  return(
    <div>
      {itemCom.id} - {itemCom.name}  <Link to={`${url}/${itemCom.id}`}>full comments</Link>
    </div>
  )
}

}
export default withRouter(Comment);