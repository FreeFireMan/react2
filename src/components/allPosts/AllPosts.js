import React, { Component } from 'react';
import PostService from '../../service/postService';
import Post from '../post/Post';
import {
    Switch,
    Route,
    withRouter
} from 'react-router-dom';
import FullPost from '../fullPost/FullPost';



class AllPosts extends Component {
    postsService = new PostService();
    state = { posts: [] };

    async componentDidMount() {
        let posts = await this.postsService.posts();
        this.setState({ posts });
    }

    render() {
        let { posts } = this.state;
        let { match: { url } } = this.props;

        return (
            <div>
                {
                    posts.map(value => (<Post item={value} key={value.id} />))
                }

                <div>

                    <Switch>
                        <Route path={`${url}/:id`} render={(props) => {                           
                            const { match: { params: { id } } } = props;                            
                            return <FullPost idPost={id} key={id} />
                        }} />
                    </Switch>
                </div>

            </div>
        )
    }


}
export default withRouter(AllPosts);
