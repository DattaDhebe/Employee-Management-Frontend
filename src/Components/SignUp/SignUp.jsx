import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import styled from 'styled-components';

const emailRegex = RegExp(/^[0-9a-zA-Z]+([._+-][0-9a-zA-Z]+)*@[0-9a-zA-Z]+.[a-zA-Z]{2,4}([.][a-zA-Z]{2,3})?$/);
const passwordRegex = RegExp(/((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,})/);

export default class SignUp extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      EmailId:null,
      Password:null,

      formErrors: {
        email: "",
        password: ""
      }
    }
  }
  handleChange= (e)=> { 
    console.log(e.target.value);
    this.setState({[e.target.name]:e.target.value});  
    console.log(this.state);
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = this.state.formErrors;

    switch (name) {
      case "EmailId":
        formErrors.email = emailRegex.test(value) ? "" : "Invalid Email Id";
        break;

      case "Password":
        formErrors.password = passwordRegex.test(value) ?  "" : "Invalid Password";
        break;

      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
 };

  login=(e) => {
    e.preventDefault();
    console.log(this.state);
    
  }

  state = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  };

  onFirstNameChange = e => {
    this.setState({
      first_name: e.target.value
    });
  };

  onLastNameChange = e => {
    this.setState({
      last_name: e.target.value
    });
  };

  onEmailChange = e => {
    this.setState({
      email: e.target.value
    });
  };

  onPasswordChange = e => {
    this.setState({
      password: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const data = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password,
    };
    axios
      .post("http://localhost:3000/user", data)
      .then(
        res => console.log(res),
        alert("User Registration Successful..!")
      )
      .catch(
        err => console.log(err),
      );
  };

  render()
  {
    const { formErrors } = this.state;
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={useStyles.paper}>
          
            <Div>
            <align-items><Avatar className={useStyles.avatar}>
              </Avatar></align-items>
              </Div>
            
          <Typography component="h1" variant="h5" align="center">
            Sign up
        </Typography>
          <form className={useStyles.form} onSubmit={this.handleSubmit} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  
                  onChange={this.onFirstNameChange}
                  autoComplete="fname"
                  name="first_name"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField onChange={this.onLastNameChange}
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="last_name"
                  autoComplete="lname"
                />
              </Grid>
              <br></br>
              <Grid item xs={12}>
                <TextField
                  className={formErrors.email.length > 0 ? "error" : null}
                  onChange={this.onEmailChange}
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
                <div className="error">{formErrors.email.length > 0 && (<span className="errorMessage">{formErrors.email}</span>)} 
                </div>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className={formErrors.password.length > 0 ? "error" : null}
                  onChange={this.onPasswordChange}
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <div className="error">{formErrors.password.length > 0 && (<span className="errorMessage" >{formErrors.password}</span>)}
                </div>
              </Grid>
              <Grid item xs={12} >
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="accept terms and conditions."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={useStyles.submit}
            >
              Sign Up
          </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="./" variant="body2">
                  Already have an account? Sign in
              </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    );
  }
}

const Div = styled.div`
  margin-top: 20%;
  align-item: center;

`;

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="#">
        Employee Management
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    alignItems: 'center',
    backgroundColor:'#3f51b5',
  },
  form: {
    width: '100%', 
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));