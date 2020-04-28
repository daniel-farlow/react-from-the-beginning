import React from 'react';

class IllustratedBinding extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      unboundedClicks: 0,
      boundedClicks: 0
    }

    this.handleClickBound = this.handleClickBound.bind(this);
    //                                                |____|
    //                                                   ^----- React component instance
  }

  handleClickUnbound() { 
    this.setState((prevState, props) => ({
      unboundedClicks: prevState.unboundedClicks + 1
    }));
  }

  handleClickBound() { 
    this.setState((prevState, props) => ({
      boundedClicks: prevState.boundedClicks + 1
    }));
  }

  render() {
    return (
      <React.Fragment>
        {/*                v----------------- not an event handler (so never assigned as "listener")
                  |_________________| */}
        <p onLoad={console.log(this)}></p>

        <button onClick={this.handleClickUnbound}>handleClickUnbound</button>
        {/*             |_______________________|
                                    ^-------------- this.handleClickUnbound eventually assigned as            
                                                    "listener", thus losing context */}
        
        <button onClick={this.handleClickBound}>handleClickUnbound</button>
        {/*             |_____________________|
                                   ^--------------- this.handleClick eventually assigned as "listener", 
                                                    but context not lost since context was explicitly 
                                                    bound to the current "this" captured in the constructor
                                                    method (i.e., the React component instance) */}
      </React.Fragment>
    )
  }
}
 
export default IllustratedBinding;