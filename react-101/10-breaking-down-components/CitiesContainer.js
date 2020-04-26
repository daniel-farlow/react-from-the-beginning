class CitiesContainer extends React.Component {
  render() {
    const {data} = this.props;
    const cities = data.map((city, index) => {
      const randomImage = `https://source.unsplash.com/random/${400 + index}x300`
      // const randomImage = `http://lorempixel.com/${400 + i}/300/city/`
      return (
        <City city={city} image={randomImage} key={index} />
      )
    })
    return (
      <div className="row">
        <div className="cities center-align">
          {cities}
        </div>
      </div>
    )
  }
}
