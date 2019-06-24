import React, { Component } from 'react';

import MovieLibrary from './component/MovieLibrary'


import Homepage from './component/Homepage';
import './App.css';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Homepage />
      </div>

    );
  }
}

export default App;
