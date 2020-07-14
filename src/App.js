
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import SignIn from './Components/login/login';
import SignUp from './Components/SignUp/SignUp';

class App extends Component {
  render() {
    return (
      <div>
      <Router>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/SignUp" component={SignUp} />
          <Route path="/dashboard/addEmployee" component={AddEmployee} />
          <Route exact path="/dashboard" component={GetAllEmployee} />
          <Route path="/dashboard/update" component={Update} />
      </Router>
      </div>
    );
  }
}
export default App;