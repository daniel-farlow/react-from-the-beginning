import React, { Component } from 'react';
import { connect } from 'react-redux';
import updateProduce from '../../actions/produceInvUpdate';
import { bindActionCreators } from 'redux';

class ProduceDept extends Component {
  state = {};

  increment = (operation, index) => {
    this.props.updateProduceInv(operation, index);
  }

  render() {
    const { produceData } = this.props;
    const produceInventory = produceData.map((item, i) => (
      <div key={i}>
        <li>{item.food}: {item.quantity}</li>
        <input type="button" onClick={() => this.increment('+', i)} value='+' />
        <input type="button" onClick={() => this.increment('-', i)} value='-' />
      </div>
    ))
    return (
      <div>
        <h1>The produce food department!</h1>
        <ul>
          {produceInventory}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    produceData: state.produce
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    updateProduceInv: updateProduce
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ProduceDept);