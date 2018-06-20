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
        this.getOnOrder = this.getOnOrderProducts.bind(this);
        this.getAllTheProducts = this.getAllTheProducts.bind(this);
        this.state = {
            allProducts: {},
            lowInventory: {},
            onOrderInventory: {}
        }
    }

    componentWillMount() {
        if (!sessionStorage.getItem('Token')) {
            this.timeout = setTimeout(() => {
                this.setState({ isOpen: false })
            }, 2500)
        }
        this.getAllTheProducts();
        this.getOnOrderProducts();
    };

    getAllTheProducts() {
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
    };

    getOnOrderProducts() {
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
                if (!response.ok) {
                    throw Error("request failed")
                }
                this.getOnOrderProducts();
                return response
            })
    };


    render() {
        return (
            <div>
                <Grid className="Grid" columns={2} padded>
                    <LowInventory lowInventory={this.state.lowInventory}/>
                    <InventoryOnOrder
                        onOrder={this.state.onOrderInventory}
                        addToOnOrder={this.addToOnOrder}
                        getOnOrder={this.getOnOrder}
                    />
                </Grid>
            </div>
        );
    }
}

export default Home;