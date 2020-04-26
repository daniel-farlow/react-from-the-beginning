// ReactDOM.render here
ReactDOM.render(
  <div className="row">
    <Card data={data[0]} />
    <Card data={data[1]} />
    <Card data={data[2]} />
    <Card data={data[3]} />
    {/*<Card course={data[0].course} instructor={data[0].instructor} image={data[0].image} />
    <Card course={data[1].course} instructor={data[1].instructor} image={data[1].image} />
    <Card course={data[2].course} instructor={data[2].instructor} image={data[2].image} />
    <Card course={data[3].course} instructor={data[3].instructor} image={data[3].image} /> */}
  </div>,
  document.getElementById('root')
)