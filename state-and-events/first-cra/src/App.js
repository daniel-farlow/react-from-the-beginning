import React from 'react';
import './App.css';
import StateInAction from './components/StateInAction/StateInAction.component';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Sanity Check</h1>
        <StateInAction />
      </div>
    );
  }
}

export default App;
