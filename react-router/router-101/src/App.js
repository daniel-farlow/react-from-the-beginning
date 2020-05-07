import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.component';
import Home from './components/Home/Home.component';
import Help from './components/Help/Help.component';

// For demo purposes with router using materialize
const Host = () => <h1>Host</h1>
const LogIn = () => <h1>Log in</h1>
const SignUp = () => <h1>Sign up</h1>

function App() {
  return (
    <Router>
      <Route component={NavBar} />
      <Route exact path='/' render={({...props}) => (<Home title='Hello!' {...props} />)} />
      <Route exact path='/host' component={Host} />
      <Route path='/help' component={Help} />
      <Route exact path='/login' component={LogIn} />
      <Route exact path='/signup' component={SignUp} />
    </Router>
  );
}

export default App;
