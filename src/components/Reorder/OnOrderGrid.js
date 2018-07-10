import React from 'react';
import { Image, Button, Header, Modal, Input, Table } from 'semantic-ui-react';
import { receiveInventoryToStock } from '../Services/Data';

class OnOrderGrid extends React.Component {

    receiveInventory(event, details) {
        event.preventDefault();
        var count = details.remaining["0"].value;
        var id = details.id;

        receiveInventoryToStock(id, count)
            .then(response => {
                if (!response.ok) {
                    throw Error("request failed")
                }
                this.props.getOnOrder();
                return response
            })
    }



    render() {
        const details = this.props.details;
        let date = Date.parse(details.reorderDate);
        let reorderDate = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit'}).format(date);
        return (
                // {details.reorderDate !== "0001-01-01T00:00:00" ?
                    <Table.Row key={details.id}>
                        <Table.Cell>{details.image ? <Image className="itemImage" src={details.image} /> : <h3> No Image </h3>}</Table.Cell>
                        <Table.Cell><h4 className="productName">{details.title}</h4></Table.Cell>
                        <Table.Cell textAlign='center'><h4 className="productISBN">{details.sku}</h4></Table.Cell>
                        <Table.Cell textAlign='center'><h4 className="dateReordered">{reorderDate}</h4></Table.Cell>
                        <Table.Cell textAlign='center'><h4 className="qtyOrdered">{details.orderedInventoryQty}</h4></Table.Cell>
                        <Table.Cell><Modal trigger={<Button className="recieveInventoryModal" size='small'>Receive Inventory</Button>}>
                            <Modal.Header>{details.title}</Modal.Header>
                            <Modal.Content image>
                                <Image wrapped size='medium' src={details.image} />
                                <Modal.Description>
                                    <Header>Reorder Information</Header>
                                    <p>{details.orderedInventoryQty} were ordered on {reorderDate}</p>
                                    <p>How many are you reciveing?</p>
                                    <form ref={(input) => details.remaining = input}className="receive" onSubmit={(e) => this.receiveInventory(e, this.props.details,)}>
                                        <Input ref={(input) => details.remaining = input} size='small' placeholder="Quantity"/>
                                        <Button type="submit" size='small'>Receive Inventory</Button>
                                    </form>
                                </Modal.Description>
                            </Modal.Content>
                        </Modal>
                    </Table.Cell>
                    </Table.Row>
                    // : <h2></h2>
        )
    }
}


export default OnOrderGrid;