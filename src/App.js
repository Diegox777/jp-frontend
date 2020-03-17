import React from 'react';

import './App.css';
import Navbar from './components/Navigation/AppBar';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './components/Authentication/Login';
import ListProblems from './components/Problems/ListProblems';
import CreateProblem from './components/Problems/CreateProblem';
import MenuDrawer from './components/Navigation/MenuDrawer';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Navbar/>
      <MenuDrawer/>
      {/* <Login /> */}
      {/* <ListProblems/> */}
      <CreateProblem />
      <Footer/>
    </div>
  );
}

export default App;
