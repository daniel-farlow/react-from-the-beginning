class CatNav extends React.Component {
  // constructor w/super kind of unnecessary in this case
  // because we are not initializing state or binding methods
  constructor(props) {
    super(props);
  }

  render() {
    const { data: iconsAndTitles } = this.props;

    const iconsAndTitlesJSX = iconsAndTitles.map((iconAndTitle, index) => {
      const { icon, title } = iconAndTitle;
      return (
        <li className="cat-link left valign-wrapper" key={index}>
          <i className="material-icons">{icon}</i>{title}
        </li>
      )
    })

    return (
      <div className="row">
        <ul className="cat-nav center-align">
          {iconsAndTitlesJSX}
        </ul>
      </div>
    )
  }
}