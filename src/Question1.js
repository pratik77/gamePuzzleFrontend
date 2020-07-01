import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import SubmissionSection from './SubmissionSection';
import Image from './img/1.jpg';
import Image2 from './img/2.jpg'; 
import { CORRECT_ANSWER } from './Constants'
import { INVALID_ANSWER } from './Constants'
import WrongAnswerConfirmationPage from './WrongAnswerConfirmationPage'
import CorrectAnswerConfirmationPage from './CorrectAnswerConfirmationPage'


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
}));

const useStylesImage1 = makeStyles((theme, props) => ({
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



function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

export default function Question1(props) {
  const classes = useStyles();
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  const classImage = useStylesImage1();
  let questionGrid;
  if(props.message == INVALID_ANSWER){
    return <WrongAnswerConfirmationPage onGetBackToCurrentQuestion={props.onGetBackToCurrentQuestion}/>
  }
  if(props.message == CORRECT_ANSWER){
    return <CorrectAnswerConfirmationPage onGoToNextQuestion={props.onGoToNextQuestion}/>
  }

  if(props.questionNum == 1){
    questionGrid = <Grid item xs={false} sm={4} md={7} className={classImage.image} />;
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      {questionGrid}
      <Grid item xs={false} sm={4} md={7} className={classImage.image} />
      <Grid item xs={12} sm={4} md={5} component={Paper} elevation={6} square>
        <SubmissionSection giveUp={props.giveUp} onClick={props.onClick} hasError={props.hasError} message={props.message} onChange={props.onChange} onGiveUpClick={props.onGiveUpClick}/>
      </Grid>
    </Grid>
  );
}