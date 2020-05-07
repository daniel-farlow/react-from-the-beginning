import React, { Component } from 'react';
import './App.css';
// Font-Awesome stuff
import { faDumbbell, faFont, faFileAlt, faDice, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import QuizBar from './components/QuizBar/QuizBar.component';
import FlashCard from './components/FlashCard/FlashCard.component';

library.add(faDumbbell, faFont, faFileAlt, faDice, faSpinner);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardStyle: 'Random',
      cardRequestTime: Date.now(),
      flashCardDataLoaded: false
    }
  }
  
  userChoice = cardStyle => {
    this.setState({
      cardStyle,
      cardRequestTime: Date.now(),
      flashCardDataLoaded: false
    });
  }

  notReady = () => {
    this.setState({
      flashCardDataLoaded: false
    });
  }

  nowReady = () => {
    this.setState({
      flashCardDataLoaded: true
    });
  }

  render() {
    const {cardStyle, cardRequestTime, flashCardDataLoaded} = this.state;
    const flashCardProps = {cardStyle, cardRequestTime, flashCardDataLoaded};
    return (
      <div className='App align-items-center d-flex'>
        <div className='container' >
          <QuizBar userChoice={this.userChoice} />
          <FlashCard {...flashCardProps} nowReady={this.nowReady} notReady={this.notReady} />
        </div>
      </div>
    );
  }
}

export default App;
