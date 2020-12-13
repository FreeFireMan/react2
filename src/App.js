import React, { Component } from 'react';
import './App.css';
import AllPosts from './components/allPosts/AllPosts';
import AllUsers from './components/allUsers/AllUsers';
import AllComments from './components/allComments/AllComments';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';


class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <div>
            <Link to={'/users'}>users</Link>
          </div>
          <div>
            <Link to={'/posts'}>posts</Link>
          </div>
          <div>
            <Link to={'/comments'}>comments</Link>
          </div>

          <div className={'app-route'}>
            <Switch>
              <Route path={'/users'} render={() => {
                return <AllUsers />
              }}>

              </Route>

              <Route path={'/posts'} render={() => {
                return <AllPosts />;
              }}>
              </Route>

              <Route path={'/comments'} render={() => {
                return <AllComments />;
              }}>
              </Route>

            </Switch>
          </div>

        </div>
      </Router>
    )
  }

}
export default App;
