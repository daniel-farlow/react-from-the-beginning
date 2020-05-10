import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './utility/NavBar/NavBar.component';
import Home from './pages/Home/Home.component';
import SingleFullVenue from './pages/SingleFullVenue/SingleFullVenue.component';
import Modal from './utility/Modal/Modal.component';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <Router>
        <Route path='/' component={NavBar} />
        <Route exact path='/' component={Home} />
        <Route exact path='/venue/:venueId' component={SingleFullVenue} />
        <Route path='/' component={Modal} />
      </Router>
    );
  }
}

export default App;
