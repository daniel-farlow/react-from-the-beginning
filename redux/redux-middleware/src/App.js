import React from 'react';
import './App.css';
import Weather from './components/Weather/Weather.component';
import WarmOrNot from './components/WarmOrNot/WarmOrNot.component';

function App() {
  return (
    <div className="App">
      <WarmOrNot />
      <Weather />
    </div>
  );
}

export default App;
