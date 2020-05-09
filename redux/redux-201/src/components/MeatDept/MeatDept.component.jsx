import React, { Component } from 'react';
import { connect } from 'react-redux';
import updateMeat from '../../actions/meatInvUpdate';
import { bindActionCreators } from 'redux';

class MeatDept extends Component {
  state = {};

  increment = (operation, index) => {
    this.props.updateMeatInv(operation, index);
  }

  render() {
    const { meatData } = this.props;
    const meatInventory = meatData.map((item, i) => (
      <div key={i}>
        <li>{item.food}: {item.quantity}</li>
        <input type="button" onClick={() => this.increment('+', i)} value='+' />
        <input type="button" onClick={() => this.increment('-', i)} value='-' />
      </div>
    ))
    return (
      <div>
        <h1>The meat food department!</h1>
        <ul>
          {meatInventory}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    meatData: state.meat
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    updateMeatInv: updateMeat
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MeatDept);