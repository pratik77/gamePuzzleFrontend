import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios'
import { BASE_URL1 } from './Constants'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Sahoo & Co.
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
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));



export default function SignIn() {
  const classes = useStyles();
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [gamename, setGamename] = useState('');
  const [pin, setPin] = useState('');
  const [questionNum, setQuestionNum] = useState('0');
  
  const submitHandler = (e) => {
    //console.log(e.target["email"].value);
    //alert(e.target["email"].value);
    //alert(e.target["password"].value);
    let args = {
      "fname":fname,
      "lname":lname,
      "gamename":gamename,
      "pin":pin
    };
    let resp = {};
    //https://tools.learningcontainer.com/sample-json-file.json
    //http://127.0.0.1:5000/generateGameName
    //'https://cors-anywhere.herokuapp.com/'
    fetch(BASE_URL1 + '/getUserGamePlayData',{
      method: "POST",
      dataType: "JSON",
      headers:{
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin" : BASE_URL1 + "/*",
        "Access-Control-Allow-Methods" : "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization, Access-Control-Allow-Origin",
        "Access-Control-Allow-Credentials": "true"
      },
      body: JSON.stringify(args)
    }).then((resp) => {
      return resp.json()
    }) 
    .then((data) => {
      let respData = data["data"];
      setQuestionNum(respData["nextQuestion"]);                    
    })
    .catch((error) => {
      console.log(error, "catch the hoop")
    });
    //const data = response.json();
    //console.log(response);
    //const item = response.results;
    //alert(item);

  };

  const handleFnameChange = e => {
    //alert(e.target.value);
    setFname(e.target.value);
  }

  const handleLnameChange = e => {
    //alert(e.target.value);
    setLname(e.target.value);
  }

  const handleGamenameChange = e => {
    //alert(e.target.value);
    setGamename(e.target.value);
  }
  const handlePinChange = e => {
    //alert(e.target.value);
    setPin(e.target.value);
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Hi there!, Tell me who you are
        </Typography>
        {questionNum}
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="fname"
            label="First Name"
            name="fname"
            autoComplete="fname"
            onChange={handleFnameChange}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="lname"
            label="Last Name"
            type="text"
            id="lname"
            onChange={handleLnameChange}
            autoComplete="lname"
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="gamename"
            label="Game Name"
            type="text"
            id="gamename"
            onChange={handleGamenameChange}
            autoComplete="gamename"
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="pin"
            label="Pin"
            type="password"
            id="gamename"
            onChange={handlePinChange}
            autoComplete="pin"
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick = {submitHandler}
          >
            Let's Play
          </Button>
          
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}