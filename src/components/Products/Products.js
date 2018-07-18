import React from 'react';
import { Loader, Table, Header, Button } from 'semantic-ui-react';
import ProductGrid from './ProductGrid';
import { getProducts } from '../Services/Data.js';
import _ from 'lodash';

class Products extends React.Component {
    constructor() {
        super();

        this.getTheProducts = this.getTheProducts.bind(this);
        this.state = {
            loading: true,
            allProducts: {},
            column: null,
            direction: null,
            showAllProducts: false,
            color: 'grey'
        }
      }
    
      componentWillMount() {
          this.getTheProducts();
      }

      getTheProducts() {
          getProducts()
              .then(response => {
                  if (!response.ok) {
                      throw Error("request failed")
                  }
                  return response
              })
                  .then(results => results.json())
                  .then(results => {
                      this.setState({
                          loading: false,
                          allProducts: results
                      })
                  });
          }

    handleSort = clickedColumn => () => {
        const { column, allProducts, direction } = this.state;

        if (column !== clickedColumn) {
            this.setState({
                column: clickedColumn,
                allProducts: _.sortBy(allProducts, [clickedColumn]),
                direction: 'ascending',
            });

            return
        }

        this.setState({
            allProducts: allProducts.reverse(),
            direction: direction === 'ascending' ? 'descending' : 'ascending',
        })
    };

    handleShowAllProducts = () => {
        !this.state.showAllProducts
            ? this.setState({showAllProducts: true, color: 'blue'})
            : this.setState({showAllProducts: false, color: 'grey'})
    };

    render(){
        const { column, allProducts, direction, showAllProducts, color } = this.state;
        return(
            <div>
            <Header className="App-intro" as='h2'>All Products</Header>
                {this.state.loading?
                    <Loader active inline='centered' /> :
                    <Table basic striped fixed sortable>
                        <Table.Header>
                            <Table.Row textAlign='center'>
                                <Table.HeaderCell width={1}></Table.HeaderCell>
                                <Table.HeaderCell sorted={column === 'title' ? direction : null}
                                                  onClick={this.handleSort('title')}>Title</Table.HeaderCell>
                                <Table.HeaderCell sorted={column === 'option1' ? direction : null}
                                                  onClick={this.handleSort('option1')}>Type</Table.HeaderCell>
                                <Table.HeaderCell sorted={column === 'sku' ? direction : null}
                                                  onClick={this.handleSort('sku')}>ISBN</Table.HeaderCell>
                                <Table.HeaderCell sorted={column === 'inventory_quantity' ? direction : null}
                                                  onClick={this.handleSort('inventory_quantity.input.target.value')}>Available</Table.HeaderCell>
                                <Table.HeaderCell sorted={column === 'option2' ? direction : null}
                                                  onClick={this.handleSort('option2.input.target.value')}>Reorder Level</Table.HeaderCell>
                                <Table.HeaderCell sorted={column === 'option3' ? direction : null}
                                                  onClick={this.handleSort('option3.input.target.value')}>Location</Table.HeaderCell>
                                <Table.HeaderCell> <Button active={showAllProducts} color={color} onClick={this.handleShowAllProducts}>Show all products</Button></Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {Object
                                .keys(allProducts)
                                .map(key => <ProductGrid key={key}
                                                         index={key}
                                                         details={allProducts[key]}
                                                         loading={this.state.loading}
                                                         showAll={this.state.showAllProducts}
                                            />
                                )
                            }
                        </Table.Body>
                    </Table>}
            </div>
        )
    }
}

export default Products

