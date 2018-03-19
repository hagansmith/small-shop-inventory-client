import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import '../styles/App.css';
import Header from './Header.js';
import Search from './Search.js';
import LowInventory from './LowInventory';
import InventoryOnOrder from './OnOrderInventory';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <p className="App-intro">
          Welcome to Small Shop Inventory
        </p>
        <Search/>
        <Grid>
          <LowInventory/>
          <InventoryOnOrder/>
        </Grid>
      </div>
    );
  }
}

export default App;
