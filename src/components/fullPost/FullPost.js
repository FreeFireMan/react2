import React, { Component } from 'react';
import PostService from '../../service/postService';

class FullPost extends Component {

    postService = new PostService();
    state = { post: null };

   async componentDidMount() {
        const { idPost } = this.props;
        const post = await this.postService.post(idPost);
        this.setState({ post });
        
    }

    render() {
        let { post } = this.state;

        return (
            <div>
                <hr/>
                {post && <p>{post.id} - {post.title} <br/>{post.body}</p>}
            </div>
        )
    }

}
export default FullPost;