import React from 'react';
import { Image, Popup, Button, Table, Input } from 'semantic-ui-react';
import {updateProduct, deleteItem} from './Data';


class ProductGrid extends React.Component {
    constructor() {
        super();

        this.state = {
            message: '',
            isOpen: false,
            isWorking: false,
            open: false
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

    deltedMessage() {
        this.setState({message: 'Deleted'});
        setTimeout(() => {
            this.setState({isOpen: false})
        }, 2500)
    }

    editProduct(event, editedProduct) {
        event.preventDefault();
        this.setState({message: 'Saving...', isOpen: true})
        console.log(editedProduct);
        updateProduct(editedProduct)
            .then(response => {
                if (!response.ok) {
                    this.setState({message: 'There was an error saving', isOpen: true})
                }
                this.savedMessage();
                return response
            })
    }

    deleteProduct(e, details) {
        this.setState({isWorking: true});
        deleteItem(e, details)
            .then(response => {
                if (!response.ok) {
                    this.setState({message: 'There was an error deleting', isOpen: true})
                }
                this.deltedMessage();
                return response
            })
    }

    console(e, input) {
        console.log(e, input);
    }

    render() {
        const details = this.props.details;
        let editedProduct = {};
        editedProduct.id = details.id;
        editedProduct.inventory_quantity = '';
        editedProduct.option2 = '';
        editedProduct.location = '';
        return (
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
                        <Button className='delete'
                                type="button"
                                color='red'
                                size='small'
                                disabled={this.state.isWorking}
                                onClick={(e) => this.deleteProduct(e, this.props.details)}
                               >
                                   Delete Product
                               </Button>

                        />
                    </Button.Group>
                </Table.Cell>
            </Table.Row>
        )
    }
}

export default ProductGrid;