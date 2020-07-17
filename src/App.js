import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Question from './Question';
import AdminDashboard from './AdminDashboard';
import { BASE_URL1, INVALID_ANSWER, CORRECT_ANSWER, GIVE_UP, TOTAL_QUESTION, GIVE_UP_COUNT, BASE_URL0, BASE_URL2, SERVERS } from './Constants';
import { UNSOLVED } from './Constants';
import LinearProgress from '@material-ui/core/LinearProgress';

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
  linearProgress: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  }
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
  const [progressBarVal, setprogressBarVal] = useState("");
  const [disableLoginBtn, setDisableLoginBtn] = useState(false);
  const [disableAnswerSubmitBtn, setDisableAnswerSubmitBtn] = useState(false);
  const [answerSubmitProgressBarVal, setAnswerSubmitProgressBarVal] = useState("");

  const handleGetBackToCurrentQuestion = () => {
    setMessage(UNSOLVED);
    setAnswer("");
  }

  const handleGoToNextQuestion = () => {
    setMessage(UNSOLVED);
    setAnswer("");
  }

  const handleOnRefresh = (e) => {
    //console.log(e.target["email"].value);
    //alert(e.target["email"].value);
    //alert(e.target["password"].value);
    let resp = {};
    //https://tools.learningcontainer.com/sample-json-file.json
    //http://127.0.0.1:5000/generateGameName
    //'https://cors-anywhere.herokuapp.com/'
    let BASE_URL = getBaseUrl();
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

  const getBaseUrl = () => {
    let randNum = Math.floor(Math.random() * (999));
    
    if(randNum % SERVERS == 0){
      return BASE_URL0;
      
    }else if(randNum % SERVERS == 1){
      return BASE_URL1;
    }
    return BASE_URL2;
    
  }

  const giveUpQuestionAsync = async() => {
    let args = {
      "questionNum":questionNum,
      "gamename":gamename
    };
    let resp = {};
    let BASE_URL = getBaseUrl();
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
      // let respData = data["data"];
      // setQuestionNum(respData["nextQuestion"]); 
      // setHasError(data["hasError"]);
      // setMessage(data["message"]);
      // setGiveUpButton(respData["giveUp"])

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

    giveUpQuestionAsync();
    setMessage(GIVE_UP);
    setGiveUpCount(0);
    setGiveUpButton("false");
    setCurrentQuestionNumber(currQuestionNumber + 1);
    setQuestionNum(remainingQuestionSequence[currQuestionNumber + 1]); 
    setActualAnswer(answers[remainingQuestionSequence[currQuestionNumber + 1]]);
    setAnswer("");
    setHasError("false");
    
    

  };

  const submitCorrectAnswerAsync = () => {
    let args = {
      "questionNum":questionNum,
      "answer":answer,
      "gamename":gamename
    };
    let resp = {};
    
    let BASE_URL = getBaseUrl();
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
      let message = data["message"];
      if(message === CORRECT_ANSWER){
        setQuestionNum(respData["nextQuestion"]); 
        setMessage(CORRECT_ANSWER);
        setGiveUpCount(0);
        setGiveUpButton("false");
        setCurrentQuestionNumber(currQuestionNumber + 1);
        setQuestionNum(remainingQuestionSequence[currQuestionNumber + 1]); 
        setActualAnswer(answers[remainingQuestionSequence[currQuestionNumber + 1]]);
        setAnswer("");
      }else{
        alert("Error processing your submission, please try again or contact the system admin.");
      }
      

    })
    .catch((error) => {
      alert("Internal server error, please try again or contact the system admin.");
      console.log(error, "catch the hoop")
    });
  };

  const submitWrongAnswerAsync = () => {
    let args = {
      "questionNum":questionNum,
      "answer":answer,
      "gamename":gamename
    };
    let resp = {};
    let BASE_URL = getBaseUrl();
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
      // let respData = data["data"];
      // setQuestionNum(respData["nextQuestion"]); 
      // setHasError(data["hasError"]);
      // setMessage(data["message"]);
      // setGiveUpButton(respData["giveUp"])
      setMessage(INVALID_ANSWER);

    })
    .catch((error) => {
      console.log(error, "catch the hoop");
    });
  };

  const handleAnswerSubmit = (e) => {
    //console.log(e.target["email"].value);
    //alert(e.target["email"].value);
    //alert(e.target["password"].value);
    // let args = {
    //   "questionNum":questionNum,
    //   "answer":answer,
    //   "gamename":gamename
    // };
    // let resp = {};
    if(answer == ""){
      setHasError("true");
      setMessage("Answer cannot be blank.");
      return;
    }
    if(answer.toLowerCase() != actualAnswer.toLowerCase()){
      
      //setGiveUpCount(giveUpCount + 1);
      // if(giveUpCount >= GIVE_UP_COUNT && questionNum < TOTAL_QUESTION){
      //   setGiveUpButton("true");
      // }
      submitWrongAnswerAsync();
      // submitWrongAnswerAsync();
    }else{
      let progressBarVal = <div className={classes.linearProgress}><LinearProgress color="secondary" /></div>;
      submitCorrectAnswerAsync();
      
    }
    //setDisableAnswerSubmitBtn(false);
    setHasError("false");

  };
  
  const submitHandler = (e) => {
    //console.log(e.target["email"].value);
    //alert(e.target["email"].value);
    //alert(e.target["password"].value);
    // if(isInvalidParam){
    //   return;
    // }

    // Validate gamename and pin
    
    if(fname == ""){
      setIsFnameInvalid("true");
      setFnameInvalidMessage("Name cannot be blank.");
      return;
    }
    if(gamename.length > 6){
      setIsGamenameInvalid("true");
      setGamenameInvalidMsg("Employee Id must be a 6 digit number");
      return;
    }
    if(gamename.length == 0){
      setIsGamenameInvalid("true");
      setGamenameInvalidMsg("Employee Id cannot be blank.");
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
        setGamenameInvalidMsg("Game Id must be a 6 digit number");
        return;
      }
    }
    for(i = 0 ; i < pin.length ; i++){
      if(pin.charCodeAt(i) < 48 || pin.charCodeAt(i) > 57){
        setIsPinInvalid("true");
        setPinInvalidMsg("Pin must be a 4 digit number");
        return;
      }
    }
    setDisableLoginBtn(true);
    let progressBarVal = <div className={classes.linearProgress}><LinearProgress color="secondary" /></div>;
    setprogressBarVal(progressBarVal);
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
    let BASE_URL = getBaseUrl();
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
      let hasError = data["hasError"];
      if(hasError === "true"){
        setRemainingQuestionSequence(respData["questionSequence"]);
        setAnswers(respData["answers"]);
        setQuestionNum(respData["questionSequence"][currQuestionNumber]); 
        setHasError(data["hasError"]);
        setMessage(data["message"]);
        setIsAdmin(respData["isAdmin"]);
        setActualAnswer(respData["answers"][respData["questionSequence"][currQuestionNumber]]);
        setDisableLoginBtn(false);
        setprogressBarVal("");
      }else{
        setRemainingQuestionSequence(respData["questionSequence"]);
        setAnswers(respData["answers"]);
        setQuestionNum(respData["questionSequence"][currQuestionNumber]); 
        setHasError(data["hasError"]);
        setMessage(data["message"]);
        setIsAdmin(respData["isAdmin"]);
        setActualAnswer(respData["answers"][respData["questionSequence"][currQuestionNumber]]);
      }
      
    })
    .catch((error) => {
      console.log(error, "catch the hoop")
      alert("Some error occured while processing your request. Please try again later. Inconvenience caused is deeply regretted.");
      setDisableLoginBtn(false);
      setprogressBarVal("");
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
      return <Question onClick={handleAnswerSubmit} hasError={hasError} message={message} onChange={handleAnswerChange}
      giveUp={giveUpButton} onGiveUpClick={handleGiveUpClick} onGetBackToCurrentQuestion={handleGetBackToCurrentQuestion}
      onGoToNextQuestion={handleGoToNextQuestion} questionNum={questionNum} name={fname + " " + lname} disableAnswerSubmitBtn={disableAnswerSubmitBtn} 
      answerSubmitProgressBarVal={answerSubmitProgressBarVal}/>;
    
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
            error={isFnameInvalid == "true"}
            helperText={isFnameInvalid == "true" ? fnameInvalidMessage : ''}
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
            label="Employee Id (Max 6 digit number)"
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
            disabled={disableLoginBtn}
          >
            Let's Play
          </Button>
          {progressBarVal}
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}