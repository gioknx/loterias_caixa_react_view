import React, { Component } from 'react';
import './App.css';

var ResultsContainer = require('./containers/resultsContainer');


class App extends Component {
  render() {
    return (
      <div className="App">
        <ResultsContainer/>
      </div>
      );
  }
}

export default App;
