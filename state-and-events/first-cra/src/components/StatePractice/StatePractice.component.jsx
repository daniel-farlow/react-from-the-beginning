import React, { Component } from 'react';

class StatePractice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'You agree to our terms of service by filling out the form.',
      dynamicTitle: '',
      inputText: '',
      imageWidth: '',
      termsAcknowledged: false,
    };
    this.textInput = React.createRef();
  }

  handleMouseEnter = (e) => {
    this.setState(
      {
        dynamicTitle: 'New dynamic title inbound!',
        inputText: '',
      },
      () => {
        this.textInput.current.focus();
      }
    );
  };

  handleFocus = (e) => {
    if (!this.state.termsAcknowledged) {
      alert(this.state.message);
    }
    this.setState((prevState, props) => ({
      termsAcknowledged:
        prevState.termsAcknowledged || !prevState.termsAcknowledged,
    }));
  };

  handleChange = (e) => {
    this.setState({
      dynamicTitle: e.target.value,
      inputText: e.target.value,
    });
  };

  handleImgLoad = (e) => {
    this.setState(
      {
        imageWidth: e.target.width,
      },
      () =>
        this.state.imageWidth > 100
          ? console.log(`Your image is big! (${this.state.imageWidth}px)`)
          : null
    );
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.setState({
      dynamicTitle: 'Thanks for submitting! Try a new one!',
      inputText: '',
    });
  };

  render() {
    const { inputText, dynamicTitle, imageWidth } = this.state;

    return (
      <form action="" onSubmit={this.handleFormSubmit}>
        <h3 onMouseEnter={this.handleMouseEnter}>
          {dynamicTitle === ''
            ? 'Type a message to begin! (or hover over this title at any time to begin a new one)'
            : dynamicTitle}
        </h3>
        <button style={{ cursor: 'pointer' }}>Click to submit!</button>
        <br />
        <textarea
          style={
            imageWidth === ''
              ? { display: 'none' }
              : { width: imageWidth + 'px', margin: 10 }
          }
          type="text"
          value={inputText}
          onChange={this.handleChange}
          onFocus={this.handleFocus}
          placeholder="Type new message here"
          ref={this.textInput}
        />
        <br />
        <img src="binary-people.jpg" alt="" onLoad={this.handleImgLoad} />
      </form>
    );
  }
}

export default StatePractice;