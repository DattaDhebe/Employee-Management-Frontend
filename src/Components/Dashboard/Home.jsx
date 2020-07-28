import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import axios from 'axios';

export default class Home extends React.Component {
  
  state = {
    employees: []
  }

  componentDidMount() {
    this.employee();
    this.deleteContact();
  }

  employee = () => {
    axios.get(`http://localhost:3000/emp`)
      .then(res => {
        const employees = res.data;
        this.setState({ employees });
      })
      .catch(
        err => console.log(err),
      );
  }

  deleteContact(id) {
    axios.delete(`http://localhost:3000/emp/${id}`)
      .then(res => {
        console.log(res);
        alert("Record Deleted Successfully..!")
        window.location.reload();
        console.log(res.data);
      })
      .catch(
        err => console.log(err),
      );
  }

  render() {
    
    return (
      <div>
    <div>
      <BootstrapButton href="./AddEmployee" variant="contained" color="primary" disableRipple className={useStyles.margin}>
        Add Employee
      </BootstrapButton>
        <BootstrapButton href="./" variant="contained" color="primary" style={{float:'right'}} disableRipple className={useStyles.margin}>
        Logout
      </BootstrapButton>
    </div>
    
    <TableContainer component={Paper}>
      <h1 style={{textAlign:'center'}}>Employee Management System</h1>
      <Table className={useStyles.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Employee Id</StyledTableCell>
            <StyledTableCell align="center">First Name</StyledTableCell>
            <StyledTableCell align="center">Last Name</StyledTableCell>
            <StyledTableCell align="center">Email</StyledTableCell>             
            <StyledTableCell align="center">Edit</StyledTableCell>
            <StyledTableCell align="center">Delete</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.employees.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row" align="center">
                {row.id} 
              </StyledTableCell>
              <StyledTableCell align="center">{row.first_name}</StyledTableCell>
              <StyledTableCell align="center">{row.last_name}</StyledTableCell>
              <StyledTableCell align="center">{row.email}</StyledTableCell>
              <StyledTableCell align="center">{
                  <Fab href="./Update" style={{color:'#fff', backgroundColor:'#3f51b5', }} aria-label="edit">
                  <EditIcon />
                  </Fab>
              }</StyledTableCell>
              <StyledTableCell align="center">{
                    <Button style={{color:'#fff', backgroundColor:'#3f51b5', textTransform:'none'}}
                    onClick={ () => this.deleteContact(row.id) }
                    variant="contained"
                    className={useStyles.button}
                    startIcon={<DeleteIcon />}
                    >
                      Delete
                    </Button> 
              }</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      </TableContainer>
      </div>
    )
  }
}

const BootstrapButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    marginTop:'2%',
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

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor:'#3f51b5',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);


const useStyles = makeStyles((theme) => ({
  display: 'flex',
  table: {
    
    minWidth: 700,
  },
  margin: {
    margin: theme.spacing(1),
  },
}));
  