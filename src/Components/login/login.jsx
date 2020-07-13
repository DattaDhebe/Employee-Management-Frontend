import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import "./login.scss";
import { Link } from '@material-ui/core';
import { Grid } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';


const emailRegex = RegExp(/^[0-9a-zA-Z]+([._+-][0-9a-zA-Z]+)*@[0-9a-zA-Z]+.[a-zA-Z]{2,4}([.][a-zA-Z]{2,3})?$/);
const passwordRegex = RegExp(/((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,})/);
const formValid = formErrors => {
  let valid = true;

  Object.values(formErrors).forEach(value => {
    value.length > 0 && (valid = false);
  });

  return valid;
};

export class Login extends React.Component {
    constructor(props) {
      super(props);
      this.state={
        EmailId:null,
        Password:null,

        formErrors: {
          EmailId: "",
          Password: ""
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
          formErrors.EmailId = emailRegex.test(value) ? "" : "Invalid Email Id";
          break;
  
        case "Password":
          formErrors.Password = passwordRegex.test(value) ?  "" : "Invalid Password";
          break;
  
        default:
          break;
      }
  
      this.setState({ formErrors, [name]: value }, () => console.log(this.state));
   };

    login=(e) => {
      e.preventDefault();
      console.log(this.state);
      let requestData ={
        EmailId:this.state.EmailId,
        Password:this.state.Password
      }
      
      // service.login(requestData).then((json)=>{
      //   this.props.history.push("/dashboard");
      //   console.log("responce data==>",json);
      // if(json.data.status==='Success'){  
      // alert('Login Sucessfull !!');  
      // }   
        
      // }).catch((err)=>{
      //   console.log(err);
        
      // })

    }
    render() 
    {
      const { formErrors } = this.state;
      return (
        <form class="logincontainer">
            <p class="title" align="center">
            <Typography component="h1" variant="h5">
             Login
            </Typography>
            </p>
              <div className="text">
               <TextField 
               className={formErrors.EmailId.length > 0 ? "error" : null}
               name="EmailId" 
               type="email" 
               label="Email Id" 
               variant="outlined" 
               value={this.state.EmailId}
               onChange={this.handleChange} 
                required/>
                <div className="error">{formErrors.EmailId.length > 0 && (<span className="errorMessage">{formErrors.EmailId}</span>)} 
                </div> 
                </div>

                <div className="text">
                <TextField 
                className={formErrors.Password.length > 0 ? "error" : null}
                name="Password" 
                type="password" 
                label="Password"
                 variant="outlined" 
                 onChange={this.handleChange} 
                 value={this.state.Password} required/>
                <div className="error">{formErrors.Password.length > 0 && (<span className="errorMessage" >{formErrors.Password}</span>)}
                </div>
                </div>
                
                <Grid item xs={12} className="footers">
                <div className="btn">
                 <Button 
                 variant="contained" 
                 color="primary" 
                 onClick={this.login} 
                 className="btn">
                 Login
                  </Button>
                  </div>
                   {/* <Alert severity="error">Please fill all the Details</Alert> */}
                  </Grid>

                  <div className="link">
                  <Link href="/register"  variant="body2">  {"Don't have an account? Register"}</Link>
                     </div>
        </form>
      );
    }
  }