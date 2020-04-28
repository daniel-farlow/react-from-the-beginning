import React from 'react';

class FourExamples extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOnWithoutBind: true,
      isToggleOnWithBind: true,
      isToggleOnWithArrow: true,
      isToggleOnWithArrowCallback: true,
    };

    // For explicit binding in Example 2, as we learned was needed
    this.handleClickWithBind = this.handleClickWithBind.bind(this);
  }

  handleClickWithoutBind() {
    this.setState((prevState, props) => ({
      isToggleOnWithoutBind: !prevState.isToggleOnWithoutBind
    }));
  }

  handleClickWithBind() {
    this.setState((prevState, props) => ({
      isToggleOnWithBind: !prevState.isToggleOnWithBind
    }))
  }

  handleClickWithArrow = () => {
    this.setState((prevState, props) => ({
      isToggleOnWithArrow: !prevState.isToggleOnWithArrow
    }));
  };

  handleClickWithArrowCallback() {
    this.setState((prevState, props) => ({
      isToggleOnWithArrowCallback: !prevState.isToggleOnWithArrowCallback
    }));
  }

  render() {
    const buttonMargin = {
      display: 'block',
      marginTop: '5px',
      marginBottom: '20px',
    };
    const divStyle = {
      textAlign: 'left',
      marginLeft: '10px',
      fontFamily: 'monospace',
      fontSize: '20px',
    };

    return (
      <div style={divStyle}>

        {/* Example 1 (incorrect!!!) */}
        handleClickWithoutBind:
        <button style={buttonMargin} onClick={this.handleClickWithoutBind}>
          {this.state.isToggleOnWithoutBind ? 'ON' : 'OFF'}
        </button>

        {/* Example 2 (use explicit binding: correct) */}
        handleClickWithBind:
        <button style={buttonMargin} onClick={this.handleClickWithBind}>
          {this.state.isToggleOnWithBind ? 'ON' : 'OFF'}
        </button>

        {/* Example 3 (exploit fact that arrow functions do not bind their own "this": correct) */}
        handleClickWithArrow:
        <button style={buttonMargin} onClick={this.handleClickWithArrow}>
          {this.state.isToggleOnWithArrow ? 'ON' : 'OFF'}
        </button>
        
        {/* Example 4 (works but not performant since different callback is created for each render) */}
        handleClickWithArrowCallback:
        <button style={buttonMargin} onClick={() => this.handleClickWithArrowCallback()}>
          {this.state.isToggleOnWithArrowCallback ? 'ON' : 'OFF'}
        </button>
      </div>
    );
  }
}

export default FourExamples;
