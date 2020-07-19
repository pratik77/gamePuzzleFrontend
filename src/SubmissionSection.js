import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';


const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
      
    },
    image: {
      backgroundImage: 'url(https://source.unsplash.com/random)',
      backgroundRepeat: 'no-repeat',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    paper: {
      margin: theme.spacing(30, 4, 30, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start'
    },
    papercenter: {
      margin: theme.spacing(25, 4, 30, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      
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
    note:{
      margin: theme.spacing(14, 0, 0, 0),
      color: 'grey',
    },
    linearProgress: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    }
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
    const [progressBarVal, setProgressBarVal] = React.useState("");
    const [disableAnswerSubmitBtn, setDisableAnswerSubmitBtn] = React.useState(false);
    const [answer, setAnswer] = React.useState("");
    const [hasError, setHasError] = React.useState("false");
    const [message, setMessage] = React.useState("");
    let giveUp;
    let progressBar;
    // if(props.giveUp === "true"){
    //     giveUp = <Button
    //     fullWidth
    //     variant="contained"
    //     color="secondary"
    //     className={classes.submit}
    //     onClick={props.onGiveUpClick}
    //   >
    //     Give Up
    //   </Button>;
    // }

    const onAnswerChange = e => {
      setAnswer(e.target.value);
      props.onChange(e);
    }

    const handleAnswerSubmit = () => {
      if(answer == ""){
        setHasError("true");
        setMessage("Answer cannot be blank.");
        return;
      }
      progressBar = <div className={classes.linearProgress}><LinearProgress color="secondary" /></div>;
      setDisableAnswerSubmitBtn(true);
      setProgressBarVal(progressBar);
      
      props.onClick();
    };

    return (
      
          <div className={classes.papercenter}>
            <Typography component="h1" variant="h5">
              Your Answer
            </Typography>
            
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="answer"
                label="Submit your response."
                name="answer"
                autoComplete="answer"
                autoFocus
                error={hasError === "true"}
                helperText={hasError === "true" ? message : ''}
                onChange={onAnswerChange}
              />
              <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={handleAnswerSubmit}
                disabled={disableAnswerSubmitBtn}
              >
                SUBMIT
              </Button>
              {/* {giveUp} */}
              {progressBarVal}
          </div>
          
        
    );
  }