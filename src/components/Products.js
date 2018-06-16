import React from 'react';
import { Grid, Loader } from 'semantic-ui-react';
import ProductGrid from './ProductGrid';
import { getProducts } from './Data.js'

class Products extends React.Component {
    constructor() {
        super();
        
        this.state = {
            loading: true,
            allProducts: {},
        }
      }
    
      componentWillMount() {
          getProducts()
          .then(response => {
            if (!response.ok) {
              throw Error("request failed")
            }
            return response
          })
          .then(results => results.json())
          .then(results => {
            this.setState({
                loading: false,
                allProducts: results
            })
          });
      }

    render(){
        return(
            <div>
            <header className="App-intro" as='h2'>All Products</header>
            <Grid.Column width={16}>
                {this.state.loading?
                    <Loader active inline='centered' /> :
                <Grid width={16}>
                    <Grid.Row>
                        <Grid.Column width={2}></Grid.Column>
                        <Grid.Column width={3}>Product Name</Grid.Column>
                        <Grid.Column width={2}>Product Type</Grid.Column>
                        <Grid.Column width={3}>ISBN-13</Grid.Column>
                        <Grid.Column width={2}>Inventory On Hand</Grid.Column>
                        <Grid.Column width={2}>Minimum Stock Level</Grid.Column>
                        {/* <Grid.Column width={2}>Location</Grid.Column> */}
                        
                    </Grid.Row>
                </Grid>}
                {
                    Object
                        .keys(this.state.allProducts)
                        .map(key => <ProductGrid key={key} details={this.state.allProducts[key]} loading={this.state.loading} />)
                }

            </Grid.Column>
            </div>
        )
    }
}

export default Products