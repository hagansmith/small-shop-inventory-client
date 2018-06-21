import React from 'react';
import { Image, Table } from 'semantic-ui-react';


class InventoryGrid extends React.Component {
    constructor() {
        super();

        this.assessNegative = this.assessNegative.bind(this);
        this.assessWarning = this.assessWarning.bind(this);
    }

    assessWarning(qty){
        if (qty < 15 && qty >5){
            return true;
        }
    }

    assessNegative(qty){
       if (qty < 5 )
           return true;
    }

    render() {
        const details = this.props.details;
        return (
                    <Table.Row key={details.id} negative={this.assessNegative(details.inventory_quantity)} warning={this.assessWarning(details.inventory_quantity)}>
                        <Table.Cell>{details.image ? <Image className="itemImage" src={details.image} /> : <h3> No Image </h3>}</Table.Cell>
                        <Table.Cell><h4 className="productName">{details.title}</h4></Table.Cell>
                        <Table.Cell textAlign='center'><h4 className="productISBN">{details.sku}</h4></Table.Cell>
                        <Table.Cell textAlign='center'><h4 className="remaining">{details.inventory_quantity}</h4></Table.Cell>
                        {/*<Table.Cell textAlign='center'><h4 className="threeMonth"></h4></Table.Cell>*/}
                        {/*<Table.Cell textAlign='center'><h4 className="sixMonth"></h4></Table.Cell>*/}
                    </Table.Row>
        )
    }
}

export default InventoryGrid;