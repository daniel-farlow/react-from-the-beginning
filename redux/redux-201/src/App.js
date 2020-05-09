import React from 'react';
import './App.css';
import FrozenDept from './components/FrozenDept/FrozenDept.component';
import ProduceDept from './components/ProduceDept/ProduceDept.component';
import MeatDept from './components/MeatDept/MeatDept.component';
import Main from './components/Main/Main.component';
import NavBar from './components/NavBar/NavBar.component';
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Route path='/' component={NavBar} />
        <Route path="/main" component={Main} />
        <Route path="/frozen-dept" component={FrozenDept} />
        <Route path="/meat-dept" component={MeatDept} />
        <Route path="/produce-dept" component={ProduceDept} />
      </div>
    </Router>
  );
}

export default App;
