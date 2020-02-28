import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Container, Typography, TextField, Button } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import logo from '../../images/logo.png';

const useStyles = makeStyles(theme => ({
  container: {
    // border: '1px solid white',
  },
  paper: {
    // border: '1px solid white',
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    width: "80%",
    margin: "auto",
    display: 'flex',
    flexDirection: 'column'
  },
  title: {
    // border: '1px solid white',
    margin: theme.spacing(5),
    flex: 1
  },
  login: {
    // border: '1px solid white',
    width: '100%',
    flex: 1,
    display: 'flex',
    flexWrap: 'wrap'
  },
  image: {
    // border: '1px solid white',
    flex: 1,
  },
  form: {
    // border: '1px solid white',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  formField: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  buttons: {
    display: 'flex',
    // flexDirection: 'column'
  }
}));

export default function Login() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Paper elevation={4} className={classes.paper} >
        <Typography variant="h4" align="center" className={classes.title}>
          Log in or Signup
        </Typography>
        <div className={classes.login}>
          <div className={classes.image}>
            <img src={logo} alt="pato" />
          </div>
          <div className={classes.form}>
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
            <TextField
              className={classes.formField}
              label="Confirm password"
              color="secondary"
              variant="outlined"
              helperText="Please confirm your password"
              type="password"
            />
            <div className={classes.buttons}>
              <Button variant="contained" color="secondary" endIcon={<SendIcon />}>Submit</Button>
              <Button>Sign up for an account</Button>
            </div>
          </div>
        </div>
      </Paper>
    </Container>
  );
}