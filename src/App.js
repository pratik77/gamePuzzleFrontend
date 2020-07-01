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
import { BASE_URL, INVALID_ANSWER, CORRECT_ANSWER, GIVE_UP, TOTAL_QUESTION, GIVE_UP_COUNT } from './Constants';
import { UNSOLVED } from './Constants';
import Image from './img/1.jpg';

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

  const giveUpQuestionAsync = async() => {
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
    
    // let args = {
    //   "questionNum":questionNum,
    //   "gamename":gamename
    // };
    // let resp = {};
    // //https://tools.learningcontainer.com/sample-json-file.json
    // //http://127.0.0.1:5000/generateGameName
    // //'https://cors-anywhere.herokuapp.com/'
    // fetch(BASE_URL + '/giveUpQuestion',{
    //   method: "POST",
    //   dataType: "JSON",
    //   headers:{
    //     "Content-Type": "application/json; charset=utf-8",
    //     "Access-Control-Allow-Origin" : BASE_URL + "/*",
    //     "Access-Control-Allow-Methods" : "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    //     "Access-Control-Allow-Headers": "Content-Type, Authorization, Access-Control-Allow-Origin",
    //     "Access-Control-Allow-Credentials": "true"
    //   },
    //   body: JSON.stringify(args)
    // }).then((resp) => {
    //   return resp.json()
    // }) 
    // .then((data) => {
    //   let respData = data["data"];
    //   setQuestionNum(respData["nextQuestion"]); 
    //   setHasError(data["hasError"]);
    //   setMessage(data["message"]);
    //   setGiveUpButton(respData["giveUp"])

    // })
    // .catch((error) => {
    //   console.log(error, "catch the hoop")
    // });
    //const data = response.json();
    //console.log(response);
    //const item = response.results;
    //alert(item);

  };

  const submitCorrectAnswerAsync = async() => {
    let args = {
      "questionNum":questionNum,
      "answer":answer,
      "gamename":gamename
    };
    let resp = {};
    await fetch(BASE_URL + '/submitAnswer',{
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
      // setActualAnswer(respData["answer"]);

    })
    .catch((error) => {
      console.log(error, "catch the hoop")
    });
  };

  const submitWrongAnswerAsync = async() => {
    let args = {
      "questionNum":questionNum,
      "answer":answer,
      "gamename":gamename
    };
    let resp = {};
    await fetch(BASE_URL + '/submitAnswer',{
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
    if(answer != actualAnswer){
      setMessage(INVALID_ANSWER);
      setGiveUpCount(giveUpCount + 1);
      if(giveUpCount >= GIVE_UP_COUNT && questionNum < TOTAL_QUESTION){
        setGiveUpButton("true");
      }
      submitWrongAnswerAsync();
      // submitWrongAnswerAsync();
    }else{
      submitCorrectAnswerAsync();
      setMessage(CORRECT_ANSWER);
      setGiveUpCount(0);
      setGiveUpButton("false");
      setCurrentQuestionNumber(currQuestionNumber + 1);
      setQuestionNum(remainingQuestionSequence[currQuestionNumber + 1]); 
      setActualAnswer(answers[remainingQuestionSequence[currQuestionNumber + 1]]);
      setAnswer("");
    }
    setHasError("false");
    
    //https://tools.learningcontainer.com/sample-json-file.json
    //http://127.0.0.1:5000/generateGameName
    //'https://cors-anywhere.herokuapp.com/'
    // fetch(BASE_URL + '/submitAnswer',{
    //   method: "POST",
    //   dataType: "JSON",
    //   headers:{
    //     "Content-Type": "application/json; charset=utf-8",
    //     "Access-Control-Allow-Origin" : BASE_URL + "/*",
    //     "Access-Control-Allow-Methods" : "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    //     "Access-Control-Allow-Headers": "Content-Type, Authorization, Access-Control-Allow-Origin",
    //     "Access-Control-Allow-Credentials": "true"
    //   },
    //   body: JSON.stringify(args)
    // }).then((resp) => {
    //   return resp.json()
    // }) 
    // .then((data) => {
    //   let respData = data["data"];
    //   setQuestionNum(respData["nextQuestion"]); 
    //   setHasError(data["hasError"]);
    //   setMessage(data["message"]);
    //   setGiveUpButton(respData["giveUp"])

    // })
    // .catch((error) => {
    //   console.log(error, "catch the hoop")
    // });
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
      setRemainingQuestionSequence(respData["questionSequence"]);
      setAnswers(respData["answers"]);
      setQuestionNum(respData["questionSequence"][currQuestionNumber]); 
      setHasError(data["hasError"]);
      setMessage(data["message"]);
      setIsAdmin(respData["isAdmin"]);
      setActualAnswer(respData["answers"][respData["questionSequence"][currQuestionNumber]]);
      
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

  // useEffect(() =>{
  //   (async() => {
  //     let args = {
  //       "questionNum":questionNum,
  //       "answer":answer,
  //       "gamename":gamename
  //     };
  //     let resp = {};
  //     await fetch(BASE_URL + '/submitAnswer',{
  //       method: "POST",
  //       dataType: "JSON",
  //       headers:{
  //         "Content-Type": "application/json; charset=utf-8",
  //         "Access-Control-Allow-Origin" : BASE_URL + "/*",
  //         "Access-Control-Allow-Methods" : "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  //         "Access-Control-Allow-Headers": "Content-Type, Authorization, Access-Control-Allow-Origin",
  //         "Access-Control-Allow-Credentials": "true"
  //       },
  //       body: JSON.stringify(args)
  //     }).then((resp) => {
  //       return resp.json()
  //     }) 
  //     .then((data) => {
  //       let respData = data["data"];
  //       setQuestionNum(respData["nextQuestion"]); 
  //       setHasError(data["hasError"]);
  //       setMessage(data["message"]);
  //       setGiveUpButton(respData["giveUp"])
  
  //     })
  //     .catch((error) => {
  //       console.log(error, "catch the hoop")
  //     });
  //   })();
  // }, []);

  if(isAdmin == "true"){
    return <AdminDashboard onRefresh={handleOnRefresh} leaderboard={leaderboard} leaderboard2={leaderboard2} submissionDetails={submissionDetails} />;
  }

  

  if(questionNum != 0){
      return <Question onClick={handleAnswerSubmit} hasError={hasError} message={message} onChange={handleAnswerChange}
      giveUp={giveUpButton} onGiveUpClick={handleGiveUpClick} onGetBackToCurrentQuestion={handleGetBackToCurrentQuestion}
      onGoToNextQuestion={handleGoToNextQuestion} questionNum={questionNum} name={fname + " " + lname}/>;
    
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