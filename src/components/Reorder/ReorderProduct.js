import React from 'react';
import { Input, Button } from 'semantic-ui-react';
import { addProductToReorder } from "../Services/Data";

class ReorderProduct extends React.Component {
    addTo(event) {
        event.preventDefault();
        let sku = this.sku.inputRef.value;
        let count = this.orderedInventory.inputRef.value;

        addProductToReorder(sku)
            .then(response => {
                if (!response.ok) {
                    throw Error("request failed")
                }
                return response;
                }).then(results => results.json())
                .then(results => {
                    this.props.addToOnOrder(results.id, count);
                    this.productForm.reset();
                })

    }

    render() {
        return (
            <form ref={(input) => this.productForm = input} className="on-order" onSubmit={(e) => this.addTo(e)}>
                <Input ref={(input) => this.sku = input} size='small' placeholder="ISBN" />
                <Input ref={(input) => this.orderedInventory = input} size='small' placeholder="Quantity" />
                <Button type="submit" size='small'>Reorder</Button>
            </form>
        )
    }
}

export default ReorderProduct;