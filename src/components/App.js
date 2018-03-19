import React, { Component } from 'react';
import '../styles/App.css';
import Header from './Header.js';
import Search from './Search.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <p className="App-intro">
          Welcome to Small Shop Inventory
        </p>
        <Search/>
      </div>
    );
  }
}

export default App;
