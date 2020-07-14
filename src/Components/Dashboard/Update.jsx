import React from "react";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "./Employee.scss";
import { Link } from "react-router-dom";

const nameRegex = RegExp(/^[A-Z]{1}[a-z]{2,}$/);
const emailRegex = RegExp(/^[0-9a-zA-Z]+([._+-][0-9a-zA-Z]+)*@[0-9a-zA-Z]+.[a-zA-Z]{2,4}([.][a-zA-Z]{2,3})?$/);
const phoneRegex = RegExp(/^([0-9]{2}[ ])?([1-9]{1}[0-9]{9})$/);

const formValid = formErrors => {
  let valid = true;

  Object.values(formErrors).forEach(value => {
    value.length > 0 && (valid = false);
  });
  return valid;
};


export class Update extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      FirstName:null,
      LastName:null,
      Gender:null,
      PhoneNumber:null,
      EmailId:null,
      City:null,
     
      formErrors: {
        FirstName:'',
        LastName:'',
        Gender:'',
        PhoneNumber:'',
        EmailId:'',
        City:''
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

      case "FirstName":
        formErrors.FirstName = nameRegex.test(value) ? "" : "Invalid First Name";
        break;

      case "LastName":
        formErrors.LastName = nameRegex.test(value) ? "" : "Invalid Last Name";
        break;  

      case "Gender":
        formErrors.Gender = nameRegex.test(value) ? "" : "Invalid Gender";
        break;  

      case "PhoneNumber":
        formErrors.PhoneNumber = phoneRegex.test(value) ? "" : "Invalid Phone Number";
        break; 

      case "City":
        formErrors.City = nameRegex.test(value) ? "" : "Invalid City";
        break; 

      case "EmailId":
        formErrors.EmailId = emailRegex.test(value) ? "" : "Invalid Email Id";
        break;

      default:
        break;
    }
        this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  }; 

 render() 
 {
  const { formErrors } = this.state;
    return (
      <form class="container">
      <p class="title" align="center">
             <Typography component="h1" variant="h5">
              Update Employee 
              </Typography>
              </p>
              <Grid container spacing={5}>
              <Grid item xs={6}>
              <TextField 
              className={formErrors.FirstName.length > 0 ? "error" : null}
              name="FirstName" 
              label="First Name" 
              variant="outlined" 
              onChange={this.handleChange} 
              value={this.state.FirstName} />
             <div className="error">{formErrors.FirstName.length > 0 && (<span className="errorMessage">{formErrors.FirstName}</span>)} 
             </div> 
              </Grid>

              <Grid item xs={6}>
              <TextField 
              className={formErrors.LastName.length > 0 ? "error" : null}
              name="LastName" 
              label="Last Name" 
              variant="outlined" 
              onChange={this.handleChange} 
              value={this.state.LastName} />    
              <div className="error">{formErrors.LastName.length > 0 && (<span className="errorMessage">{formErrors.LastName}</span>)} 
            </div>         
              </Grid>

              <Grid item xs={6}>
              <TextField 
              className={formErrors.Gender.length > 0 ? "error" : null}
              name="Gender" 
              label="Gender" 
              variant="outlined" 
              onChange={this.handleChange} 
              value={this.state.Gender} />
              <div className="error">{formErrors.Gender.length > 0 && (<span className="errorMessage">{formErrors.Gender}</span>)} 
            </div> 
              </Grid>

              <Grid item xs={6}>
              <TextField 
              className={formErrors.PhoneNumber.length > 0 ? "error" : null}
              name="PhoneNumber" 
              label="Phone Number" 
              variant="outlined" 
              onChange={this.handleChange} 
              value={this.state.PhoneNumber} />
              <div className="error">{formErrors.PhoneNumber.length > 0 && (<span className="errorMessage">{formErrors.PhoneNumber}</span>)} 
            </div>
              </Grid>

              <Grid item xs={6}>
              <TextField 
              className={formErrors.EmailId.length > 0 ? "error" : null}
              name="EmailId" 
              label="Email Id" 
              variant="outlined" 
              onChange={this.handleChange} 
              value={this.state.EmailId} />
              <div className="error">{formErrors.EmailId.length > 0 && (<span className="errorMessage">{formErrors.EmailId}</span>)} 
            </div> 
               </Grid>

              <Grid item xs={6}>
              <TextField 
               className={formErrors.City.length > 0 ? "error" : null}
               name="City" 
               label="City" 
               variant="outlined" 
               onChange={this.handleChange} 
               value={this.state.City} />
               <div className="error">{formErrors.City.length > 0 && (<span className="errorMessage">{formErrors.City}</span>)} 
            </div> 
              </Grid>

              <Grid item xs={12} className="footers">
                  <div className="btn">
              <Button variant="contained" color="primary" onClick={this.update}  className="submit"> Submit </Button>
              </div>
               </Grid>
               </Grid>
              </form>
    );
  }
}