import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { MuiThemeProvider, createMuiTheme, CssBaseline, responsiveFontSizes } from '@material-ui/core';
 
let theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#00695f'
    },
    secondary: {
      main: '#f50057'
    }
  }
});
theme = responsiveFontSizes(theme);

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <CssBaseline/>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
