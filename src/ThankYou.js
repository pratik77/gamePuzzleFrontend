import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

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
      <Grid item xs={12} sm={8} md={12}>
        <div className={classes.papercenter}>
        <Avatar>
            <ThumbUpIcon fontSize="large"/>
        </Avatar>
        <Divider variant="fullWidth" component="li" />
          <Typography component="h1" variant="h6" >
          Great! Now relax and wait for the results. It will be nice of you if you fill up 
          the feedback form. It will help us to improve further. 
          </Typography>
          <Typography>
            <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=Z2om2-DLJk2uGtBYH-A1Nd8JZa3RWHVMomRyUz_ybmJUNzhZUjVGOEFTUFAxS0xBQVlEVFRCWU9BRi4u">
              Feedback form
            </a>
          </Typography>
        </div>
        </Grid>
    </Grid>
  );
}