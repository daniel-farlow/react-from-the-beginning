import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import clearInventory from '../../actions/clearInventory';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  clearInventory = () => {
    this.props.clearInventory()
  }

  render() {
    const { frozenData, meatData, produceData } = this.props;

    return (
      <div>
        <h1>Quantity of items in Frozen Department: {sumInventory(frozenData)}</h1>
        <h1>Quantity of items in Meat Department: {sumInventory(meatData)}</h1>
        <h1>Quantity of items in Produce Department: {sumInventory(produceData)}</h1>
        <button onClick={this.clearInventory}>Reset All Inventory</button>
      </div>
    );
  }
}

function sumInventory(foodDept) {
  return foodDept.reduce((acc, foodItem) => {
    return acc + foodItem.quantity;
  }, 0)
}

function mapStateToProps(state) {
  return {
    frozenData: state.frozen,
    produceData: state.produce,
    meatData: state.meat,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    clearInventory
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
