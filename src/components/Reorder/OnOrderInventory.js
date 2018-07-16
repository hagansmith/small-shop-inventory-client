import React from 'react';
import { Grid, Table } from 'semantic-ui-react';
import OnOrderGrid from './OnOrderGrid';
import ReorderProduct from './ReorderProduct';

class InventoryOnOrder extends React.Component {
    render() {
        return (
            <Grid.Column width={8}>
                <h2>Inventory On Order</h2>
                <ReorderProduct addToOnOrder={this.props.addToOnOrder} getOnOrder={this.props.getOnOrder} onOrder={this.props.onOrder}/>
                <Table color='green' striped fixed>
                    <Table.Header>
                        <Table.Row textAlign='center'>
                            <Table.HeaderCell width={1}></Table.HeaderCell>
                            <Table.HeaderCell>Product Name</Table.HeaderCell>
                            <Table.HeaderCell>ISBN</Table.HeaderCell>
                            <Table.HeaderCell>Re-Order Date</Table.HeaderCell>
                            <Table.HeaderCell>Quantity On Order</Table.HeaderCell>
                            <Table.HeaderCell></Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>

                {
                    Object
                        .keys(this.props.onOrder)
                        .map(key => <OnOrderGrid key={key} details={this.props.onOrder[key]} getOnOrder={this.props.getOnOrder}/>)
                }
                    </Table.Body>
                </Table>
            </Grid.Column>
        )
    }
}

export default InventoryOnOrder;



