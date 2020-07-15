
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignIn from './Components/login/login';
import SignUp from './Components/SignUp/SignUp';
import { AddEmployee } from './Components/Dashboard/AddEmployee';
import { Home } from './Components/Dashboard/Home';
import { Update } from './Components/Dashboard/Update'
import axios from 'axios';


class App extends Component {

  getUser = (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    //const password = e.target.elements.password.value;
    //axios.get(`my Rest api link"/${email}&${password}`),
      axios.get(`https://api.github.com/users/${email}`)
      .then((res) => { 
        console.log(res);
        })
    
    //console.log(email);
    //console.log(password);

  }

  render() {
    return (
      <div>
        <SignIn getUser={this.getUser} />
      <Router>
         
          <Route exact path="/SignUp" component={SignUp} />
          <Route exact path="/Home" component={Home} />
          <Route path="/dashboard/addEmployee" component={AddEmployee} />
          <Route path="/dashboard/update" component={Update} />
      </Router>
      </div>
    );
  }
}
export default App;