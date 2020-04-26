import React, { Component } from 'react';

class StateInAction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Stat in Action!',
    };

    let self = this;

    setTimeout(function() {
      self.setState({
        text: 'State Changed!'
      })
    }, 3000)
  }

  render() {
    const { text } = this.state;

    return <h1>{text}</h1>;
  }
}

export default StateInAction;