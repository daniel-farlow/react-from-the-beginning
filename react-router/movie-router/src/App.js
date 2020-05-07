import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './components/Home/Home.component';
import Movie from './components/Movie/Movie.component';
// import About from './components/About/About.component';

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
        </ul>
        <Route exact path='/' component={Home} />
        <Route exact path='/movie/:movieId' component={Movie} />
      </div>
    </Router>
  );
}

export default App;
