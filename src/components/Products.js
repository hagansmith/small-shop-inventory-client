import React from 'react';
import { Grid } from 'semantic-ui-react';
import ProductGrid from './ProductGrid';

class Products extends React.Component {
    constructor() {
        super();
        
        this.state = {
          allProducts: {},
        }
      }
    
      componentWillMount() {
        fetch(`https://small-shop.azurewebsites.net/api/products/variants`)
          .then(response => {
            if (!response.ok) {
              throw Error("request failed")
            }
            return response
          })
          .then(results => results.json())
          .then(results => {
            this.setState({
              allProducts: results
            })
          });
      }

    render(){
        return(
            <Grid.Column width={16}>
                <h2>All Products</h2>
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
                </Grid>
                {
                    Object
                        .keys(this.state.allProducts)
                        .map(key => <ProductGrid key={key} details={this.state.allProducts[key]} />)
                }
            </Grid.Column>
        )
    }
}

export default Products