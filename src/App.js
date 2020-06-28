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
import Question1 from './Question1';
import Question2 from './Question2';
import Question3 from './Question3';
import Question4 from './Question4';
import Question5 from './Question5';
import Question6 from './Question6';
import Question7 from './Question7';
import Question8 from './Question8';
import Question9 from './Question9';
import Question10 from './Question10';
import ThankYou from './ThankYou';
import AdminDashboard from './AdminDashboard';
import { BASE_URL } from './Constants'

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
  patternNumber:{
    pattern: "[0-9]{4}"
  },
}));



export default function SignIn() {
  const classes = useStyles();
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [gamename, setGamename] = useState('');
  const [pin, setPin] = useState('');
  const [questionNum, setQuestionNum] = useState('0');
  const [hasError, setHasError] = useState('false');
  const [message, setMessage] = useState('');
  const [answer, setAnswer] = useState('');
  const [giveUpButton, setGiveUpButton] = useState("false");
  const [isAdmin, setIsAdmin] = useState("false");
  const [leaderboard, setLeaderboard] = useState([]);
  const [leaderboard2, setLeaderboard2] = useState([]);
  const [submissionDetails, setSubmissionDetails] = useState([]);
  const [isGamenameInvalid, setIsGamenameInvalid] = useState("false");
  const [gamenameInvalidMsg, setGamenameInvalidMsg] = useState("");
  const [isPinInvalid, setIsPinInvalid] = useState("false");
  const [pinInvalidMsg, setPinInvalidMsg] = useState("");

  const isInvalidParam = () => {
    alert("hi");
    if(gamename.length != 4){
      setIsGamenameInvalid("true");
      setGamenameInvalidMsg("Game Id must be 5 digit number");
      return true;
    }
    if(pin.length != 4){
      setIsPinInvalid("true");
      setPinInvalidMsg("Pin must be 5 digit number");
      return true;
    }
    let i = 0;
    for(i = 0 ; i < gamename.length ; i++){
      if(gamename.charCodeAt(i) < 48 || gamename.charCodeAt(i) > 57){
        setIsGamenameInvalid("true");
        setGamenameInvalidMsg("Game Id must be 5 digit number");
        return true;
      }
    }
    for(i = 0 ; i < pin.length ; i++){
      if(pin.charCodeAt(i) < 48 || pin.charCodeAt(i) > 57){
        setIsPinInvalid("true");
        setPinInvalidMsg("Game Id must be 5 digit number");
        return true;
      }
    }
    return false;
  };

  const handleOnRefresh = (e) => {
    //console.log(e.target["email"].value);
    //alert(e.target["email"].value);
    //alert(e.target["password"].value);
    let resp = {};
    //https://tools.learningcontainer.com/sample-json-file.json
    //http://127.0.0.1:5000/generateGameName
    //'https://cors-anywhere.herokuapp.com/'
    fetch(BASE_URL + '/getSubmissionDetailsAndLeaderboard',{
      method: "GET",
      dataType: "JSON",
      headers:{
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin" : BASE_URL + "/*",
        "Access-Control-Allow-Methods" : "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization, Access-Control-Allow-Origin",
        "Access-Control-Allow-Credentials": "true"
      },
    }).then((resp) => {
      return resp.json()
    }) 
    .then((data) => {
      let respData = data["data"];
      setSubmissionDetails(respData["submissionDetails"]);
      setLeaderboard(respData["leaderboard"]);
      setLeaderboard2(respData["leaderboard2"]);

    })
    .catch((error) => {
      console.log(error, "catch the hoop")
    });
    //const data = response.json();
    //console.log(response);
    //const item = response.results;
    //alert(item);

  };

  const handleGiveUpClick = (e) => {
    //console.log(e.target["email"].value);
    //alert(e.target["email"].value);
    //alert(e.target["password"].value);
    let args = {
      "questionNum":questionNum,
      "gamename":gamename
    };
    let resp = {};
    //https://tools.learningcontainer.com/sample-json-file.json
    //http://127.0.0.1:5000/generateGameName
    //'https://cors-anywhere.herokuapp.com/'
    fetch(BASE_URL + '/giveUpQuestion',{
      method: "POST",
      dataType: "JSON",
      headers:{
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin" : BASE_URL + "/*",
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
      setHasError(data["hasError"]);
      setMessage(data["message"]);
      setGiveUpButton(respData["giveUp"])

    })
    .catch((error) => {
      console.log(error, "catch the hoop")
    });
    //const data = response.json();
    //console.log(response);
    //const item = response.results;
    //alert(item);

  };

  const handleAnswerSubmit = (e) => {
    //console.log(e.target["email"].value);
    //alert(e.target["email"].value);
    //alert(e.target["password"].value);
    let args = {
      "questionNum":questionNum,
      "answer":answer,
      "gamename":gamename
    };
    let resp = {};
    //https://tools.learningcontainer.com/sample-json-file.json
    //http://127.0.0.1:5000/generateGameName
    //'https://cors-anywhere.herokuapp.com/'
    fetch(BASE_URL + '/submitAnswer',{
      method: "POST",
      dataType: "JSON",
      headers:{
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin" : BASE_URL + "/*",
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
      setHasError(data["hasError"]);
      setMessage(data["message"]);
      setGiveUpButton(respData["giveUp"])

    })
    .catch((error) => {
      console.log(error, "catch the hoop")
    });
    //const data = response.json();
    //console.log(response);
    //const item = response.results;
    //alert(item);

  };
  
  const submitHandler = (e) => {
    //console.log(e.target["email"].value);
    //alert(e.target["email"].value);
    //alert(e.target["password"].value);
    // if(isInvalidParam){
    //   return;
    // }

    // Validate gamename and pin
    if(gamename.length != 4){
      setIsGamenameInvalid("true");
      setGamenameInvalidMsg("Game Id must be a 4 digit number");
      return;
    }
    if(pin.length != 4){
      setIsPinInvalid("true");
      setPinInvalidMsg("Pin must be a 4 digit number");
      return;
    }
    let i = 0;
    for(i = 0 ; i < gamename.length ; i++){
      if(gamename.charCodeAt(i) < 48 || gamename.charCodeAt(i) > 57){
        setIsGamenameInvalid("true");
        setGamenameInvalidMsg("Game Id must be a 5 digit number");
        return;
      }
    }
    for(i = 0 ; i < pin.length ; i++){
      if(pin.charCodeAt(i) < 48 || pin.charCodeAt(i) > 57){
        setIsPinInvalid("true");
        setPinInvalidMsg("Pin must be a 5 digit number");
        return;
      }
    }

    //Reset invalid messages
    setIsGamenameInvalid("");
    setGamenameInvalidMsg("");
    setIsPinInvalid("");
    setPinInvalidMsg("");
    //Rest Call
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
    fetch(BASE_URL + '/getUserGamePlayData',{
      method: "POST",
      dataType: "JSON",
      headers:{
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin" : BASE_URL + "/*",
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
      setHasError(data["hasError"]);
      setMessage(data["message"]);
      setIsAdmin(respData["isAdmin"]);

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
  const handleAnswerChange = e => {
    //alert(e.target.value);
    setAnswer(e.target.value);
  }
  if(isAdmin == "true"){
    return <AdminDashboard onRefresh={handleOnRefresh} leaderboard={leaderboard} leaderboard2={leaderboard2} submissionDetails={submissionDetails} />;
  }
  if(questionNum != 0){
    if(questionNum == 1)
      return <Question1 onClick={handleAnswerSubmit} hasError={hasError} message={message} onChange={handleAnswerChange}
      giveUp={giveUpButton} onGiveUpClick={handleGiveUpClick}/>;
    else if(questionNum == 2)
      return <Question2 onClick={handleAnswerSubmit} hasError={hasError} message={message} onChange={handleAnswerChange}
      giveUp={giveUpButton} onGiveUpClick={handleGiveUpClick}/>;
    else if(questionNum == 3)
      return <Question3 onClick={handleAnswerSubmit} hasError={hasError} message={message} onChange={handleAnswerChange}
      giveUp={giveUpButton} onGiveUpClick={handleGiveUpClick}/>;
    else if(questionNum == 4)
      return <Question4 onClick={handleAnswerSubmit} hasError={hasError} message={message} onChange={handleAnswerChange}
      giveUp={giveUpButton} onGiveUpClick={handleGiveUpClick}/>;
    else if(questionNum == 5)
      return <Question5 onClick={handleAnswerSubmit} hasError={hasError} message={message} onChange={handleAnswerChange}
      giveUp={giveUpButton} onGiveUpClick={handleGiveUpClick}/>;
    else if(questionNum == 6)
      return <Question6 onClick={handleAnswerSubmit} hasError={hasError} message={message} onChange={handleAnswerChange}
      giveUp={giveUpButton} onGiveUpClick={handleGiveUpClick}/>;
    else if(questionNum == 7)
      return <Question7 onClick={handleAnswerSubmit} hasError={hasError} message={message} onChange={handleAnswerChange}
      giveUp={giveUpButton} onGiveUpClick={handleGiveUpClick}/>;
    else if(questionNum == 8)
      return <Question8 onClick={handleAnswerSubmit} hasError={hasError} message={message} onChange={handleAnswerChange}
      giveUp={giveUpButton} onGiveUpClick={handleGiveUpClick}/>;
    else if(questionNum == 9)
      return <Question9 onClick={handleAnswerSubmit} hasError={hasError} message={message} onChange={handleAnswerChange}
      giveUp={giveUpButton} onGiveUpClick={handleGiveUpClick}/>;
    else if(questionNum == 10)
      return <Question10 onClick={handleAnswerSubmit} hasError={hasError} message={message} onChange={handleAnswerChange}
      giveUp={giveUpButton} onGiveUpClick={handleGiveUpClick}/>;
    else if(questionNum == 11)
      return <ThankYou onClick={handleAnswerSubmit} hasError={hasError} message={message} onChange={handleAnswerChange}
      giveUp={giveUpButton} onGiveUpClick={handleGiveUpClick}/>;
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
            className={classes.patternNumber}
            variant="outlined"
            margin="normal"
            fullWidth
            name="gamename"
            label="Game Name (Must be 4 digit number)"
            type="text"
            id="gamename"
            onChange={handleGamenameChange}
            autoComplete="gamename"
            required
            error={hasError === "true" || isGamenameInvalid == "true"}
            helperText={hasError === "true" ? message : isGamenameInvalid == "true" ? gamenameInvalidMsg : ''}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="pin"
            label="Pin (Must be 4 digit number)"
            type="password"
            id="pin"
            onChange={handlePinChange}
            autoComplete="pin"
            required
            error={isPinInvalid == "true"}
            helperText={isPinInvalid == "true" ? pinInvalidMsg : ''}
            
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
          
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}