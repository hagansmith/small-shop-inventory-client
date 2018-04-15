import React from 'react';
import { Grid, Image, Button } from 'semantic-ui-react';

class OnOrderGrid extends React.Component {
    render() {
        const details = this.props.details;
        return (
            <Grid width={16}>
                {details.reorderDate !== "0001-01-01T00:00:00" ?
                    <Grid.Row>
                        <Grid.Column width={2}>
                            {details.image ? <Image className="itemImage" src={details.image} /> : <h3> No Image </h3>}
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <h4 className="productName">{details.title}</h4>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <h4 className="productISBN">{details.sku}</h4>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <h4 className="dateReordered">{details.reorderDate}</h4>
                        </Grid.Column>
                        <Grid.Column width={2}>
                            <h4 className="qtyOrdered">{details.orderedInventoryQty}</h4>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Button className="recieveInventory" size='small'>Receive Inventory</Button>
                        </Grid.Column>
                    </Grid.Row>
                : <h2></h2>}
            </Grid>
        )
    }
}
export default OnOrderGrid;