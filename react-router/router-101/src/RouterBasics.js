import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Home from './components/Home/Home.component';
import About from './components/About/About.component';

function App() {
  return (
    <Router>
      <h1>Header!</h1>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
      </div>
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <h1>Footer!</h1>
    </Router>
  );
}

export default App;
