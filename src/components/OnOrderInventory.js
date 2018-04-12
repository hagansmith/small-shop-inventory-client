import React from 'react';
import { Grid } from 'semantic-ui-react';
import OnOrderGrid from './OnOrderGrid';

class InventoryOnOrder extends React.Component {
    render() {
        return (
            <Grid.Column width={8}>
                <h2>Inventory On Order</h2>
                <Grid width={16}>
                    <Grid.Row>
                        <Grid.Column width={2}></Grid.Column>
                        <Grid.Column width={3}>Product Name</Grid.Column>
                        <Grid.Column width={3}>ISBN-13</Grid.Column>
                        <Grid.Column width={3}>Re-Order Date</Grid.Column>
                        <Grid.Column width={3}>Arrival Date</Grid.Column>
                    </Grid.Row>
                </Grid>
                {
                    Object
                        .keys(this.props.lowInventory)
                        .map(key => <OnOrderGrid key={key} details={this.props.lowInventory[key]} />)
                }
            </Grid.Column>
        )
    }
}

export default InventoryOnOrder;