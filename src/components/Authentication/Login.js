import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Container, Typography, TextField } from '@material-ui/core';
import logo from '../../images/logo.png';

const useStyles = makeStyles(theme => ({
  container: {
    // border: '1px solid white',
    display: 'flex',
    width: '100%',
    height: '80vh',
    flexWrap: 'wrap'
  },
  paper: {
    // border: '1px solid red',
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    width: "70%",
    overflowX: "auto",
    margin: "auto"
  },
  title: {
    // border: '1px solid white',
    borderRadius: '6px',
    margin: theme.spacing(2),
  },
  login: {
    // border: '1px solid blue',
    display: 'flex',
    width: '100%',
    margin: theme.spacing(0),
    flexWrap: 'no-wrap'
  },
  image: {
    // border: '1px solid green',
    width: '50%'
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
            <img src={logo} alt="pato" className={classes.image}/>
            <TextField
              label="Nick"
              color="secondary"
              style={{ margin: 8 }}
              placeholder="Ej: tourist"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              label="Password"
              color="secondary"
              style={{ margin: 8 }}
              placeholder="Ej: 123456"
              fullWidth
              type="password"
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              label="Confirm password"
              color="secondary"
              style={{ margin: 8 }}
              fullWidth
              helperText="Please confirm"
              type="password"
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            />
        </div>

      </Paper>
    </Container>
  );
}