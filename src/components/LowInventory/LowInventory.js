import React from 'react';
import { Grid, Table } from 'semantic-ui-react';
import InventoryGrid from './InventoryGrid';
import SearchProducts from "../Services/Search";

class LowInventory extends React.Component {
    render() {
        return (
            <Grid.Column width={8}>
                <h2>Low Inventory</h2>
                <SearchProducts results={this.props.lowInventory}/>
                <Table color='yellow' striped fixed>
                    <Table.Header>
                        <Table.Row textAlign='center'>
                            <Table.HeaderCell width={2}></Table.HeaderCell>
                            <Table.HeaderCell>Product Name</Table.HeaderCell>
                            <Table.HeaderCell>ISBN</Table.HeaderCell>
                            <Table.HeaderCell width={2}>Remaining</Table.HeaderCell>
                            {/*<Table.HeaderCell width={2}>3 Month</Table.HeaderCell>*/}
                            {/*<Table.HeaderCell width={2}>6 Month</Table.HeaderCell>*/}
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                {
                    Object
                        .keys(this.props.lowInventory)
                        .map(key => <InventoryGrid key={key} details={this.props.lowInventory[key]} />)
                }

                    </Table.Body>
                </Table>
            </Grid.Column>
        )
    }
}

export default LowInventory;