let cards = data.map((courseData, index) => (
  <Card data={courseData} key={index}/>
))

console.log(cards)

ReactDOM.render(
  <div className="row">
    {cards}
    <PlayingCard value="12" suit="Spades"/>
  </div>,
  document.getElementById('root')
)