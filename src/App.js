import React, {Component} from 'react';
import './App.css';
import AllPosts from './components/allPosts/AllPosts';
import AllUsers from './components/allUsers/AllUsers';
import AllComments from './components/allComments/AllComments';
import {Switch, Route, NavLink} from 'react-router-dom';

class App extends Component {

    render() {
        return (
                <div>
                    <ul>
                        <li>
                            <NavLink to={'/users'}>users</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/posts'}>posts</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/comments'}>comments</NavLink>
                        </li>
                    </ul>

                    <div className={'app-route'}>
                        <Switch>
                            <Route path={'/users'} component={AllUsers}/>
                            <Route path={'/posts'} component={AllPosts}/>
                            <Route path={'/comments'} component={AllComments}/>
                        </Switch>
                    </div>
                </div>
        )
    }

}

export default App;
