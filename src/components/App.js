import React from 'react';
import { Grid } from 'semantic-ui-react';
import '../styles/App.css';
import Header from './Header.js';
import Search from './Search.js';
import LowInventory from './LowInventory';
import InventoryOnOrder from './OnOrderInventory';


class App extends React.Component {
  constructor() {
    super();
    
    this.addToOnOrder = this.addToOnOrder.bind(this);
    this.state = {
      lowInventory: {},
    }
  }

  componentWillMount() {
    fetch(`https://649c403b.ngrok.io/api/products`)
      .then(response => {
        if (!response.ok) {
          throw Error("request failed")
        }
        return response
      })
      .then(results => results.json())
      .then(results => {
        this.setState({
          lowInventory: results
        })
      });
  }

  addToOnOrder(sku, count){
    fetch(`https://649c403b.ngrok.io/api/products/${sku}/${count}`, {
      method: 'PATCH'
  })
    .then(response => {
      if (!response.ok) {
        throw Error("request failed")
      }
      return response
    })
  };

  render() {
    return (
      <div className="App">
        <Header />
        <p className="App-intro">
          Welcome to Small Shop Inventory
        </p>
        <Search />
        <Grid>
          <LowInventory lowInventory={this.state.lowInventory} />
          <InventoryOnOrder 
            lowInventory={this.state.lowInventory}
            addToOnOrder={this.addToOnOrder}
          />
        </Grid>
      </div>
    );
  }
}

export default App;
