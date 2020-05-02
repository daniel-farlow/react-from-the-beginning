import React from 'react';

class SelectInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectionValue: 'coconut'
    };
  }

  handleChange = (event) => {
    console.log(`Flavor selected: `, event.target.value)
    this.setState({
      selectionValue: event.target.value
    });
  }

  handleSubmit = (event) => {
    alert('Selection value submitted: ' + this.state.selectionValue);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default SelectInput;