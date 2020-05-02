import React from 'react';

class TextAreaInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textAreaValue: 'Please write an essay about your favorite DOM element.'
    };
  }

  handleChange = (event) => {
    console.log(`Essay being written: `, event.target.value);
    this.setState({
      textAreaValue: event.target.value
    });
  }

  handleSubmit = (event) => {
    alert('An essay was submitted: ' + this.state.textAreaValue);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Essay:
          <textarea value={this.state.textAreaValue} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default TextAreaInput;