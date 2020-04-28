import React, { Component, Fragment } from 'react';

class SimpleEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: 'stateActivated',
    };
  }

  handleClick() {
    console.log('Test');
  }

  handleChange(e) {
    console.log(e.target.value);
  }

  handleSubmit() {
    console.log('Form submitted!')
  }

  render() {
    return (
      <Fragment>
        <form onSubmit={this.handleSubmit}>
          <button onClick={this.handleClick}>Click me!</button>
          <input
            type="text"
            placeholder="Enter some text!"
            onChange={this.handleChange}
          />
        </form>
      </Fragment>
    );
  }
}

export default SimpleEvent;
