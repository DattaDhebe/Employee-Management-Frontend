import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { axios } from "axios";


export default class SignIn extends React.Component {

  state = {
    username: '',
    password: ''
  }

  handleChange = event => {
    this.setState({ name: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      username: this.state.username,
      password: this.state.password
    };

    axios.post(`http://localhost:3000/user`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={useStyles.paper} align="center">
      <Avatar style={{marginTop:'50%', display: 'flex', align: 'center', backgroundColor:'#3f51b5'}}/>
        <Typography component="h1" variant="h5" align="center">
          Sign in
        </Typography>
        <form className={useStyles.form} onSubmit={this.handleSubmit}>
            <TextField onChange={this.handleChange}
            align="left"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="username"
            autoComplete="email"
            autoFocus
          />
          <br></br>
            <TextField onChange={this.handleChange}
            align="left"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            />
            <div align="left">
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /></div>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={useStyles.submit}
          >
              Sign In
          </Button>
            <Link href="./SignUp" variant="body2" >
              {"Don't have an account? Sign Up"}
          </Link>       
        </form>
      </div>
      <Box mt={8}>
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
    align:'bottom',
  },
  avatar: {
    marginTop: '10%',
    backgroundColor:'#3f51b5',

  },
  form: {
    width: '100%', 
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
