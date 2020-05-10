// imperative = mutate state whenever we want
// OOP = data and methods are encapsulated

class Deck {
  constructor() {
    this.deck = [];
  }

  createDeck() {
    const suits = ['h', 's', 'd', 'c'];
    for (let s = 0; s < 4; s++) {
      for (let c = 1; c <= 13; c++) {
        this.deck.push(c + suits[s])
      }
    }
  }

  shuffleDeck() {
    for (let i = 0; i < 10000; i++) {
      let cardOneIndex = Math.floor(Math.random() * this.deck.length);
      let cardTwoIndex = Math.floor(Math.random() * this.deck.length);
      [this.deck[cardTwoIndex], this.deck[cardOneIndex]] = [this.deck[cardOneIndex], this.deck[cardTwoIndex]];
    }
  }

  dealCard() {
    return this.deck.shift();
  }

}

const theDeck = new Deck();
theDeck.createDeck();
theDeck.shuffleDeck();
console.log(theDeck.deck);

const playerOneHand = theDeck.dealCard();
console.log(playerOneHand);