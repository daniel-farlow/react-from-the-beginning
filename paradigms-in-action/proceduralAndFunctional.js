// procedural = no association between data and methods
// functional = pure functions with shared state

function createDeck() {
  const theDeck = [];
  const suits = ['h', 's', 'd', 'c'];
  for (let s = 0; s < 4; s++) {
    for (let c = 1; c <= 13; c++) {
      theDeck.push(c + suits[s])
    }
  }
  return theDeck;
}

// shuffle the deck
function shuffleDeck(deck) {
  const newDeck = [...deck];
  for (let i = 0; i < 10000; i++) {
    let cardOneIndex = Math.floor(Math.random() * newDeck.length);
    let cardTwoIndex = Math.floor(Math.random() * newDeck.length);
    [newDeck[cardTwoIndex], newDeck[cardOneIndex]] = [newDeck[cardOneIndex], newDeck[cardTwoIndex]];
  }
  return newDeck;
}

// we need some shared state
const theStore = () => {
  // this is where we keep our stuff! And nobody messes with it
  const state = {}; // rootReducer
  return {
    setState: (property, value) => state[property] = value,
    getState: (property) => state[property]
  }
}

function addCardToHand(hand, deck, index) {
  const newHand = [...hand];
  const newDeck = [...deck];
  newHand.push(newDeck[index]);
  return newHand;
}

const store = theStore();

const theDeck = createDeck();
const shuffledDeck = shuffleDeck(theDeck);

store.setState('deck', shuffledDeck);
store.setState('playersHand', []);
store.setState('placeInDeck', 0);

const playerHandAfterDeal = addCardToHand(
  store.getState('playersHand'),
  store.getState('deck'),
  store.getState('placeInDeck')
)

store.setState('playersHand', playerHandAfterDeal);
store.setState('placeInDeck', store.getState('placeInDeck') + 1);

console.log(store.getState('playersHand'))
