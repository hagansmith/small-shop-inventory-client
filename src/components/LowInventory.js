import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

const LowInventory = () => {
    return (
            <Grid.Column width={8}>
                <h2>Low Inventory</h2>
                <Grid width={16}>
                        <Grid.Row>
                            <Grid.Column width={2}></Grid.Column>
                            <Grid.Column width={3}>Product Name</Grid.Column>
                            <Grid.Column width={3}>ISBN-13</Grid.Column>
                            <Grid.Column width={2}>1 Month</Grid.Column>
                            <Grid.Column width={2}>3 Month</Grid.Column>
                            <Grid.Column width={2}>6 Month</Grid.Column>
                        </Grid.Row>
                    </Grid>
                    <Grid width={16}>
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
                            <Grid.Column width={2}>
                                <h4 className="dateReordered">12</h4>
                            </Grid.Column>
                            <Grid.Column width={2}>
                                <h4 className="dateExpected">60</h4>
                            </Grid.Column>
                            <Grid.Column width={2}>
                                <h4 className="dateExpected">500</h4>
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
                            <Grid.Column width={2}>
                                <h4 className="dateReordered">12</h4>
                            </Grid.Column>
                            <Grid.Column width={2}>
                                <h4 className="dateExpected">60</h4>
                            </Grid.Column>
                            <Grid.Column width={2}>
                                <h4 className="dateExpected">500</h4>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>                
            </Grid.Column>
    )
}

export default LowInventory;