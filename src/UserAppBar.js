import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ImageBrainCrusher from './img/brainCrusher.jpeg'
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme, props) => ({
    root: {
      height: '100vh',
      
  
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
      margin: theme.spacing(2, 0, 2, 2),
    },
    toolbar: theme.mixins.toolbar,
    rightSide:{
      display: 'flex',
      flexDirection: 'row',
      marginLeft: 'auto'
    },
    panelColor: {
        backgroundColor : '#F5F5F5'
    },
    name: {
        margin: theme.spacing(2, 0, 2, 2),
        padding: theme.spacing(1, 0, 1, 0)
    },
    circularProgressBar: {
        display: 'flex',
        '& > * + *': {
          marginLeft: theme.spacing(2),
        },
      },
  }));

export default function UserAppBar(props) {
    const classes = useStyles();

    const [disablePageNameBtn, setDisablePageNameBtn] = React.useState(false);
    const [circularProgressBarVal, setCircularProgressBarVal] = React.useState("");
    
    let progressBarVal = "";
    const onPageNameClick = () => {
        progressBarVal = <Box className={classes.name}><div className={classes.circularProgressBar}><CircularProgress size="1.5rem" color="primary" /></div></Box>;
        setCircularProgressBarVal(progressBarVal);
        setDisablePageNameBtn(true);
        //disablePageNameBtn = true;
        props.handlePageNameBtnClick();
        setTimeout(() => { setCircularProgressBarVal("");
            setDisablePageNameBtn(false);}, 1000);
        
        // props.handlePageNameBtnClick(); 
        // setCircularProgressBarVal("");
        // setDisablePageNameBtn(false);
        
        // setCircularProgressBarVal("");
        // setDisablePageNameBtn(false);
    };

    return(
        <AppBar position="fixed" color="#FFFFFF">
            <Toolbar className={classes.toolbar}>
                <Box borderRadius="10px" padding="10px" fontFamily="Arial">
                    <img src={ImageBrainCrusher} height="20%" width="20%" alt="Logo" />
                </Box>

                <div className={classes.rightSide}>
                {circularProgressBarVal}
                <Box className={classes.submit}>
                    <Button variant="contained"
                        color="secondary"
                        onClick={onPageNameClick}
                        disabled={disablePageNameBtn}
                    >
                        {props.pageNameBtn}
                    </Button>
                </Box>
                <Box className={classes.name} lineHeight="center">
                    <Box>
                        Hello! {props.name}
                    </Box>
                </Box>
                    {/* <Box fullWidth className={classes.submit}>
                        <div color="#F5F5F5">Hello! {props.name}</div>
                    </Box> */}
                </div>
            </Toolbar>
        </AppBar>
       
    );
}