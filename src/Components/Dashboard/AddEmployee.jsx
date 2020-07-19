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

// const ColorButton = withStyles((theme) => ({
//   root: {
//     color: theme.palette.getContrastText(purple[500]),
//     backgroundColor: purple[500],
//     '&:hover': {
//       backgroundColor: purple[700],
//     },
//   },
// }))(Button);

// const useStyles = makeStyles((theme) => ({
//   margin: {
//     margin: theme.spacing(1),
//   },
// }));

// const theme = createMuiTheme({
//   palette: {
//     primary: green,
//   },
// });


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(25),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
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
}));

export default function AddEmployee() {
  const classes = useStyles();

  return (
    
    <Container component="main" maxWidth="xs">
      <BootstrapButton variant="contained" color="primary" style={{float:'right'}} disableRipple className={classes.margin}>
        Logout
      </BootstrapButton>
      <CssBaseline />
      <div className={classes.paper}>
      <Avatar className={classes.blue}>
        <AssignmentIcon />
      </Avatar>
        <Typography component="h1" variant="h5">
          Employee Registration
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
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
              <TextField
                variant="outlined"
                required
                fullWidth
                id="last_name"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <br></br>
            <Grid item xs={12}>
              <TextField
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
              <TextField
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
              <TextField
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
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Register
          </Button>
        </form>
      </div>
      <Box mt={5}>
      </Box>
    </Container>
  );
}