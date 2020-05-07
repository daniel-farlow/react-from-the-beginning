import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';

// import Dashboard from '../Dashboard/Dashboard.component';
// import Layout from '../Layout/Layout.component';

const Home = (props) => {
  const {title} = props;
  console.log(props)
  setTimeout(() => {
    // props.history.push('/help')
    props.history.goBack()
  }, 2000)
  return ( 
    <Fragment>
      <h1>Home! {title}</h1>
    </Fragment>
  );
}
 
export default Home;