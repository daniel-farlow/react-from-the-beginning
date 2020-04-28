import React, { Component, Fragment } from 'react';
import Card from '../Card/Card.component';

class CardSet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenCards: [],
    };
  }

  saveCourse = (index) => {
    this.setState((prevState, props) => ({
      chosenCards: [...prevState.chosenCards, props.cards[index]]
    }));
  }

  render() {
    let { cards } = this.props;
    let {chosenCards} = this.state;
    
    const savedCards = chosenCards.map((card, i) => (
      <Card key={i}  card={card} />
    ))

    
    const cardList = cards.map((card, i) => (
      <div className="col s2" key={i}>
        <Card card={card}/>
        <button className="btn waves-light waves-effect" onClick={() => this.saveCourse(i)}>Save</button>
      </div>
    ));

    return (
      <Fragment>
        {cardList}
        {savedCards}
      </Fragment>
    )
  }
}

export default CardSet;
