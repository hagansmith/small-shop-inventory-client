import React from 'react';
import { Input, Button } from 'semantic-ui-react';

class AddReorderProduct extends React.Component {
    addTo(event){
        event.preventDefault();
        let sku = this.sku.inputRef.value;
        let count = this.orderedInventory.inputRef.value;

        fetch(`https://649c403b.ngrok.io/api/products/${this.sku.inputRef.value}`)
        .then(response => {
          if (!response.ok) {
            throw Error("request failed")
          }
          return response
        }).then(
            this.props.addToOnOrder(sku, count)
        )
    }


      

    render(){
        return (
            <form ref={(input) => this.productForm = input}className="on-order" onSubmit={(e) => this.addTo(e)}>
                <Input ref={(input) => this.sku = input} size='small' placeholder="ISBN"/>
                <Input ref={(input) => this.orderedInventory = input} size='small' placeholder="Quantity"/>
                <Button type="submit" size='small'>Add to On Order</Button>
            </form>
        )
    }
}

export default AddReorderProduct;