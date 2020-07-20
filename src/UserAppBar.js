import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ImageBrainCrusher from './img/brainCrusher.jpeg'
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Avatar, ListItemAvatar, ListItemText , ListItem } from '@material-ui/core';

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
      margin: theme.spacing(2, 5, 2, 2),
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
          marginRight: theme.spacing(2, 3, 2, 2),
        },
      },
  }));

export default function UserAppBar(props) {
    const classes = useStyles();

    const [disablePageNameBtn, setDisablePageNameBtn] = React.useState(false);
    const [circularProgressBarVal, setCircularProgressBarVal] = React.useState("");
    
    let progressBarVal = "";
    const onPageNameClick = () => {
        progressBarVal = <div className={classes.circularProgressBar}><CircularProgress size="1.5rem" color="primary" /></div>;
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
    //alert(props.avatar);
    return(
        <AppBar position="fixed" color="#FFFFFF">
            <Toolbar className={classes.toolbar}>
                <Box borderRadius="10px" padding="10px" fontFamily="Arial">
                    <img src={ImageBrainCrusher} height="20%" width="20%" alt="Logo" />
                </Box>

                <div className={classes.rightSide}>
                {circularProgressBarVal}

                    <Button size="small" 
                        color="secondary"
                        onClick={onPageNameClick}
                        disabled={disablePageNameBtn}
                        className={classes.submit}
                    >
                        {props.pageNameBtn}
                    </Button>
                
                    <ListItem >
                        <ListItemAvatar>
                            <Avatar alt={props.name} src={props.avatar} />
                            
                        </ListItemAvatar>
                        <ListItemText primary={`${props.name}`} ></ListItemText>
                        
                    </ListItem>
                
                    {/* <Box fullWidth className={classes.submit}>
                        <div color="#F5F5F5">Hello! {props.name}</div>
                    </Box> */}
                </div>
            </Toolbar>
        </AppBar>
       
    );
}