// imperative = mutate state whenever we want to
// procedural = no association between data and methods/functions

// make a deck of cards
let theDeck = [];
let playerOneHand = [];
let playerTwoHand = [];

function createDeck() {
  const suits = ['h', 's', 'd', 'c'];
  for (let s = 0; s < 4; s++) {
    for (let c = 1; c <= 13; c++) {
      theDeck.push(c + suits[s])
    }
  }
}

// shuffle the deck
function shuffleDeck() {
  for (let i = 0; i < 10000; i++) {
    let cardOneIndex = Math.floor(Math.random() * theDeck.length);
    let cardTwoIndex = Math.floor(Math.random() * theDeck.length);
    [theDeck[cardTwoIndex], theDeck[cardOneIndex]] = [theDeck[cardOneIndex], theDeck[cardTwoIndex]];
  }
}

createDeck();
shuffleDeck();

// deal a card
playerOneHand.push(theDeck.shift());

console.log(theDeck)