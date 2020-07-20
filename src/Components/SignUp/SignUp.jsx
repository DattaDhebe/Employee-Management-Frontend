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

export default class SignUp extends React.Component {

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
  
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={useStyles.paper}>
        <align-items>
          <Avatar className={useStyles.avatar}>
            </Avatar>
            </align-items>
          <Typography component="h1" variant="h5" align="center">
            Sign up
        </Typography>
          <form className={useStyles.form} onSubmit={this.handleSubmit} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField onChange={this.onFirstNameChange}
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
                <TextField onChange={this.onEmailChange}
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField onChange={this.onPasswordChange}
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
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