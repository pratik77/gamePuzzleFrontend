import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Image from './img/lion2.jpeg';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';


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
      margin: theme.spacing(20, 4, 30, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    papercenter: {
      margin: theme.spacing(25, 4, 30, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'center'
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
    
    return (
      <Container component="main" maxWidth="xs">
      <CssBaseline />
          <div className={classes.paper}>
              <img src={Image} height="150%" width="150%" alt="Logo" />
              <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={props.onGoToNextQuestion}
              >
                AWESOME! MOVE TO NEXT QUESTION
              </Button>
          </div>
      </Container>
        
    );
  }