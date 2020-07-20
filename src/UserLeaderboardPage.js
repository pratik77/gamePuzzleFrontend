import React from 'react';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    }
  }));

export default function UserLeaderboard(props){
    const classes = useStyles();
    let header, innerContent;

    header = <div>
    <Grid container> 
      <Grid item xs={12} sm={4} md={4} lg={4}>
        <Typography component="h4" variant="h6">
          Rank
        </Typography>
      </Grid>
      <Grid item xs={12} sm={4} md={4} lg={4}>
        <Typography component="h4" variant="h6">
          Name
        </Typography>
      </Grid>
      <Grid item xs={12} sm={4} md={4} lg={4}>
        <Typography component="h4" variant="h6">
          Marks
        </Typography>
      </Grid>
    </Grid> 
    <Divider variant="fullWidth" component="li" />
    </div>;

    innerContent = props.leaderboard2.map((row) =>
        <div>
            <Grid container>
            <Grid item xs={12} sm={4} md={4} lg={4}>
                <Typography component="h4" >
                {row["rank"]}
                </Typography>
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4}>
                <Avatar alt={row["fname"]} src="/static/images/avatar/1.jpg" />
                <Typography component="h1">
                {row["fname"]}
                </Typography>
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4}>
                <Typography component="h1">
                {row["marks"]}
                </Typography>
            </Grid>
            </Grid> 
            <Divider variant="fullWidth" component="li" />
        </div>
    );

    return(
        <Container maxWidth="lg" className={classes.container}>
            <List>
                {header}
                {innerContent}
            </List>
        </Container>
    );

}