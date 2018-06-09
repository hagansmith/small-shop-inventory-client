import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

class ProductGrid extends React.Component {
    editProduct(event, details) {
        event.preventDefault();
        var editedProduct = details;
        editedProduct.inventory_quantity = details.inventory_quantity.value;
        editedProduct.option2 = details.option2.value;
        console.log(editedProduct);
        fetch(`https://small-shop.azurewebsites.net/api/products/update`, {
            method: 'PUT',
            body: JSON.stringify(editedProduct),
            headers: {
                "Content-Type": "application/json"
              }
        })
        .then(response => {
            if (!response.ok) {
              throw Error("request failed")
            }
            return response
          })
    }

    deleteProduct(event, details) {
        fetch(`https://small-shop.azurewebsites.net/api/products/${details.variant_id}`, {
            method: 'DELETE'
        })
          .then(response => {
            if (!response.ok) {
              throw Error("request failed")
            }
            return response
          })
    }

    render() {
        const details = this.props.details;
        return (
            <form ref={(input) => this.productForm = details} className="product-edit" onSubmit={(e) => this.editProduct(e, this.props.details)}>
                <Grid width={16}>
                    <Grid.Row>
                        <Grid.Column width={2}>
                            {details.image ? <Image className="itemImage" src={details.image} /> : <h3> No Image </h3>}
                        </Grid.Column>
                        <Grid.Column width={3}>
                            {/* <input ref={(input) => details.title = input} type="text" defaultValue={details.title} placeholder="Product Title"/> */}
                            <h4 className="Title">{details.title}</h4>
                        </Grid.Column>
                        <Grid.Column width={2}>
                            <h4 className="type">{details.option1}</h4>
                        </Grid.Column>
                        <Grid.Column width={3}>
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
                        <Grid.Column width={2}>
                            <button type="submit"> Save Changes </button>
                            <button type="button" onClick={(e) => this.deleteProduct(e, this.props.details)}> DeleteProduct </button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </form>
        )
    }
}

export default ProductGrid;