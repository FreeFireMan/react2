import React, {Component} from 'react';
import CommentService from '../../service/commentService';
import {
    Switch,
    Route,
    withRouter
  } from 'react-router-dom';
import Comment from '../comments/Comment';
import FullComment from '../fullComment/FullComment';


class AllComments extends Component{
  state = {comments: []};
  commentService = new CommentService();

  async componentDidMount(){
      const comments = await this.commentService.comments();
      this.setState({comments});
  }

render(){
    let {comments} = this.state;
    let {match: {url}} = this.props;

  return(
    <div>
        {
            comments.map(value => <Comment itemCom={value} key={value.id}/>)
        }

        <div>
        <Switch>
            <Route path={url+'/:id'} render={(props) => {               
              let {match: {params: {id}}} = props;
              return <FullComment idComment={id} key={id}/>
            }}/>
        </Switch>
        </div>
      
    </div>
  )
}

}
export default withRouter(AllComments);