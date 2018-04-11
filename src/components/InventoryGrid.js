import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

class InventoryGrid extends React.Component {
    render() {
        const details = this.props.details;
        return (
            <Grid width={16}>
                <Grid.Row>
                    <Grid.Column width={2}>
                        <Image className="itemImage" />
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <h4 className="Title">{details.title}</h4>
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <h4 className="productISBN">{details.id}</h4>
                    </Grid.Column>
                    <Grid.Column width={2}>
                        <h4 className="oneMonth"></h4>
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