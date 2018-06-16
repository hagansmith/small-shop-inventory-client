import React from 'react';
import {Grid} from 'semantic-ui-react';
import '../styles/App.css';
import LowInventory from './LowInventory';
import InventoryOnOrder from './OnOrderInventory';
import {getAllProducts, getProductsOnOrder, addReorder} from "./Data";


class Home extends React.Component {
    constructor() {
        super();

        this.addToOnOrder = this.addToOnOrder.bind(this);
        this.getOnorderProducts = this.getOnorderProducts.bind(this);
        this.state = {
            allProducts: {},
            lowInventory: {},
            onOrderInventory: {}
        }
    }

    componentWillMount() {
        getAllProducts()
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

        this.getOnorderProducts();
    }

    getOnorderProducts() {
        getProductsOnOrder()
            .then(response => {
                if (!response.ok) {
                    throw Error("request failed")
                }
                return response
            })
            .then(results => results.json())
            .then(results => {
                this.setState({
                    onOrderInventory: results
                })
            });
    }

    addToOnOrder(variantId, count) {
        addReorder(variantId, count)
            .then(response => {
                console.log(response);
                if (!response.ok) {
                    throw Error("request failed")
                }
                return response
            })
    };


    render() {
        return (
            <div>
                <header className="App-intro">Welcome to Small Shop Inventory</header>
                {/* <Search results={this.state.lowInventory}/> */}
                <Grid className="Grid">
                    <LowInventory lowInventory={this.state.lowInventory}/>
                    <InventoryOnOrder
                        onOrder={this.state.onOrderInventory}
                        addToOnOrder={this.addToOnOrder}
                        getOnorderProducts={this.getOnorderProducts}
                    />
                </Grid>
            </div>
        );
    }
}

export default Home;