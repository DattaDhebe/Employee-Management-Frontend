import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

const BootstrapButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#0063cc',
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
  avatar: {
    marginTop:'20%',
    margin: theme.spacing(15),
    color:'#000',
    backgroundColor:'#3f51b5',
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

  }
}));

export default class AddEmployee extends React.Component  {
  
  state = {
    first_name: '',
    last_name: '',
    email: '',
    mobile: '',
    designation: ''
  }

  handleChange = event => {
    this.setState({ first_name: event.target.first_name });
    this.setState({ last_name: event.target.last_name });
    this.setState({ email: event.target.email });
    this.setState({ mobile: event.target.mobile });
    this.setState({ designation: event.target.designation });
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      mobile: this.state.mobile,
      designation: this.state.designation
    };

    axios.post(`http://localhost:3000/employees`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
        console.log("Record Added Successfully..!");
      })
  }

  render() {
    return (
      <div>
      <Container className={useStyles.formLayout} component="main" maxWidth="xs" margin="25%">
      <BootstrapButton href="./Home" variant="contained" color="primary" style={{ float: 'left' }} disableRipple className={useStyles.margin}>
          Go Back
      </BootstrapButton>
      <BootstrapButton href="./" variant="contained" color="primary" style={{ float: 'right' }} disableRipple className={useStyles.margin}>
          Logout
      </BootstrapButton>
        <CssBaseline />
        <div className={useStyles.paper}>
          <Avatar className={useStyles.avatar}>
            <AssignmentIcon />
          </Avatar>
          <Typography component="h1" variant="h5" align="center">
            Employee Registration
        </Typography>
          <form className={useStyles.form} onSubmit={this.handleSubmit} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField onChange={this.handleChange}
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
                <TextField onChange={this.handleChange}
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
                <TextField onChange={this.handleChange}
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
                <TextField onChange={this.handleChange}
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
                <TextField onChange={this.handleChange}
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
              Register
          </Button>
          </form>
        </div>
        <Box mt={5}>
        </Box>
        </Container>
      </div>
    );
  }
}