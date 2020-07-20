
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignIn from './Components/login/login';
import SignUp from './Components/SignUp/SignUp';
import Home from './Components/Dashboard/Home';
import AddEmployee from './Components/Dashboard/AddEmployee';
import Update from './Components/Dashboard/Update';


class App extends Component {

  render() {
    return (
      <div>       
      <Router>
          <Route exact path="/" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/home" component={Home} />
          <Route path="/AddEmployee" component={AddEmployee} />
          <Route path="/update" component={Update} />
      </Router>
      </div>
    );
  }
}
export default App;