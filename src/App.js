
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignIn from './Components/login/login';
import SignUp from './Components/SignUp/SignUp';
import { AddEmployee } from './Components/Dashboard/AddEmployee';
import Home from './Components/Dashboard/Home';
import EmployeeApi from './Components/Dashboard/EmployeeApi';

import { Update } from './Components/Dashboard/Update'
//import axios from 'axios';


class App extends Component {

  render() {
    return (
      <div>       
      <Router>
          <Route exact path="/" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/home" component={Home} />
          <Route path="/api" component={EmployeeApi} />

          <Route path="/home/addEmployee" component={AddEmployee} />
          <Route path="/home/update" component={Update} />
      </Router>
      </div>
    );
  }
}
export default App;