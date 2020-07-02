import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import SubmissionSection from './SubmissionSection';
import Image1 from './img/1.jpg';
import Image2 from './img/2.jpg'; 
import { CORRECT_ANSWER, GIVE_UP } from './Constants'
import { INVALID_ANSWER } from './Constants'
import WrongAnswerConfirmationPage from './WrongAnswerConfirmationPage'
import CorrectAnswerConfirmationPage from './CorrectAnswerConfirmationPage'
import GiveUpConfirmationPage from './GiveUpConfirmationPage'
import Image3 from './img/35.jpeg';
import Image4 from './img/45.jpg';
import Image5 from './img/72.jpeg';
import Image6 from './img/51.jpeg';
import Image7 from './img/3.jpg';
import Image8 from './img/81.jpeg';
import Image9 from './img/94.jpeg';
import Image10 from './img/10.jpg';
import ThankYou from './ThankYou';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import ImageBrainCrusher from './img/brainCrusher.jpeg'


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
    backgroundImage: `url(${Image})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '58vw',
    height: '100vh'
    
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

const useStylesImage1 = makeStyles((theme, props) => ({
  image: {
    backgroundImage: `url(${Image1})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '58vw',
    height: '100vh'
    
  },
  
}));

const useStylesImage2 = makeStyles((theme, props) => ({
    image: {
      backgroundImage: `url(${Image2})`,
      backgroundRepeat: 'no-repeat',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '58vw',
      height: '100vh'
      
    },
    
  }));

  const useStylesImage3 = makeStyles((theme, props) => ({
    image: {
      backgroundImage: `url(${Image3})`,
      backgroundRepeat: 'no-repeat',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '58vw',
      height: '100vh'
      
    },
    
  }));

  const useStylesImage4 = makeStyles((theme, props) => ({
    image: {
      backgroundImage: `url(${Image4})`,
      backgroundRepeat: 'no-repeat',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '58vw',
      height: '100vh'
      
    },
    
  }));

  const useStylesImage5 = makeStyles((theme, props) => ({
    image: {
      backgroundImage: `url(${Image5})`,
      backgroundRepeat: 'no-repeat',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '58vw',
      height: '100vh'
      
    },
    
  }));

  const useStylesImage6 = makeStyles((theme, props) => ({
    image: {
      backgroundImage: `url(${Image6})`,
      backgroundRepeat: 'no-repeat',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '58vw',
      height: '100vh'
      
    },
    
  }));

  const useStylesImage7 = makeStyles((theme, props) => ({
    image: {
      backgroundImage: `url(${Image7})`,
      backgroundRepeat: 'no-repeat',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'fill',
      width: '58vw',
      height: '100vh'
      
    },
    
  }));

  const useStylesImage8 = makeStyles((theme, props) => ({
    image: {
      backgroundImage: `url(${Image8})`,
      backgroundRepeat: 'no-repeat',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '100vw',
      height: '100vh'
      
    },
    
  }));

  const useStylesImage9 = makeStyles((theme, props) => ({
    image: {
      backgroundImage: `url(${Image9})`,
      backgroundRepeat: 'no-repeat',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'center'
      
    },
    
  }));

  const useStylesImage10 = makeStyles((theme, props) => ({
    image: {
      backgroundImage: `url(${Image10})`,
      backgroundRepeat: 'no-repeat',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '58vw',
      height: '100vh'
      
    },
    
  }));



function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

export default function Question(props) {
  const classes = useStyles();
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
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

  let rightSidePanel;

  let questionGrid = "hello";

  if(props.questionNum == 11)
      return <ThankYou />;
  if(props.message == INVALID_ANSWER){
    rightSidePanel = <WrongAnswerConfirmationPage onGetBackToCurrentQuestion={props.onGetBackToCurrentQuestion}/>
  }
  else if(props.message == CORRECT_ANSWER){
    return rightSidePanel =  <CorrectAnswerConfirmationPage onGoToNextQuestion={props.onGoToNextQuestion}/>
  }
  else if(props.message == GIVE_UP){
    return rightSidePanel =  <GiveUpConfirmationPage onGoToNextQuestion={props.onGoToNextQuestion}/>
  }
  else{
    rightSidePanel = <SubmissionSection giveUp={props.giveUp} onClick={props.onClick} hasError={props.hasError} message={props.message} onChange={props.onChange} onGiveUpClick={props.onGiveUpClick}/>
  }

  if(props.questionNum == 1)
    questionGrid = <Grid item xs={false} sm={4} md={7} className={classImage1.image} />;
  else if(props.questionNum == 2)
    questionGrid = <Grid item xs={false} sm={4} md={7} className={classImage2.image} />;
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

  return (
    <div className={classes.root}>
    <AppBar position="fixed" color="#FFFFFF">
        <Toolbar className={classes.toolbar}>
            <Box borderRadius="10px" padding="10px" fontFamily="Arial">
                <img src={ImageBrainCrusher} height="20%" width="20%" alt="Logo" />
            </Box>
            <div className={classes.rightSide}>
                <Box >
                    <div color="#F5F5F5">Hello! {props.name}</div>
                </Box>
            </div>
        </Toolbar>
    </AppBar>
    <div className={classes.toolbar} />
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      {questionGrid}
      {/* <Grid item xs={false} sm={4} md={7} className={classImage.image} /> */}
      <Grid item xs={12} sm={4} md={5} component={Paper} elevation={6} square className={classes.panelColor}>
        {rightSidePanel}
      </Grid>
    </Grid>
    </div>
  );
}