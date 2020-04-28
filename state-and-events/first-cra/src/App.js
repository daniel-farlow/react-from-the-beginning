import React from 'react';
import './App.css';
import StateInAction from './components/StateInAction/StateInAction.component';
import FourExamples from './components/FourExamples/FourExamples.component';
import CountExperiment from './components/CountExperiment/CountExperiment.component';
import IllustratedBinding from './components/IllustratedBinding/IllustratedBinding.component';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <h1>Sanity Check</h1> */}
        {/* <StateInAction /> */}
        <FourExamples />
        {/* <CountExperiment /> */}
        {/* <IllustratedBinding /> */}
      </div>
    );
  }
}

export default App;
