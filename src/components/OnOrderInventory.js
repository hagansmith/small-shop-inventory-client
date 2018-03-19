import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

const InventoryOnOrder = () => {
    return (
            <Grid.Column width={8}>
                <h2>Inventory On Order</h2>
                    <Grid width={16}>
                        <Grid.Row>
                            <Grid.Column width={2}></Grid.Column>
                            <Grid.Column width={3}>Product Name</Grid.Column>
                            <Grid.Column width={3}>ISBN-13</Grid.Column>
                            <Grid.Column width={3}>Re-Order Date</Grid.Column>
                            <Grid.Column width={3}>Arrival Date</Grid.Column>
                        </Grid.Row>
                    </Grid>
                    <Grid width={16}>
                        <Grid.Row>
                            <Grid.Column width={2}>
                                <Image className="itemImage" src='https://cdn.shopify.com/s/files/1/0119/6682/products/EofEVSG_Front_Cvr_AMAZON.jpg?v=1478532387'/>
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <h4 className="productName">Epic Of Eden</h4>
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <h4 className="productISBN">1234567890123</h4>
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <h4 className="dateReordered">1/11/18</h4>
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <h4 className="dateExpected">2/12/18</h4>
                            </Grid.Column>
                        </Grid.Row>

                        <Grid.Row>
                            <Grid.Column width={2}>
                                <Image className="itemImage" src='https://cdn.shopify.com/s/files/1/0119/6682/products/EofEVSG_Front_Cvr_AMAZON.jpg?v=1478532387' />
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <h4 className="productName">Epic Of Eden</h4>
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <h4 className="productISBN">1234567890123</h4>
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <h4 className="dateReordered">1/11/18</h4>
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <h4 className="dateExpected">2/12/18</h4>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
            </Grid.Column>  
    )
}

export default InventoryOnOrder;