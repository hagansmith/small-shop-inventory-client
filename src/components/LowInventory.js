import React from 'react';
import { Grid } from 'semantic-ui-react';
import InventoryGrid from './InventoryGrid';

class LowInventory extends React.Component {
    render() {
        return (
            <Grid.Column width={8}>
                <h2>Low Inventory</h2>
                <Grid width={16}>
                    <Grid.Row>
                        <Grid.Column width={2}></Grid.Column>
                        <Grid.Column width={3}>Product Name</Grid.Column>
                        <Grid.Column width={3}>ISBN-13</Grid.Column>
                        <Grid.Column width={2}>Remaining</Grid.Column>
                        <Grid.Column width={2}>3 Month</Grid.Column>
                        <Grid.Column width={2}>6 Month</Grid.Column>
                    </Grid.Row>
                </Grid>
                {
                    Object
                        .keys(this.props.lowInventory)
                        .map(key => <InventoryGrid key={key} details={this.props.lowInventory[key]} />)
                }
            </Grid.Column>
        )
    }
}

export default LowInventory;