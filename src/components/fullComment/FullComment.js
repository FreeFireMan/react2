import React, { Component } from 'react';
import CommentService from '../../service/commentService';

class FullComment extends Component {
    state = { comment: null }
    commentService = new CommentService();

    async componentDidMount() {
        const { idComment } = this.props;       
        const comment = await this.commentService.comment(idComment);
        this.setState({comment});       
    }

    render() {
        let {comment} = this.state;        
        return (
            <div>
                <hr/>
                {comment && <div>{comment.id} - {comment.name} <br/> {comment.body}</div>}
            </div>
        )
    }

}
export default FullComment;