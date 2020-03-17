import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Container, Typography, TextField, Button, Grid } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import logo from '../../images/logo.png';

const useStyles = makeStyles(theme => ({
  container: {
    height: '80vh',
    marginTop: theme.spacing(2)
  },
  paper: {
    // border: '1px solid white',
    // flexGrow: 1,
    // marginBottom: theme.spacing(5),
    // width: "80%",
    // margin: "auto",
    // display: 'flex',
    // flexDirection: 'column'
  },
  image: {
    // border: '1px solid white',
    width: '70%',
    height: 'auto'
  },
  form: {
    // border: '1px solid white',
    // flex: 1,
    // display: 'flex',
    // flexDirection: 'column',
    // padding: '4%'
  }  
}));

export default function Login() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Paper elevation={5} className={classes.paper}>
        <Grid direction='column' justify='space-between'>
          <Grid container item xs={12} justify='center'>
              <Typography variant="h4" className={classes.title}>
                Log in or Sign up
              </Typography>
          </Grid>
          <Grid container >
            <Grid item md={6} >
              <img src={logo} alt="pato" className={classes.image} />
            </Grid>
            <Grid item md={6} container direction='column' justify='space-around' >
                <TextField
                  className={classes.formField}
                  label="Nick"
                  color="secondary"
                  variant="outlined"
                />
                <TextField
                  className={classes.formField}
                  label="Password"
                  color="secondary"
                  variant="outlined"
                  type="password"
                />
                <Button variant="contained" color="secondary" endIcon={<SendIcon />}>Submit</Button>
                <Button>Sign up for an account</Button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}