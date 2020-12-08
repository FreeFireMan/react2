import React, { Component } from 'react';
import Post from '../post/Post';


class AllPosts extends Component {
    state = { posts: [], choseOne: null };
    
    onSelectedOne = (id) => {
        let {posts }= this.state;
        this.setState({choseOne: posts.find(value => (value.id === id))});
    }

    render() {
        let {posts, choseOne} = this.state;
        return (
            <div>
                {
                    posts.map(value => (<Post item={value} key={value.id} onSelectedOne = {this.onSelectedOne}/>))
                }
                {choseOne && (<h2>{choseOne.id} - {choseOne.title}</h2>)}
            </div>
        )
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(value => value.json())
        .then(value => {
            this.setState({posts: value});
        });
    }

}
export default AllPosts;
