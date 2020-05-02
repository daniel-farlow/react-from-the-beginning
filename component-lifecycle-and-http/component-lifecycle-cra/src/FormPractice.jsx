import React, { Component } from 'react';

class FormPractice extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log('form submitted')
    const name = document.getElementById('name').value;
    console.log(name)
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s6 offset-sm-3">
            <form onSubmit={this.handleSubmit}>
              <input type="text" placeholder="Enter a name" />
              <input type="submit" value="submit" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default FormPractice;
