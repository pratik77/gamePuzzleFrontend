import React from 'react';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Avatar, ListItemAvatar, ListItemText , ListItem } from '@material-ui/core';
import Badge from '@material-ui/core/Badge';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    container: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
      background: 'linear-gradient(90deg, #9a54e3, #b06ab3)'
    },
    paper: {
        padding: theme.spacing(2),
        margin: theme.spacing(0.65, 0, 0.65, 0),
        width: "79vw",
        backgroundColor: "#fcfcfc",
        
    },
    paperWinner: {
        padding: theme.spacing(2),
        margin: theme.spacing(0.65, 0, 0.65, 0),
        width: "26vw",
        height: "43vh",
        background: 'linear-gradient(90deg, #804de8, #804de8)',
        color: "white"
    },
    paperTop3:{
        padding: theme.spacing(2),
        margin: theme.spacing(0.65, 0, 0.65, 0),
        width: "26vw",
        height: "33vh",
        backgroundColor: "#fcfcfc",
    }, 
    leaderboardPaper: {
        padding: theme.spacing(2),
        margin: theme.spacing(1, 0, 1, 0),
        width: "83vw",
        
    },
    leaderboardParentPaper: {
        padding: theme.spacing(2),
        margin: theme.spacing(1, 0, 1, 0),
        width: "90vw",
        backgroundColor: "#edf2ee"
    },
    paperHeader: {
        padding: theme.spacing(2),
        margin: theme.spacing(0.65, 0, 0.65, 0),
        width: "83vw",
        background: 'linear-gradient(90deg, #804de8, #804de8)',
        color: "white"
    },
    large: {
        width: theme.spacing(14),
        height: theme.spacing(14),
        lineHeight: "20vh"
      },
    avatarMedium:{
        width: theme.spacing(9),
        height: theme.spacing(9),
    }

  }));

  const SmallAvatar = withStyles((theme) => ({
    root: {
      width: 25,
      height: 25,
      border: `2px solid ${theme.palette.background.paper}`,
      fontSize: "1em"
    },
  }))(Avatar);

export default function UserLeaderboard(props){
    const classes = useStyles();
    let header, innerContent;
    let top3 = props.leaderboard2.filter((row) => parseInt(row["rank"]) < 4);
    // let temp = top3[0];
    // top3[0] = top3[1];
    // top3[1] = temp;
    let rest = props.leaderboard2.filter((row) => parseInt(row["rank"]) >= 4);
    let top3Content;
    header = <Paper className={classes.paperHeader} variant= "outlined" square={true} align="center">
                <Typography component="h4" variant="h6">
                    Leaderboard
                </Typography>
            
        
            </Paper>
    ;
    top3Content = top3.map((row) => 
    <Grid item xs={12} sm={12} md={4} lg={4}>
        <Paper className={row["rank"] == "1" ? classes.paperWinner : classes.paperTop3}
        variant={row["rank"] == "1" ? "elevation" : "outlined"} square={true} elevation={row["rank"] == "1" ? 20 : 0}>
            <Grid item xs={12} sm={12} md={12} lg={12} container direction="column" justify="space-evenly" alignItems="center" >
                <Grid inputMode>
                <Badge
                    overlap="circle"
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                    }}
                        badgeContent={<SmallAvatar alt={row["rank"]} src="/static/images/avatar/1.jpg" >{row["rank"]}</SmallAvatar>}
                    >
                    <Avatar className={classes.large} alt={row["fname"]} src={row["avatar"]} />
                </Badge>
                </Grid>
                <Grid item >
                    <Typography component="h1">
                        {row["fname"]}
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography component="h1">
                        {row["marks"]}
                    </Typography>
                </Grid>
            </Grid>   
        </Paper>
    </Grid>
    );

    innerContent = rest.map((row) =>
    
    
    <Grid item>
    <Paper className={row["rank"] == "1" ? classes.paperWinner : classes.paper} border="1px solid" variant= "outlined" square={true}>
        <Grid xs={12} sm={12} md={12} lg={12} container alignItems="center">
                <Grid item={parseInt(row["rank"]) > 1} xs={12} sm={12} md={11} lg={11}>
                    <ListItem >
                        <ListItemAvatar>
                            <Badge
                            overlap="circle"
                            anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                            }}
                                badgeContent={<SmallAvatar alt={row["rank"]} src="/static/images/avatar/1.jpg" >{row["rank"]}</SmallAvatar>}
                            >
                            <Avatar alt={row["fname"]} src={row["avatar"]} className={classes.avatarMedium}/>
                            </Badge>
                        </ListItemAvatar>
                        <ListItemText primary={`${row["fname"]}`} ></ListItemText>
                        
                    </ListItem>
                </Grid>
                <Grid item xs={12} sm={12} md={1} lg={1}>
                    <Typography component="h1">
                    {row["marks"]}
                    </Typography>
                </Grid>
            
        </Grid>
    </Paper>
    </Grid>   
    );

    return(
        <Container maxWidth="xl" className={classes.container}>
            <Grid container justify="center">
                <Grid item>
                    <Paper className={classes.leaderboardParentPaper} variant= "outlined" square={true}>
                        <List>
                            <Grid container justify="center">
                                <Grid items>
                                {header}
                                </Grid>
                            </Grid>
                            <Grid container justify="center">
                                <Grid items>
                                    <Paper className={classes.leaderboardPaper} variant= "outlined" square={true}>
                                    
                                        <Grid container direction="column" xs={12} sm={12} md={12} lg={12} container alignItems="center" >
                                            <Grid item container direction="row" justify="space-between" alignItems="center" alignContent="center">
                                                {top3Content}
                                            </Grid>
                                                {innerContent}
                                        </Grid>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </List>
                    </Paper>
                </Grid>
            </Grid>
            
        </Container>
    );

}