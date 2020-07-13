
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import SignIn from './Components/login/login';

class App extends Component {
  render() {
    return (
      <div>
      <Router>
      <Route exact path="/" component={SignIn} />
      </Router>
      </div>
    );
  }
}
export default App;