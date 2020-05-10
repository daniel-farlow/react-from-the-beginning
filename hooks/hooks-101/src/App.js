import React, {useState} from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  return(
    <div>
      <div>Counter: {counter}</div>
      <button onClick={() => setCounter(counter + 1)}>Add One!</button>
    </div>
  )
}

// CLASS VERSION BELOW

// class App extends React.Component {
//   state = { counter: 0 }
//   updateCounter = () => {
//     this.setState((prevState, props) => ({
//       counter: prevState.counter + 1
//     }));
//   }
//   render() {
//     return(
//       <div>
//         <div>Counter: {this.state.counter}</div>
//         <button onClick={this.updateCounter}>Add One!</button>
//       </div>
//     )
//   }
// }

export default App;
