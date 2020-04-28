import React from 'react';
import './App.css';
// import StateInAction from './components/StateInAction/StateInAction.component';
// import FourExamples from './components/FourExamples/FourExamples.component';
// import CountExperiment from './components/CountExperiment/CountExperiment.component';
// import IllustratedBinding from './components/IllustratedBinding/IllustratedBinding.component';
// import SimpleEvent from './components/SimpleEvent/SimpleEvent.component';
// import EventAndState from './components/EventAndState/EventAndState.component';
// import StatePractice from './components/StatePractice/StatePractice.component';
import CardSet from './components/CardSet/CardSet.component';
import cards from './cards';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className='row'>
          <CardSet cards={cards} />
        </div>
      </div>
    );
  }
}

export default App;
