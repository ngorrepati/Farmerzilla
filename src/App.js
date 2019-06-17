import React from 'react';
import './App.css';
import Spinach from './Spinach/spinach';
import Radishes from './Radishes/radishes'

class App extends React.Component {
  render() {
    return (
      <div id='app'>
        <Spinach />
        <Radishes />
      </div>
    );
  };
}

export default App;
