import React from 'react';

class SingleInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      singleInputValue: ''
    };
  }

  handleChange = (event) => {
    console.log(`Single event: `, event.target.value)
    this.setState({
      singleInputValue: event.target.value
    });
  }

  handleSubmit = (event) => {
    alert('A name was submitted: ' + this.state.singleInputValue);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.singleInputValue} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default SingleInput;