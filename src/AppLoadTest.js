import React, { useState, useEffect } from 'react';
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
import Question from './Question';
import ThankYou from './ThankYou';
import AdminDashboard from './AdminDashboard';
import { BASE_URL1, INVALID_ANSWER, CORRECT_ANSWER, GIVE_UP, TOTAL_QUESTION, GIVE_UP_COUNT, BASE_URL0, BASE_URL2, SERVERS } from './Constants';
import { UNSOLVED } from './Constants';

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
  const [actualAnswer, setActualAnswer] = useState("");
  const [giveUpCount, setGiveUpCount] = useState(0);
  const [currQuestionNumber, setCurrentQuestionNumber] = useState(0);
  const [remainingQuestionSequence, setRemainingQuestionSequence] = useState({});
  const [answers, setAnswers] = useState({});
  const [isFnameInvalid, setIsFnameInvalid] = useState("false");
  const [fnameInvalidMessage, setFnameInvalidMessage] = useState("");



  

  
  const submitHandlerAnswerSubmissionAsync = async(questionNum, answer, gamename) => {
    let gameIdInt = parseInt(gamename);
    let URL;
    if(gameIdInt % SERVERS == 0){
        URL = BASE_URL0;
      }else if(gameIdInt % SERVERS == 1){
        URL = BASE_URL1;
      }else if(gameIdInt % SERVERS == 2){
        URL = BASE_URL2;
      }
    let args = {
      "questionNum":questionNum,
      "answer":answer,
      "gamename":gamename
    };
    await fetch(URL + '/submitAnswer',{
      method: "POST",
      dataType: "JSON",
      headers:{
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin" : URL + "/*",
        "Access-Control-Allow-Methods" : "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization, Access-Control-Allow-Origin",
        "Access-Control-Allow-Credentials": "true"
      },
      body: JSON.stringify(args)
    }).then((resp) => {
      return resp.json()
    }) 
    .then((data) => {
      // let respData = data["data"];
      // setQuestionNum(respData["nextQuestion"]); 
      // setHasError(data["hasError"]);
      // setMessage(data["message"]);
      // setGiveUpButton(respData["giveUp"])
      // setActualAnswer(respData["answer"]);

    })
    .catch((error) => {
      console.log(error, "catch the hoop")
    });
  };

  const submitHandlerAnswerSubmission = (e) => {
    //console.log(e.target["email"].value);
    //alert(e.target["email"].value);
    //alert(e.target["password"].value);
    // if(isInvalidParam){
    //   return;
    // }

    // Validate gamename and pin
    
    alert("hi");

    for(let i = 1 ; i < 200 ; i++){
        submitHandlerAnswerSubmissionAsync("1", "stench", i.toString());
    }
    alert("all request sent");
    //const data = response.json();
    //console.log(response);
    //const item = response.results;
    //alert(item);

  };

  const ayncsubmitHandlerGamePlay = async(gameId) => {
    let args = {
        "fname":"Pratik" + gameId,
        "lname":"",
        "gamename":gameId,
        "pin":"1234",
        "avatar":"src/sample"
      };
      let resp = {};

      let gameIdInt = parseInt(gameId);
      let URL;
      if(gameIdInt % SERVERS == 0){
        URL = BASE_URL0;
      }else if(gameIdInt % SERVERS == 1){
        URL = BASE_URL1;
      }else if(gameIdInt % SERVERS == 2){
        URL = BASE_URL2;
      }
      //https://tools.learningcontainer.com/sample-json-file.json
      //http://127.0.0.1:5000/generateGameName
      //'https://cors-anywhere.herokuapp.com/'
      await fetch(URL + '/getUserGamePlayData',{
        method: "POST",
        dataType: "JSON",
        headers:{
          "Content-Type": "application/json; charset=utf-8",
          "Access-Control-Allow-Origin" : URL + "/*",
          "Access-Control-Allow-Methods" : "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization, Access-Control-Allow-Origin",
          "Access-Control-Allow-Credentials": "true"
        },
        body: JSON.stringify(args)
      }).then((resp) => {
        return resp.json()
      }) 
      .then((data) => {
        
      })
      .catch((error) => {
        console.log(error, "catch the hoop")
      });
  }
  const submitHandlerGamePlay = (e) => {
    //console.log(e.target["email"].value);
    //alert(e.target["email"].value);
    //alert(e.target["password"].value);
    // if(isInvalidParam){
    //   return;
    // }

    // Validate gamename and pin

    alert("hi");

    for(let i = 1 ; i < 200 ; i++){
        ayncsubmitHandlerGamePlay(i.toString());
    }

    

  };
  

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Load Test Here
        </Typography>
        
        <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick = {submitHandlerGamePlay}
          >
            LOAD TEST USER GAMEPLAY DATA
          </Button>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick = {submitHandlerAnswerSubmission}
          >
            LOAD TEST ANSWER SUBMISSION
          </Button>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            // onClick = {submitHandlerLeaderboard}
          >
            LOAD TEST FETCH LEADERBOARD
          </Button>
          
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}