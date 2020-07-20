import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import styled from 'styled-components';

export default class Update extends React.Component  {
  
  state = {
    first_name: "",
    last_name: "",
    email: "",
    mobile: "",
    designation: ""
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

  onMobileChange = e => {
    this.setState({
      mobile: e.target.value
    });
  };

  onDesignationChange = e => {
    this.setState({
      designation: e.target.value
    });
  };
  
  handleSubmit = e => {
    e.preventDefault();
    const data = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      mobile: this.state.mobile,
      designation: this.state.designation
    };
    axios
      .post("http://localhost:3000/emp/", data)
      .then(
        res => console.log(res),
        alert("Record Added Successfully..!")
      )
      .catch(
        err => console.log(err),
      );
  };


  render() {
    return (
      <div>
        <Div></Div>
      <Container className={useStyles.formLayout} component="main" maxWidth="xs" margin="25%">
        <BootstrapButton href="./Home" variant="contained" color="primary" style={{ float: 'left' }} disableRipple className={useStyles.margin}>
          Home
      </BootstrapButton>
      <BootstrapButton href="./" variant="contained" color="primary" style={{ float: 'right' }} disableRipple className={useStyles.margin}>
            Logout
      </BootstrapButton>  
        <CssBaseline />
          <Typography component="h1" variant="h5" align="center">
            Employee
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
                  id="last_name"
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
              <br></br>
              <Grid item xs={12}>
                <TextField onChange={this.onMobileChange}
                  variant="outlined"
                  required
                  fullWidth
                  id="mobile"
                  label="Contact Number"
                  name="mobile"
                  autoComplete="mobile"
                />
              </Grid>
              <br></br>
              <Grid item xs={12}>
                <TextField onChange={this.onDesignationChange}
                  variant="outlined"
                  required
                  fullWidth
                  id="designation"
                  label="Designation"
                  name="designation"
                  autoComplete="designation"
                />
              </Grid>
            </Grid>
            <br></br>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={useStyles.submit}
            >
              update
          </Button>
          </form>
        <Box mt={5}>
        </Box>
        </Container>
        </div>
    );
  }
}

const Div = styled.div`
  margin-top: 20%;
  align-item: center;

`;

const BootstrapButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor:'#3f51b5',
    borderColor: '#0063cc',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
})(Button);

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(25),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', 
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  blue: {
    color: '#fff',
    backgroundColor: '#3f51b5',
  },
  formLayout: {
    marginTop: '15%',

  },
}));