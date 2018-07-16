import React from 'react';
import { Image, Popup, Button, Table, Input } from 'semantic-ui-react';
import {updateProduct, deactivateItem, activateItem} from '../Services/Data';

class ProductGrid extends React.Component {
    constructor() {
        super();

        this.state = {
            message: '',
            isOpen: false,
            isWorking: false,
            open: false,
        }
    }

    open = () => this.setState({open: true});
    close = () => this.setState({open: false});

    savedMessage() {
        this.setState({message: 'Saved'});
        setTimeout(() => {
            this.setState({isOpen: false})
        }, 2500)
    }

    deletedMessage() {
        this.setState({message: 'Status Changed'});
        setTimeout(() => {
            this.setState({isOpen: false})
        }, 2500)
    }

    editProduct(event, editedProduct) {
        event.preventDefault();
        this.setState({message: 'Saving...', isOpen: true});
        updateProduct(editedProduct)
            .then(response => {
                if (!response.ok) {
                    this.setState({message: 'There was an error saving', isOpen: true})
                }
                this.savedMessage();
                return response
            })
    }

    deactivateProduct(e, details) {
        this.setState({isWorking: true});
        deactivateItem(e, details)
            .then(response => {
                if (!response.ok) {
                    this.setState({message: 'There was an error changing', isOpen: true})
                }
                this.deletedMessage();
                this.setState({isWorking: false});
                return response
            }).then(
                details.active = false
        )
    }

    activateProduct(e, details) {
        this.setState({isWorking: true});
        activateItem(e, details)
            .then(response => {
                if (!response.ok) {
                    this.setState({message: 'There was an error changing', isOpen: true})
                }
                this.deletedMessage();
                this.setState({isWorking: false});
                return response
            }).then(
            details.active = true
        )
    }


    render() {
        const {details, index} = this.props;
        let editedProduct = {};
        editedProduct.id = details.id;
        editedProduct.inventory_quantity = details.inventory_quantity;
        editedProduct.option2 = details.option2;
        editedProduct.location = details.option3;
        return (
             !this.props.showAll ?
                details.active ?
                <Table.Row key={details.key}>
                    <Table.Cell>{details.image_id ? <Image className="itemImage" src={details.image_id}/> :
                        <h3> No Image </h3>}</Table.Cell>
                    <Table.Cell><h4 className="Title">{details.title}</h4></Table.Cell>
                    <Table.Cell textAlign='center'><h4 className="type">{details.option1}</h4></Table.Cell>
                    <Table.Cell textAlign='center'><h4 className="productISBN">{details.sku}</h4></Table.Cell>
                    <Table.Cell textAlign='center'>
                        <Input ref={(input) => details.inventory_quantity = input}
                               type="text"
                               defaultValue={details.inventory_quantity}
                               placeholder="Inventory Quantity"
                               onChange={(input) => editedProduct.inventory_quantity = input.target.value}
                        />
                    </Table.Cell>
                    <Table.Cell textAlign='center'>
                        <Input ref={(input) => details.option2 = input}
                               type="text"
                               defaultValue={details.option2}
                               placeholder="Minimum Inv. Qty."
                               onChange={(input) => editedProduct.option2 = input.target.value}
                        />
                    </Table.Cell>
                    <Table.Cell textAlign='center'>
                        <Input ref={(input) => details.option3 = input}
                               type="text"
                               defaultValue={details.option3}
                               placeholder="Location"
                               onChange={(input) => editedProduct.option3 = input.target.value}
                        />
                    </Table.Cell>
                    <Table.Cell textAlign='center'>
                        <Button.Group vertical widths={'1'}>
                            <Popup className='save'
                                   content={this.state.message}
                                   open={this.state.isOpen} position='top left'
                                   trigger={<Button type="submit"
                                                    color='green'
                                                    size='small'
                                                    onClick={(e) => this.editProduct(e, editedProduct)}
                                   >
                                       Save Changes
                                   </Button>
                                   }
                            />
                            {details.active ?
                                <Button className='deactivate'
                                        type="button"
                                        color='red'
                                        size='small'
                                        disabled={this.state.isWorking}
                                        onClick={(e) => this.deactivateProduct(e, details, index)}
                                >
                                    Deactivate
                                </Button> :
                                <Button className='activate'
                                        type="button"
                                        color='yellow'
                                        size='small'
                                        disabled={this.state.isWorking}
                                        onClick={(e) => this.activateProduct(e, details, index)}
                                >
                                    Activate
                                </Button>
                            }
                            />
                        </Button.Group>
                    </Table.Cell>
                    </Table.Row> : null
                :  <Table.Row key={details.key}>
                    <Table.Cell>{details.image_id ? <Image className="itemImage" src={details.image_id}/> :
                        <h3> No Image </h3>}</Table.Cell>
                    <Table.Cell><h4 className="Title">{details.title}</h4></Table.Cell>
                    <Table.Cell textAlign='center'><h4 className="type">{details.option1}</h4></Table.Cell>
                    <Table.Cell textAlign='center'><h4 className="productISBN">{details.sku}</h4></Table.Cell>
                    <Table.Cell textAlign='center'>
                        <Input ref={(input) => details.inventory_quantity = input}
                               type="text"
                               defaultValue={details.inventory_quantity}
                               placeholder="Inventory Quantity"
                               onChange={(input) => editedProduct.inventory_quantity = input.target.value}
                        />
                    </Table.Cell>
                    <Table.Cell textAlign='center'>
                        <Input ref={(input) => details.option2 = input}
                               type="text"
                               defaultValue={details.option2}
                               placeholder="Minimum Inv. Qty."
                               onChange={(input) => editedProduct.option2 = input.target.value}
                        />
                    </Table.Cell>
                    <Table.Cell textAlign='center'>
                        <Input ref={(input) => details.option3 = input}
                               type="text"
                               defaultValue={details.option3}
                               placeholder="Location"
                               onChange={(input) => editedProduct.option3 = input.target.value}
                        />
                    </Table.Cell>
                    <Table.Cell textAlign='center'>
                        <Button.Group vertical widths={'1'}>
                            <Popup className='save'
                                   content={this.state.message}
                                   open={this.state.isOpen} position='top left'
                                   trigger={<Button type="submit"
                                                    color='green'
                                                    size='small'
                                                    onClick={(e) => this.editProduct(e, editedProduct)}
                                   >
                                       Save Changes
                                   </Button>
                                   }
                            />
                            {details.active ?
                                <Button className='deactivate'
                                        type="button"
                                        color='red'
                                        size='small'
                                        disabled={this.state.isWorking}
                                        onClick={(e) => this.deactivateProduct(e, details, index)}
                                >
                                    Deactivate
                                </Button> :
                                <Button className='activate'
                                        type="button"
                                        color='yellow'
                                        size='small'
                                        disabled={this.state.isWorking}
                                        onClick={(e) => this.activateProduct(e, details, index)}
                                >
                                    Activate
                                </Button>
                            }
                            />
                        </Button.Group>
                    </Table.Cell>
                </Table.Row>
        )
    }
}

export default ProductGrid;