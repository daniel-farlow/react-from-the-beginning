import React, { Component } from 'react';
import Activity from '../Activity/Activity.component';

class Activities extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 

    const activities = this.props.activities.map((activity, i) => (
      <div className="col s2" key={i}>
        <Activity activity={activity} />
      </div>
    ))

    return (  
      <div className="activities">
        <h1 className='main-header-text'>{this.props.header}</h1>
        {activities}
      </div>
    );
  }
}
 
export default Activities;