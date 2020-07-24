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
import { Card , CardActionArea , CardActions , CardContent , CardMedia } from '@material-ui/core';
import Button from '@material-ui/core/Button';


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
        paddingTop: "7vh" ,
        margin: theme.spacing(0.65, 0, 0.65, 0),
        width: "26vw",
        height: "43vh",
        background: 'linear-gradient(90deg, #804de8, #804de8)',
        color: "white",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justify: 'center'
    },
    paperTop3:{
        paddingTop: "4vh" ,
        margin: theme.spacing(0.65, 0, 0.65, 0),
        width: "26vw",
        height: "36vh",
        backgroundColor: "#fcfcfc",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justify: 'center'
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
        width: "14vmin",
        height: "14vmin",
        lineHeight: "20vh"
      },
      medium: {
        width: "12vmin",
        height: "12vmin",
        lineHeight: "20vh"
      },
    avatarMedium:{
        width: "9vmin",
        height: "9vmin",
    },
    bronzeBackgroundAvatar:{
        background: "#A97142",
        color: "white"
    },
    silverBackgroundAvatar:{
        background: "#d3d3d3",
        color: "white"
    },
    goldBackgroundAvatar:{
        background: "#d4af37",
        color: "white"
    },
    cardContent:{
        flex: '1 0 auto'
        
    },
    cardRoot:{
        display: 'flex',
        direction: 'column'
    }

  }));

  const SmallAvatar = withStyles((theme) => ({
    root: {
      width: "3.6vmin",
      height: "3.6vmin",
      border: `2px solid ${theme.palette.background.paper}`,
      fontSize: "1em",
      background: 'linear-gradient(90deg, #81de87, #49c962)',
      color: "#ffffff",
      animation: '$ripple 3s infinite ease-in-out',
    },
    '@keyframes ripple': {
        '0%': {
          transform: 'scale(.8)',
          opacity: 1,
        },
        '50%': {
          transform: 'scale(1)',
          opacity: 1,
        },
        '100%': {
          transform: 'scale(0.8)',
          opacity: 1,
        },
      },
  }))(Avatar);

  const Top3SmallAvatar = withStyles((theme) => ({
    root: {
      width: 40,
      height: 40,
      fontSize: "2em",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    animation: '$ripple 3s infinite ease-in-out',
    },
    '@keyframes ripple': {
        '0%': {
          transform: 'scale(1)',
          opacity: 1,
        },
        '50%': {
          transform: 'scale(1.2)',
          opacity: 1,
        },
        '100%': {
          transform: 'scale(1)',
          opacity: 1,
        },
      },
  }))(Avatar);

  const RunnersScore = withStyles({
    root: {
      fontSize: "4.5vmin",
      color: "#696969"
    }
  })(Typography);

  const WinnerScore = withStyles({
    root: {
      fontSize: "9vmin"
    }
  })(Typography);

  const WinnerSmallAvatar = withStyles((theme) => ({
    root: {
      width: "5.8vmin",
      height: "5.8vmin",
      fontSize: "2em",
    animation: '$ripple 3s infinite ease-in-out',
    },
    '@keyframes ripple': {
        '0%': {
          transform: 'scale(1)',
          opacity: 1,
        },
        '50%': {
          transform: 'scale(1.2)',
          opacity: 1,
        },
        '100%': {
          transform: 'scale(1)',
          opacity: 1,
        },
      },
  }))(Avatar);

  const RunnersSmallAvatar = withStyles((theme) => ({
    root: {
      width: "5vmin",
      height: "5vmin",
      fontSize: "2em",
    animation: '$ripple 3s infinite ease-in-out',
    },
    '@keyframes ripple': {
        '0%': {
          transform: 'scale(1)',
          opacity: 1,
        },
        '50%': {
          transform: 'scale(1.2)',
          opacity: 1,
        },
        '100%': {
          transform: 'scale(1)',
          opacity: 1,
        },
      },
  }))(Avatar);

  const GoldSmallAvatar = withStyles((theme) => ({
    root: {
      width: 40,
      height: 40,
      border: `3px solid ${theme.palette.background.paper}`,
      fontSize: "2em"
    },
  }))(Avatar);

  const SilverSmallAvatar = withStyles((theme) => ({
    root: {
      width: 40,
      height: 40,
      border: `3px solid ${theme.palette.background.paper}`,
      fontSize: "2em"
    },
  }))(Avatar);

  const BronzeSmallAvatar = withStyles((theme) => ({
    root: {
      width: 40,
      height: 40,
      border: `3px solid ${theme.palette.background.paper}`,
      fontSize: "2em",
      background: "#A97142",
      color: "white"
    },
  }))(Avatar);

  const StyledBadge = withStyles((theme) => ({
    badge: {
        backgroundColor: 'linear-gradient(90deg, #81de87, #49c962)',
        color: 'linear-gradient(90deg, #81de87, #49c962)',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: '$ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }))(Badge);

  const GrayTextTypography = withStyles({
    root: {
      color: "#696969"
    }
  })(Typography);

  const GrayListItemText = withStyles({
    root: {
      color: "#696969"
    }
  })(ListItemText);

export default function UserLeaderboard(props){
    const classes = useStyles();
    let header, innerContent;
    let top3 = props.leaderboard2.filter((row) => parseInt(row["rank"]) < 4);
    let winner = props.leaderboard2.filter((row) => parseInt(row["rank"]) == 1);
    let runners = props.leaderboard2.filter((row) => parseInt(row["rank"]) > 1 && parseInt(row["rank"]) < 4);
    // let temp = top3[0];
    // top3[0] = top3[1];
    // top3[1] = temp;
    let rest = props.leaderboard2.filter((row) => parseInt(row["rank"]) >= 4);
    let top3Content;
    let winnerContent;
    let runnersContent;
    header = <Paper className={classes.paperHeader} variant= "outlined" square={true} align="center">
                <Typography component="h4" variant="h5">
                    Leaderboard
                </Typography>
            
        
            </Paper>
    ;

    winnerContent = winner.map((row) => 
    <Grid item xs={12} sm={12} md={4} lg={4}>
        <Card className={classes.paperWinner}
        variant="elevation" square={true} elevation={20}>
            <CardMedia>
                <Badge
                    overlap="circle"
                    anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                    }}
                        badgeContent={<WinnerSmallAvatar src="/avatar/gold1.png" alt={row["rank"]}  >{row["rank"]}</WinnerSmallAvatar>}
                    >
                    <Avatar className={classes.large} alt={row["fname"]} src={row["avatar"]} />
                </Badge>
            </CardMedia>
            <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                    {row["fname"]}
                </Typography>
                <WinnerScore>
                    {row["marks"]}
                </WinnerScore>
            </CardContent>
                
                    {/* <Badge
                        overlap="circle"
                        anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                        }}
                            badgeContent={<Top3SmallAvatar src="/avatar/gold1.png" alt={row["rank"]}  >{row["rank"]}</Top3SmallAvatar>}
                        >
                        <Avatar className={classes.large} alt={row["fname"]} src={row["avatar"]} />
                    </Badge> */}
                    
        </Card>
    </Grid>
    );
    runnersContent = runners.map((row) => 
    <Grid item xs={12} sm={12} md={4} lg={4}>
        <Card className={classes.paperTop3}
        variant="outlined" square={true}>
            <CardMedia>
                <Badge
                    overlap="circle"
                    anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                    }}
                        badgeContent={<RunnersSmallAvatar src={row["rank"] == 2 ? "/avatar/silver.png" : "/avatar/bronze.png"} alt={row["rank"]}  >{row["rank"]}</RunnersSmallAvatar>}
                    >
                    <Avatar className={classes.medium} alt={row["fname"]} src={row["avatar"]} />
                </Badge>
            </CardMedia>
            <CardContent className={classes.cardContent}>
                <GrayTextTypography gutterBottom variant="h6" component="h2">
                    {row["fname"]}
                </GrayTextTypography>
                <RunnersScore variant="h4">
                    {row["marks"]}
                </RunnersScore>
            </CardContent>
                    
        </Card>
    </Grid>
    );
    // winnerContent = winner.map((row) => 
    // <Grid item xs={12} sm={12} md={4} lg={4}>
    //     <Paper className={classes.paperWinner}
    //     variant="elevation" square={true} elevation={20}>
    //         <Grid item xs={12} sm={12} md={12} lg={12} container direction="column" justify="space-evenly" alignItems="center" >
    //             <Grid item>
    //             <Badge
    //                 overlap="circle"
    //                 anchorOrigin={{
    //                 vertical: 'top',
    //                 horizontal: 'left',
    //                 }}
    //                     // badgeContent={<Top3SmallAvatar className={row["rank"] == 3 ? classes.bronzeBackgroundAvatar : 
    //                     // row["rank"] == 2 ? classes.silverBackgroundAvatar : classes.goldBackgroundAvatar} alt={row["rank"]} src="/avatar/gold.jpeg" >{row["rank"]}</Top3SmallAvatar>}
    //                     badgeContent={<Top3SmallAvatar src="/avatar/gold1.png" alt={row["rank"]}  >{row["rank"]}</Top3SmallAvatar>}
    //                 >
    //                 {/* <Avatar className={classes.large} alt={row["fname"]} src={row["avatar"]} /> */}
    //                 <Avatar className={classes.large} alt={row["fname"]} src={row["avatar"]} />
    //             </Badge>
    //             {/* <StyledBadge
    //                 className={row["rank"] == 3 ? classes.bronzeBackgroundAvatar : 
    //                 row["rank"] == 2 ? classes.silverBackgroundAvatar : classes.goldBackgroundAvatar}
    //                 overlap="circle"
    //                 anchorOrigin={{
    //                 vertical: 'bottom',
    //                 horizontal: 'right',
    //                 }}
    //                 variant="dot"
    //             >
    //                 <Avatar className={classes.large} alt={row["fname"]} src={row["avatar"]} />
    //             </StyledBadge> */}
    //             </Grid>
    //             <Grid item >
    //                 <Typography variant="h5">
    //                     {row["fname"]}
    //                 </Typography>
    //             </Grid>
    //             <Grid item>
    //                 <Typography variant="h4">
    //                     {row["marks"]}
    //                 </Typography>
    //             </Grid>
    //         </Grid>   
    //     </Paper>
    // </Grid>
    // );

    // runnersContent = runners.map((row) => 
    // <Grid item xs={12} sm={12} md={4} lg={4}>
    //     <Paper className={classes.paperTop3}
    //     variant="outlined" square={true} >
    //         <Grid item xs={12} sm={12} md={12} lg={12} container direction="column" justify="space-evenly" alignItems="center" >
    //             <Grid item>
    //             <Badge
    //                 overlap="circle"
    //                 anchorOrigin={{
    //                 vertical: 'bottom',
    //                 horizontal: 'right',
    //                 }}
    //                     // badgeContent={<Top3SmallAvatar className={row["rank"] == 3 ? classes.bronzeBackgroundAvatar : 
    //                     // row["rank"] == 2 ? classes.silverBackgroundAvatar : classes.goldBackgroundAvatar} alt={row["rank"]} src="/avatar/gold.jpeg" >{row["rank"]}</Top3SmallAvatar>}
    //                     badgeContent={<Top3SmallAvatar src={row["rank"] == 2 ? "/avatar/silver.png" : "/avatar/gold1.png"} alt={row["rank"]}  >{row["rank"]}</Top3SmallAvatar>}
    //                 >
    //                 {/* <Avatar className={classes.large} alt={row["fname"]} src={row["avatar"]} /> */}
    //                 <Avatar className={classes.large} alt={row["fname"]} src={row["avatar"]} />
    //             </Badge>
    //             {/* <StyledBadge
    //                 className={row["rank"] == 3 ? classes.bronzeBackgroundAvatar : 
    //                 row["rank"] == 2 ? classes.silverBackgroundAvatar : classes.goldBackgroundAvatar}
    //                 overlap="circle"
    //                 anchorOrigin={{
    //                 vertical: 'bottom',
    //                 horizontal: 'right',
    //                 }}
    //                 variant="dot"
    //             >
    //                 <Avatar className={classes.large} alt={row["fname"]} src={row["avatar"]} />
    //             </StyledBadge> */}
    //             </Grid>
    //             <Grid item >
    //                 <GrayTextTypography variant="h5">
    //                     {row["fname"]}
    //                 </GrayTextTypography>
    //             </Grid>
    //             <Grid item>
    //                 <GrayTextTypography variant="h4">
    //                     {row["marks"]}
    //                 </GrayTextTypography>
    //             </Grid>
    //         </Grid>   
    //     </Paper>
    // </Grid>
    // );

    // top3Content = top3.map((row) => 
    // <Grid item xs={12} sm={12} md={4} lg={4}>
    //     <Paper className={row["rank"] == "1" ? classes.paperWinner : classes.paperTop3}
    //     variant={row["rank"] == "1" ? "elevation" : "outlined"} square={true} elevation={row["rank"] == "1" ? 20 : 0}>
    //         <Grid item xs={12} sm={12} md={12} lg={12} container direction="column" justify="space-evenly" alignItems="center" >
    //             <Grid inputMode>
    //             <Badge
    //                 overlap="circle"
    //                 anchorOrigin={{
    //                 vertical: 'bottom',
    //                 horizontal: 'right',
    //                 }}
    //                     // badgeContent={<Top3SmallAvatar className={row["rank"] == 3 ? classes.bronzeBackgroundAvatar : 
    //                     // row["rank"] == 2 ? classes.silverBackgroundAvatar : classes.goldBackgroundAvatar} alt={row["rank"]} src="/avatar/gold.jpeg" >{row["rank"]}</Top3SmallAvatar>}
    //                     badgeContent={<Top3SmallAvatar src={row["rank"] == 3 ? "/avatar/bronze.png" : 
    //                     row["rank"] == 2 ? "/avatar/silver.png" : "/avatar/gold1.png"} alt={row["rank"]}  >{row["rank"]}</Top3SmallAvatar>}
    //                 >
    //                 {/* <Avatar className={classes.large} alt={row["fname"]} src={row["avatar"]} /> */}
    //                 <Avatar className={classes.large} alt={row["fname"]} src={row["avatar"]} />
    //             </Badge>
    //             {/* <StyledBadge
    //                 className={row["rank"] == 3 ? classes.bronzeBackgroundAvatar : 
    //                 row["rank"] == 2 ? classes.silverBackgroundAvatar : classes.goldBackgroundAvatar}
    //                 overlap="circle"
    //                 anchorOrigin={{
    //                 vertical: 'bottom',
    //                 horizontal: 'right',
    //                 }}
    //                 variant="dot"
    //             >
    //                 <Avatar className={classes.large} alt={row["fname"]} src={row["avatar"]} />
    //             </StyledBadge> */}
    //             </Grid>
    //             <Grid item >
    //                 <GrayTextTypography variant="h5">
    //                     {row["fname"]}
    //                 </GrayTextTypography>
    //             </Grid>
    //             <Grid item>
    //                 <GrayTextTypography variant="h4">
    //                     {row["marks"]}
    //                 </GrayTextTypography>
    //             </Grid>
    //         </Grid>   
    //     </Paper>
    // </Grid>
    // );

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
                            {/* <StyledBadge
                                overlap="circle"
                                anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                                }}
                                variant="dot"
                            >
                                <Avatar alt={row["fname"]} src={row["avatar"]} className={classes.avatarMedium} />
                            </StyledBadge> */}
                        </ListItemAvatar>
                        <GrayListItemText variant="h4" primary={`${row["fname"]}`} ></GrayListItemText>
                        
                    </ListItem>
                </Grid>
                <Grid item xs={12} sm={12} md={1} lg={1}>
                    <GrayTextTypography variant="h5">
                    {row["marks"]}
                    </GrayTextTypography>
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
                                                {winnerContent}
                                                {runnersContent}
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