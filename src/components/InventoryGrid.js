import React from 'react';
import { Image, Table } from 'semantic-ui-react';


class InventoryGrid extends React.Component {
    constructor() {
        super();

        this.assessQty = this.assessQty.bind(this);
    }

    assessQty(qty){
       if (qty <= 0 )
           return true;
    }

    render() {
        const details = this.props.details;

        return (
                    <Table.Row key={details.id} negative={this.assessQty(details.inventory_quantity)}>
                        <Table.Cell>{details.image ? <Image className="itemImage" src={details.image} /> : <h3> No Image </h3>}</Table.Cell>
                        <Table.Cell><h4 className="productName">{details.title}</h4></Table.Cell>
                        <Table.Cell textAlign='center'><h4 className="productISBN">{details.sku}</h4></Table.Cell>
                        <Table.Cell textAlign='center'><h4 className="remaining">{details.inventory_quantity}</h4></Table.Cell>
                        <Table.Cell textAlign='center'><h4 className="threeMonth"></h4></Table.Cell>
                        <Table.Cell textAlign='center'><h4 className="sixMonth"></h4></Table.Cell>
                    </Table.Row>
        )
    }
}

export default InventoryGrid;