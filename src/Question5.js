import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import FolderIcon from '@material-ui/icons/Folder';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import FontDownloadIcon from '@material-ui/icons/FontDownload';
import ArrowRightTwoToneIcon from '@material-ui/icons/ArrowRightTwoTone';
import Filter1TwoToneIcon from '@material-ui/icons/Filter1TwoTone';
import Divider from '@material-ui/core/Divider';
import SubmissionSection from './SubmissionSection';

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
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={12} sm={8} md={7}>
        <div className={classes.paperleft}>
          <Typography component="h1" variant="h5">
            Question 5:
          </Typography>
          <List className={classes.root}>
          <ListItem alignItems="center">
            <ListItemAvatar>
              <Avatar alt="Turtle" src="/static/images/avatar/4.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Turtle"
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="center">
            <ListItemAvatar>
              <Avatar alt="Pexa" src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Pexa"
            />
          </ListItem>
          <Divider variant="inset" component="li"/>
          <ListItem alignItems="center" >
            <ListItemAvatar>
              <Avatar alt="Vue" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Vue"
              />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="center">
            <ListItemAvatar>
              <Avatar alt="Toolbox" src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Toolbox"
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="center">
            <ListItemAvatar>
              <Avatar alt="View JS" src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="View JS"
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="center">
            <ListItemAvatar>
              <Avatar alt="Mew" src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Mew"
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="center">
            <ListItemAvatar>
              <Avatar alt="Gushi" src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Gushi"
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="center">
            <ListItemAvatar>
              <Avatar alt="Umber" src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Umber"
            />
          </ListItem>
        </List>
        </div>
        </Grid>
      <Grid item xs={12} sm={4} md={5} component={Paper} elevation={6} square>
        <SubmissionSection giveUp={props.giveUp} onClick={props.onClick} hasError={props.hasError} message={props.message} onChange={props.onChange} onGiveUpClick={props.onGiveUpClick}/>
      </Grid>
    </Grid>
  );
}