import React from 'react';
import { Grid, Image, Popup, Button, Segment, Dimmer, Loader } from 'semantic-ui-react';
import { updateProduct, deleteItem } from './Data';



class ProductGrid extends React.Component {
    constructor() {
        super();

        this.state = {
            message: '',
            isOpen: false,
            isWorking: false
        }
    }

    savedMessage(){
        this.setState({message: 'Saved'});
        setTimeout(() => {
            this.setState({ isOpen: false })
        }, 2500)
    }

    deltedMessage(){
        this.setState({message: 'Deleted'});
        setTimeout(() => {
            this.setState({ isOpen: false })
        }, 2500)
    }

    editProduct(event, details) {
        event.preventDefault();

        this.setState({message: 'Saving...', isOpen:true})

        let editedProduct = {};
        editedProduct.id = details.id;
        editedProduct.inventory_quantity = details.inventory_quantity.value;
        editedProduct.option2 = details.option2.value;
        editedProduct.location = details.option3.value;
        updateProduct(editedProduct)
        .then(response => {
            if (!response.ok) {
              this.setState({message: 'There was an error saving', isOpen:true})
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
                this.setState({message: 'There was an error deleting', isOpen:true})
            }
            this.deltedMessage();
            return response
          })
    }

    render() {
        const details = this.props.details;
        return (
            <div>
                {this.props.loading? <Segment>
                    <Dimmer active>
                        <Loader>Loading</Loader>
                    </Dimmer>
                </Segment> :
            <form className="product-edit" onSubmit={(e) => this.editProduct(e, this.props.details)}>
                <Grid width={16}>
                    <Grid.Row>
                        <Grid.Column width={1}>
                            {details.image_id ? <Image className="itemImage" src={details.image_id} /> : <h3> No Image </h3>}
                        </Grid.Column>
                        <Grid.Column width={3}>
                            {/* <input ref={(input) => details.title = input} type="text" defaultValue={details.title} placeholder="Product Title"/> */}
                            <h4 className="Title">{details.title}</h4>
                        </Grid.Column>
                        <Grid.Column width={1}>
                            <h4 className="type">{details.option1}</h4>
                        </Grid.Column>
                        <Grid.Column width={2}>
                            {/* <input ref={(input) => details.sku = input} type="text" defaultValue={details.sku} placeholder="SKU"/> */}
                            <h4 className="productISBN">{details.sku}</h4>
                        </Grid.Column>
                        <Grid.Column width={2}>
                            <input ref={(input) => details.inventory_quantity = input} type="text" defaultValue={details.inventory_quantity} placeholder="Inventory Quantity"/>
                            {/* <h4 className="remaining">{details.inventory_quantity }</h4> */}
                        </Grid.Column>
                        <Grid.Column width={2}>
                            <input ref={(input) => details.option2 = input} type="text" defaultValue={details.option2} placeholder="Minimum Inv. Qty."/>
                        </Grid.Column>
                        <Grid.Column width={1}>
                            <input ref={(input) => details.option3 = input} type="text" defaultValue={details.option3} placeholder="Location"/>
                        </Grid.Column>
                        <Grid.Column width={3} >
                            <Popup className='save'
                                   content={this.state.message}
                                   open={this.state.isOpen} position='top left'
                                   trigger={<Button type="submit">Save Changes</Button>}
                            />
                            <Popup className='delete'
                                   content={this.state.message}
                                   open={this.state.isOpen} position='top left'
                                   trigger={<Button className='delete' type="button" disabled={this.state.isWorking} onClick={(e) => this.deleteProduct(e, this.props.details)}> Delete Product </Button>}
                            />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </form>}
            </div>
        )
    }
}

export default ProductGrid;