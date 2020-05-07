import React, { Component } from 'react';
import MultiCard from '../MultiCard/MultiCard.component';
import RegularCard from '../RegularCard/RegularCard.component';
import RandomWeighted from '../RandomWeighted/RandomWeighted.component';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class FlashCard extends Component {
  constructor(props) {
    super(props);
    this.apiHostRoot = `https://aws-services.robertbunch.dev/services`;
    this.state = {
      flipClass: '',
      questionData: ''
    };
  }

  flip = e => {
    this.setState((prevState, props) => ({
      flipClass: prevState.flipClass === '' ? 'flip' : ''
    }));
  }

  newCard = async () => {
    console.log('I got called!')
    const {cardStyle, notReady, nowReady} = this.props;
    notReady();
    let path;

    switch(cardStyle) {
      case 'Weighted':
        path = this.apiHostRoot + '/weighted';
        break;
      case 'Random':
      case 'Regular':
        path = this.apiHostRoot + '/all';
        break;
      case 'Multi':
        path = this.apiHostRoot + '/multi';
        break;
      default:
        path = this.apiHostRoot + '/all';
        break;
    }

    let newCardInfo = await axios.get(path);
    this.setState({
      flipClass: '',
      questionData: {...newCardInfo.data}
    }, () => nowReady());
  }

  componentDidMount() {
    this.newCard();
  }

  componentDidUpdate(prevProps, prevState) {
    const {cardStyle, cardRequestTime} = this.props;
    if (prevProps.cardStyle !== cardStyle || prevProps.cardRequestTime !== cardRequestTime) {
      this.newCard();
    }
  }

  render() {
    const {flipClass, questionData} = this.state;
    const {cardStyle, flashCardDataLoaded} = this.props;
    
    if (!flashCardDataLoaded) {
      return (
        <div className="spinner-wrapper">
          <FontAwesomeIcon icon='spinner' size='6x' spin />
        </div>
      )
    }

    const newCardProps = { questionData };
    let card;

    switch(cardStyle) {
      case 'Weighted':
      case 'Random':
        card = <RandomWeighted {...newCardProps} />
        break;
      case 'Regular':
        card = <RegularCard {...newCardProps} />
        break;
      case 'Multi':
        card = <MultiCard {...newCardProps} />
        break;
      default:
        return;
    }

    return (
        <div className="flashcard-with-button">
          <div className="row align-items-center card-holder">
            <div onClick={this.flip} className={`col-sm-6 offset-sm-3 card mb-3 ${flipClass}`} >
              {card}
            </div>
          </div>
          <div onClick={this.newCard} className="btn btn-primary btn-lg">Next Question!</div>
        </div>
    );
  }
}

export default FlashCard;
