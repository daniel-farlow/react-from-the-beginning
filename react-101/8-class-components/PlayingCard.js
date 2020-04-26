class PlayingCard extends React.Component {
  constructor(props) {
    super(props);
    console.log(props); // { value: "12", suit: "Spades" }
  }

  render() {
    const cardValueMap = {
      '1': 'ace',
      '2': 'two',
      '3': 'three',
      '4': 'four',
      '5': 'five',
      '6': 'six',
      '7': 'seven',
      '8': 'eight',
      '9': 'nine',
      '10': 'ten',
      '11': 'jack',
      '12': 'queen',
      '13': 'king'
    }

    const { suit, value } = this.props;
    const translatedValue = cardValueMap[value];
    const phrase = translatedValue.slice(0,1).toUpperCase() 
    + translatedValue.slice(1) 
    + ' of ' + suit;

    return(
      <p>This card is a {phrase}</p>
    )
  }
}