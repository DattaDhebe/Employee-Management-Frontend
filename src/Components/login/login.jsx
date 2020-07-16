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

//const emailRegex = RegExp(/^[a-zA-Z]+([._+-][0-9a-zA-Z]+)*@[0-9a-zA-Z]+.[a-zA-Z]{2,4}([.][a-zA-Z]{2,3})?$/);
//const passwordRegex = RegExp(/((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,})/);

// const formValid = formErrors => {
//   let valid = true;

//   Object.values(formErrors).forEach(value => {
//     value.length > 0 && (valid = false);
//   });

//   return valid;
// };

const SignIn = (props) => {

  // handleChange= (e)=> { 
  //   console.log(e.target.value);
  //   this.setState({[e.target.name]:e.target.value});  
  //   console.log(this.state);
  //   e.preventDefault();
  //   const { name, value } = e.target;
  //   let formErrors = this.state.formErrors;

  //   switch (name) {
  //     case "EmailId":
  //       formErrors.EmailId = emailRegex.test(value) ? "" : "Invalid Email Id";
  //       break;

  //     case "Password":
  //       formErrors.Password = passwordRegex.test(value) ?  "" : "Invalid Password";
  //       break;

  //     default:
  //       break;
  //   }

  //   this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  // };
  
  // login=(e) => {
  //   e.preventDefault();
  //   console.log(this.state);
  //   let requestData ={
  //     EmailId:this.state.EmailId,
  //     Password:this.state.Password
  //   }
    
    // service.login(requestData).then((json)=>{
    //   this.props.history.push("/dashboard");
    //   console.log("responce data==>",json);
    // if(json.data.status==='Success'){  
    // alert('Login Sucessfull !!');  
    // }   
      
    // }).catch((err)=>{
    //   console.log(err);
      
    // })

  //}

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar }>
         
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={props.getUser}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <br></br>
          <TextField
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
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Link href="http://localhost:3002/SignUp" variant="body2">
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
    marginTop: '30%',
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



export default SignIn;
