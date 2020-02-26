import React from 'react';

import './App.css';
import Navbar from './components/Navbar/Navbar';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './components/Authentication/Login';

function App() {
  return (
    <div>
      <Navbar/>
      <Login />
    </div>
  );
}

export default App;
