import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Image from './img/monkey2.jpeg';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';



const useStyles = makeStyles((theme) => ({
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
    },
    paper: {
      margin: theme.spacing(10, 4, 30, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    papercenter: {
      margin: theme.spacing(10, 4, 30, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'flex-start'
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
    cardMedia: {
      width: 160,
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
        
      <img src={Image} height="50%" width="70%" alt="Logo" />
        <Button
            variant="contained"
            color="secondary"
            className={classes.submit}
            onClick={props.onGetBackToCurrentQuestion}
        >
            OOPS! INCORRECT ANSWER
        </Button>
          
      </div>
      
    </Container>
          
          
        
    );
  }