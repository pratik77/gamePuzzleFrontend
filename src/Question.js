import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import SubmissionSection from './SubmissionSection';
import Image from './img/blur.jpg';
import Image1 from './img/11.JPG';
import Image2 from './img/2.JPG'; 
import { CORRECT_ANSWER, GIVE_UP } from './Constants'
import { INVALID_ANSWER } from './Constants'
import WrongAnswerConfirmationPage from './WrongAnswerConfirmationPage'
import CorrectAnswerConfirmationPage from './CorrectAnswerConfirmationPage'
import GiveUpConfirmationPage from './GiveUpConfirmationPage'
import Image3 from './img/3.JPG';
import Image4 from './img/4.JPG';
import Image5 from './img/5.JPG';
import Image6 from './img/6.JPG';
import Image7 from './img/7.JPG';
import Image8 from './img/8.JPG';
import Image9 from './img/9.JPG';
import Image10 from './img/10.JPG';
// import Image11 from './img/11.jpeg';
// import Image12 from './img/12.jpeg';
import ThankYou from './ThankYou';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import ImageBrainCrusher from './img/brainCrusher.jpeg'
import Container from '@material-ui/core/Container';
import { sizing } from '@material-ui/system';
import { BASE_URL1, TOTAL_QUESTION, GIVE_UP_COUNT, BASE_URL0, BASE_URL2, SERVERS, LEADERBOARD, HOME } from './Constants';
import UserAppBar from './UserAppBar';
import UserLeaderboard from './UserLeaderboardPage';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme, props) => ({
  root: {
    height: '100vh',
    

  },
  image: {
    backgroundImage: `url(${Image1})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '100%'
    
  },
  paper: {
    margin: theme.spacing(30, 4, 30, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  papercenter: {
    margin: theme.spacing(30, 4, 30, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  paperleft: {
    margin: theme.spacing(10, 4, 30, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
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
  toolbar: theme.mixins.toolbar,
  rightSide:{
    display: 'flex',
    marginLeft: 'auto'
  },
  panelColor: {
      backgroundColor : '#F5F5F5'
  }
}));

const useStylesImage1 = makeStyles((theme, sizing, props) => ({
  image: {
    backgroundImage: `url(${Image1}), url(${Image})`,
    backgroundRepeat: 'no-repeat, no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'contain, cover',
    backgroundPosition: 'center, center',
    width: '100%',
      height: '100%',
      backgroundBlendMode: 'auto, luminosity'
  },
  
}));

const useStylesImage2 = makeStyles((theme, props) => ({
    image: {
      backgroundImage: `url(${Image2}), url(${Image})`,
      backgroundRepeat: 'no-repeat, repeat',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
      backgroundSize: 'contain',
      backgroundPosition: 'center, center',
      width: '100%',
      height: '100%'
      
    },
    
  }));

  const useStylesImage3 = makeStyles((theme, props) => ({
    image: {
      backgroundImage: `url(${Image3}), url(${Image})`,
      backgroundRepeat: 'no-repeat, repeat',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
      backgroundSize: 'contain',
      backgroundPosition: 'center, center',
      width: '100%',
        height: '100%',
    },
    
  }));

  const useStylesImage4 = makeStyles((theme, props) => ({
    image: {
      backgroundImage: `url(${Image4}), url(${Image})`,
      backgroundRepeat: 'no-repeat, repeat',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
      backgroundSize: 'contain',
      backgroundPosition: 'center, center',
      width: '100%',
        height: '100%',
    },
    
  }));

  const useStylesImage5 = makeStyles((theme, props) => ({
    image: {
      backgroundImage: `url(${Image5}), url(${Image})`,
      backgroundRepeat: 'no-repeat, repeat',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
      backgroundSize: 'contain',
      backgroundPosition: 'center, center',
      width: '100%',
        height: '100%',
    },
    
  }));

  const useStylesImage6 = makeStyles((theme, props) => ({
    image: {
      backgroundImage: `url(${Image6}), url(${Image})`,
      backgroundRepeat: 'no-repeat, repeat',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
      backgroundSize: 'contain',
      backgroundPosition: 'center, center',
      width: '100%',
        height: '100%',
    },
    
  }));

  const useStylesImage7 = makeStyles((theme, props) => ({
    image: {
      backgroundImage: `url(${Image7}), url(${Image})`,
      backgroundRepeat: 'no-repeat, repeat',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
      backgroundSize: 'contain',
      backgroundPosition: 'center, center',
      width: '100%',
        height: '100%',
    },
    
  }));

  const useStylesImage8 = makeStyles((theme, props) => ({
    image: {
      backgroundImage: `url(${Image8}), url(${Image})`,
      backgroundRepeat: 'no-repeat, repeat',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
      backgroundSize: 'contain',
      backgroundPosition: 'center, center',
      width: '100%',
        height: '100%',
    },
    
  }));

  const useStylesImage9 = makeStyles((theme, props) => ({
    image: {
      backgroundImage: `url(${Image9}), url(${Image})`,
      backgroundRepeat: 'no-repeat, repeat',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
      backgroundSize: 'contain',
      backgroundPosition: 'center, center',
      width: '100%',
        height: '100%',
    },
    
  }));

  const useStylesImage10 = makeStyles((theme, props) => ({
    image: {
      backgroundImage: `url(${Image10}), url(${Image})`,
      backgroundRepeat: 'no-repeat, repeat',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
      backgroundSize: 'contain',
      backgroundPosition: 'center, center',
      width: '100%',
        height: '100%',
    },
    
  }));

  // const useStylesImage11 = makeStyles((theme, props) => ({
  //   image: {
  //     backgroundImage: `url(${Image11}), url(${Image})`,
  //     backgroundRepeat: 'no-repeat, repeat',
  //     backgroundColor:
  //       theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
  //     backgroundSize: 'contain',
  //     backgroundPosition: 'center, center',
  //     width: '100%',
  //       height: '100%',
  //   },
    
  // }));

  // const useStylesImage12 = makeStyles((theme, props) => ({
  //   image: {
  //     backgroundImage: `url(${Image12}), url(${Image})`,
  //     backgroundRepeat: 'no-repeat, repeat',
  //     backgroundColor:
  //       theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
  //     backgroundSize: 'contain',
  //     backgroundPosition: 'center, center',
  //     width: '100%',
  //       height: '100%',
  //   },
    
  // }));



function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

export default function Question(props) {
  const classes = useStyles();
  const [leaderboard2, setLeaderboard2] = React.useState([]);
  const [pageNameBtn, setPageNameBtn] = React.useState(LEADERBOARD);
  const classImage1 = useStylesImage1();
  const classImage2 = useStylesImage2();
  const classImage3 = useStylesImage3();
  const classImage4 = useStylesImage4();
  const classImage5 = useStylesImage5();
  const classImage6 = useStylesImage6();
  const classImage7 = useStylesImage7();
  const classImage8 = useStylesImage8();
  const classImage9 = useStylesImage9();
  const classImage10 = useStylesImage10();
  // const classImage11 = useStylesImage11();
  // const classImage12 = useStylesImage12();

  const getBaseUrl = () => {
    let randNum = Math.floor(Math.random() * (999));
    
    if(randNum % SERVERS == 0){
      return BASE_URL0;
      
    }else if(randNum % SERVERS == 1){
      return BASE_URL1;
    }
    return BASE_URL2;
    
  }

  const getQuestionGrid = () => {
    let questionGrid;
    if(props.questionNum == 1)
     questionGrid = <Grid item xs={12} sm={12} md={7} lg={7} className={classImage1.image} />;
    else if(props.questionNum == 2)
      questionGrid = <Grid item xs={12} sm={12} md={7} lg={7} className={classImage2.image} /> ;
    else if(props.questionNum == 3)
      questionGrid = <Grid item xs={false} sm={4} md={7} className={classImage3.image} />;
    else if(props.questionNum == 4)
      questionGrid = <Grid item xs={false} sm={4} md={7} className={classImage4.image} />;   
    else if(props.questionNum == 5)
      questionGrid = <Grid item xs={false} sm={4} md={7} className={classImage5.image} />;
    else if(props.questionNum == 6)
      questionGrid = <Grid item xs={false} sm={4} md={7} className={classImage6.image} />;
    else if(props.questionNum == 7)
      questionGrid = <Grid item xs={false} sm={4} md={7} className={classImage7.image} />;
    else if(props.questionNum == 8)
      questionGrid = <Grid item xs={false} sm={4} md={7} className={classImage8.image} />;
    else if(props.questionNum == 9)
      questionGrid = <Grid item xs={false} sm={4} md={7} className={classImage9.image} />;
    else if(props.questionNum == 10)
      questionGrid = <Grid item xs={false} sm={4} md={7} className={classImage10.image} />;
    // else if(props.questionNum == 11)
    //   questionGrid = <Grid item xs={false} sm={4} md={7} className={classImage11.image} />;
    // else if(props.questionNum == 12)
    //   questionGrid = <Grid item xs={false} sm={4} md={7} className={classImage12.image} />; 

    return questionGrid;
  }

  const getLeaderboard = ()=> {
    let resp = {};
    //https://tools.learningcontainer.com/sample-json-file.json
    //http://127.0.0.1:5000/generateGameName
    //'https://cors-anywhere.herokuapp.com/'
    let BASE_URL = getBaseUrl();
    fetch(BASE_URL + '/getLeaderboard',{
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
      setLeaderboard2(respData["leaderboard2"]);
      setPageNameBtn(HOME);
    })
    .catch((error) => {
      alert("Error fetching leaderboard at thi moment, please try again later.");
      console.log(error, "catch the hoop")
    });
  };

  const handlePageNameBtnClick = (e) => {
    //console.log(e.target["email"].value);
    //alert(e.target["email"].value);
    //alert(e.target["password"].value);
    if(pageNameBtn !== LEADERBOARD){
      setPageNameBtn(LEADERBOARD);
    }else{
      getLeaderboard();
    }
    
    //const data = response.json();
    //console.log(response);
    //const item = response.results;
    //alert(item);

  };

  //If not home page then show leaderboard
  

  let rightSidePanel;

  let questionGrid;
  let lg, md, sm , xs;
  let userAppBar;
  
  if(pageNameBtn !== LEADERBOARD){
    xs = 12; sm = 12; md = 12; lg = 12;

    rightSidePanel = <UserLeaderboard name={props.name} leaderboard2={leaderboard2} handlePageNameBtnClick={handlePageNameBtnClick} pageNameBtn={pageNameBtn}/>;
  }
  else if(props.questionNum == TOTAL_QUESTION + 1){
    xs = 12; sm = 12; md = 12; lg = 12;
    rightSidePanel = <ThankYou />;
  }
  else if(props.message == INVALID_ANSWER){
    xs = 12; sm = 12; md = 5; lg = 5;
    rightSidePanel = <WrongAnswerConfirmationPage onGetBackToCurrentQuestion={props.onGetBackToCurrentQuestion}/>;
    questionGrid = getQuestionGrid();
  }
  else if(props.message == CORRECT_ANSWER){
    return rightSidePanel =  <CorrectAnswerConfirmationPage onGoToNextQuestion={props.onGoToNextQuestion}/>
  }
  else if(props.message == GIVE_UP){
    return rightSidePanel =  <GiveUpConfirmationPage onGoToNextQuestion={props.onGoToNextQuestion}/>
  }
  else{
    xs = 12; sm = 12; md = 5; lg = 5;
    rightSidePanel = <SubmissionSection giveUp={props.giveUp} onClick={props.onClick} hasError={props.hasError}
     message={props.message} onChange={props.onChange} onGiveUpClick={props.onGiveUpClick}  disableAnswerSubmitBtn={props.disableAnswerSubmitBtn}
     answerSubmitProgressBarVal={props.answerSubmitProgressBarVal}/>

     questionGrid = getQuestionGrid();
    
  }

  return (
    <div className={classes.root}>
    {/* <AppBar position="fixed" color="#FFFFFF">
        <Toolbar className={classes.toolbar}>
            <Box borderRadius="10px" padding="10px" fontFamily="Arial">
                <img src={ImageBrainCrusher} height="20%" width="20%" alt="Logo" />
            </Box>

            <div className={classes.rightSide}>
                <Box borderRadius="10px" padding="10px" fontFamily="Arial">
                    <img src={ImageBrainCrusher} height="20%" width="20%" alt="Logo" />
                </Box>
                <Box >
                    <div color="#F5F5F5">Hello! {props.name}</div>
                </Box>
            </div>
        </Toolbar>
    </AppBar> */}
    <UserAppBar name={props.name} handlePageNameBtnClick={handlePageNameBtnClick} pageNameBtn={pageNameBtn} avatar={props.avatar}/>
    <div className={classes.toolbar} />
    <Grid container component="main" className={classes.image}>
      <CssBaseline />
      {questionGrid}
      {/* <Grid item xs={false} sm={4} md={7} className={classImage.image} /> */}
      <Grid item xs={xs} sm={sm} md={md} lg={lg} component={Paper} elevation={6} square className={classes.panelColor}>
      
        {rightSidePanel}
      </Grid>
    </Grid>
    </div>
  );
}