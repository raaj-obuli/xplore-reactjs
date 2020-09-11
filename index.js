import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
        <Router>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/list">List</Link></li>
          </ul>

          <Switch>
            <Route path="/" exact={true}>
              <p>Home page</p>
            </Route>
            <Route path="/about">
              <p>About page</p>
            </Route>
            <Route path="/list">
              <p>List page</p>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
