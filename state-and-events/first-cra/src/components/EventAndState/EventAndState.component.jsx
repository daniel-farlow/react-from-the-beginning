import React, { Component, Fragment } from 'react';

class EventAndState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleText: '',
      inputText: '',
    };
  }

  handleClick = (e) => {
    this.setState({
      titleText: 'Try some more possibilities!',
      inputText: e.target.value,
    });
  };

  handleChange = (e) => {
    this.setState({
      titleText: e.target.value,
      inputText: e.target.value,
    });
  };

  handleSubmit = (e) => {
    this.setState({
      titleText: 'React is so awesome!',
      inputText: '',
    });
    e.preventDefault();
  };

  render() {
    const { inputText, titleText: dynamicTitleText } = this.state;

    return (
      <Fragment>
        <h1>
          {dynamicTitleText === ''
            ? 'Start typing for a dynamic title!'
            : dynamicTitleText}
        </h1>
        <form onSubmit={this.handleSubmit}>
          <button onClick={this.handleClick} type="button">
            Click me to try more dynamic titles!
          </button>
          <input
            value={inputText}
            type="text"
            placeholder="Enter some text to change title!"
            onChange={this.handleChange}
          />
        </form>
      </Fragment>
    );
  }
}

export default EventAndState;
