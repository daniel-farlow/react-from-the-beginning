import React, { Component } from 'react';
import { connect } from 'react-redux';

class FrozenDept extends Component {
  state = {};

  render() {
    console.log(this.props.localNameForStateFromRootReducer);
    return <h1>The frozen food department!</h1>;
  }
}

function mapStateToProps(state) {
  return {
    localNameForStateFromRootReducer: state.frozen,
  };
}

export default connect(mapStateToProps)(FrozenDept);



