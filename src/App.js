
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignIn from './Components/login/login';
import SignUp from './Components/SignUp/SignUp';
import { AddEmployee } from './Components/Dashboard/AddEmployee';
import { Home } from './Components/Dashboard/Home';
import { Update } from './Components/Dashboard/Update'
import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3000/'
})


class App extends Component {

  constructor() {
    super();
    api.get('/').then(res => {
      console.log(res.data)
      this.setState({ courses: res.data })
    })
  }

  createCourse = async () => {
    let res = await api.post('/', {
      title: "Test",
      id: 4, author: 'test'
    })
    console.log(res)
  }
  render() {
    return (
      <div>
      <Router>
          <Route exact path="/" component={SignIn} />
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