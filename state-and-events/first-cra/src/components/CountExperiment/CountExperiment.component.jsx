import React from 'react';

class CountExperiment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState, props) => ({
      clicks: prevState.clicks + 1,
    }));
  }

  render() {
    return (
      <React.Fragment>
        <p onLoad={console.log(this)}></p>
        <button onClick={this.handleClick}>{this.state.clicks}</button>;
      </React.Fragment>
    )
  }
}

export default CountExperiment;
