import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import RefreshIcon from '@material-ui/icons/Refresh';
import MainListItems from './AdminNavigationBar';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

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

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function Dashboard(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [isLeaderBoardPage, setIsLeaderBoardPage] = React.useState(true);
  const [isLeaderBoard2Page, setIsLeaderBoard2Page] = React.useState(false);
  const [detailsPage, setDetailsPage] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const handleClickLeaderboard = (e) => {
    if(isLeaderBoardPage == false){
      setIsLeaderBoardPage(true);
      setDetailsPage(false);
      setIsLeaderBoard2Page(false);
    }
  
  };

  const handleClickLeaderboard2 = (e) => {
    if(isLeaderBoard2Page == false){
      setIsLeaderBoard2Page(true);
      setDetailsPage(false);
      setIsLeaderBoardPage(false);
    }
  
  };
  const handleClickSubmission = (e) => {
    if(detailsPage == false){
      setIsLeaderBoardPage(false);
      setDetailsPage(true);
      setIsLeaderBoard2Page(false);
    }
  
  };
  
  let header;
  let innerContent;
  if(isLeaderBoardPage){
    header = <div>
    <Grid container> 
      <Grid item xs={12} sm={8} md={3}>
        <Typography component="h4" variant="h6">
          Rank
        </Typography>
      </Grid>
      <Grid item xs={12} sm={8} md={3}>
        <Typography component="h4" variant="h6">
          Id
        </Typography>
      </Grid>
      <Grid item xs={12} sm={8} md={3}>
        <Typography component="h4" variant="h6">
          Name
        </Typography>
      </Grid>
      <Grid item xs={12} sm={8} md={3}>
        <Typography component="h4" variant="h6">
          Marks
        </Typography>
      </Grid>
    </Grid> 
    <Divider variant="fullWidth" component="li" />
    </div>
    innerContent = props.leaderboard.map((row) =>
    <div>
    <Grid container>
      <Grid item xs={12} sm={8} md={3}>
        <Typography component="h4" >
          {row["rank"]}
        </Typography>
      </Grid> 
      <Grid item xs={12} sm={8} md={3}>
        <Typography component="h4" >
          {row["gamename"]}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={8} md={3}>
        <Typography component="h1">
          {row["fname"]}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={8} md={3}>
        <Typography component="h1">
          {row["marks"]}
        </Typography>
      </Grid>
    </Grid> 
    <Divider variant="fullWidth" component="li" />
    </div>
    );
  }else if(isLeaderBoard2Page){
    header = <div>
    <Grid container> 
      <Grid item xs={12} sm={8} md={3}>
        <Typography component="h4" variant="h6">
          Rank
        </Typography>
      </Grid>
      <Grid item xs={12} sm={8} md={3}>
        <Typography component="h4" variant="h6">
          Id
        </Typography>
      </Grid>
      <Grid item xs={12} sm={8} md={3}>
        <Typography component="h4" variant="h6">
          Name
        </Typography>
      </Grid>
      <Grid item xs={12} sm={8} md={3}>
        <Typography component="h4" variant="h6">
          Marks
        </Typography>
      </Grid>
    </Grid> 
    <Divider variant="fullWidth" component="li" />
    </div>
    innerContent = props.leaderboard2.map((row) =>
    <div>
    <Grid container>
      <Grid item xs={12} sm={8} md={3}>
        <Typography component="h4" >
          {row["rank"]}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={8} md={3}>
        <Typography component="h4" >
          {row["gamename"]}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={8} md={3}>
        <Typography component="h1">
          {row["fname"]}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={8} md={3}>
        <Typography component="h1">
          {row["marks"]}
        </Typography>
      </Grid>
    </Grid> 
    <Divider variant="fullWidth" component="li" />
    </div>
    );
  }else{
    header = <div>
    <Grid container> 
      <Grid item xs={12} sm={8} md={3}>
        <Typography component="h1" variant="h6">
          Name
        </Typography>
      </Grid>
      <Grid item xs={12} sm={8} md={3}>
        <Typography component="h1" variant="h6">
          Question Number
        </Typography>
      </Grid>
      <Grid item xs={12} sm={8} md={3}>
        <Typography component="h1" variant="h6">
          Submitted Answer
        </Typography>
      </Grid>
      <Grid item xs={12} sm={8} md={3}>
        <Typography component="h1" variant="h6">
          Actual Answer
        </Typography>
      </Grid>
    </Grid> 
    <Divider variant="fullWidth" component="li" />
    </div>;
    innerContent = props.submissionDetails.map((row) =>
    <div>
    <Grid container>
      <Grid item xs={12} sm={8} md={3}>
        <Typography component="h1">
          {row["fname"]}
        </Typography>
      </Grid> 
      <Grid item xs={12} sm={8} md={3}>
        <Typography component="h1">
          {row["questionNum"]}
        </Typography>
      </Grid>
      <Grid item xs={12} md={3}>
        <Typography component="h1">
          {row["submittedAnswer"]}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={8} md={3}>
        <Typography component="h1">
          {row["actualAnswer"]}
        </Typography>
      </Grid>
    </Grid> 
    <Divider variant="fullWidth" component="li" />
    </div>
    );

  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Admin Dashboard 
          </Typography>
          <IconButton color="inherit" onClick={props.onRefresh} alignItems="left">
              <RefreshIcon />
            
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List><MainListItems onLeaderboardClick={handleClickLeaderboard} onLeaderboard2Click={handleClickLeaderboard2} onSubmissionsClick={handleClickSubmission}/></List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
        <List>
          {header}
          {innerContent}
        </List>
        </Container>
      </main>
    </div>
  );
}