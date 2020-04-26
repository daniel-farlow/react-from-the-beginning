class City extends React.Component {
  render() {
    const {image: cityImage, city: {name: cityName, price: cityPrice}} = this.props;

    return (
      <div className="city">
        <img src={cityImage} />
        <div className="city-name">{cityName}</div>
        <div className="city-price">{cityPrice}</div>
      </div>
    )
  }
}


