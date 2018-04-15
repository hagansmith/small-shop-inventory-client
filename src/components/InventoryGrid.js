import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

class InventoryGrid extends React.Component {
    render() {
        const details = this.props.details;
        return (
            <Grid width={16}>
                <Grid.Row>
                    <Grid.Column width={2}>
                        {details.image ? <Image className="itemImage" src={details.image}/> : <h3> No Image </h3>}
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <h4 className="Title">{details.title}</h4>
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <h4 className="productISBN">{details.sku}</h4>
                    </Grid.Column>
                    <Grid.Column width={2}>
                        <h4 className="remaining">{details.remaining}</h4>
                    </Grid.Column>
                    <Grid.Column width={2}>
                        <h4 className="threeMonth"></h4>
                    </Grid.Column>
                    <Grid.Column width={2}>
                        <h4 className="sixMonth"></h4>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

export default InventoryGrid;