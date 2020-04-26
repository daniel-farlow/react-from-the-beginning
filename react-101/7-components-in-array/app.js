let cards = data.map((courseData, index) => (
  <Card data={courseData} key={index}/>
))

console.log(cards)

ReactDOM.render(
  <div className="row">
    {cards}
  </div>,
  document.getElementById('root')
)