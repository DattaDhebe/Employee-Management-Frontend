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

const emailRegex = RegExp(/^[0-9a-zA-Z]+([._+-][0-9a-zA-Z]+)*@[0-9a-zA-Z]+.[a-zA-Z]{2,4}([.][a-zA-Z]{2,3})?$/);
const passwordRegex = RegExp(/((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,})/);

export default class SignIn extends React.Component {
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

  render() { 
    const { formErrors } = this.state;
    return (
      <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={useStyles.paper} align="center">
      <Avatar style={{marginTop:'50%', display: 'flex', align: 'center', backgroundColor:'#3f51b5'}}/>
        <Typography component="h1" variant="h5" align="center">
          Sign in
        </Typography>
        <form className={useStyles.form} onSubmit={this.handleSubmit}>
            <TextField 
            className={formErrors.email.length > 0 ? "error" : null}
            onChange={this.handleChange}
            align="left"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="EmailId"
            autoComplete="email"
            autoFocus
            />
            <div className="error">{formErrors.email.length > 0 && (<span className="errorMessage">{formErrors.email}</span>)} 
            </div> 
          <br></br>
            <TextField 
            className={formErrors.password.length > 0 ? "error" : null}
            onChange={this.handleChange}
            align="left"
            variant="outlined"
            required
            fullWidth
            name="Password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            />
            <div className="error">{formErrors.password.length > 0 && (<span className="errorMessage" >{formErrors.password}</span>)}
            </div>
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
            href="./Home"
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
