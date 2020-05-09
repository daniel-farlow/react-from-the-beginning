import React, { Component } from 'react';
import { connect } from 'react-redux';
import updateFrozen from '../../actions/frozenInvUpdate';
import { bindActionCreators } from 'redux';

class FrozenDept extends Component {
  state = {};

  increment = (operation, index) => {
    this.props.updateFrozenInv(operation, index)
  }

  render() {
    const { frozenData } = this.props;
    const frozenInventory = frozenData.map((item, i) => (
      <div key={i}>
        <li>{item.food}: {item.quantity}</li>
        <input type="button" onClick={() => this.increment('+', i)} value='+' />
        <input type="button" onClick={() => this.increment('-', i)} value='-' />
      </div>
    ))
    return (
      <div>
        <h1>The frozen food department!</h1>
        <ul>
          {frozenInventory}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    frozenData: state.frozen
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    updateFrozenInv: updateFrozen
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FrozenDept);