import React from 'react';
import { Loader, Table } from 'semantic-ui-react';
import ProductGrid from './ProductGrid';
import { getProducts } from './Data.js';
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

    render(){
        const { column, allProducts, direction } = this.state;
        return(
            <div>
            <header className="App-intro" as='h2'>All Products</header>
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
                                                  onClick={this.handleSort('inventory_quantity')}>Available</Table.HeaderCell>
                                <Table.HeaderCell sorted={column === 'option2' ? direction : null}
                                                  onClick={this.handleSort('option2')}>Reorder Level</Table.HeaderCell>
                                <Table.HeaderCell sorted={column === 'option3' ? direction : null}
                                                  onClick={this.handleSort('option3')}>Location</Table.HeaderCell>
                                <Table.HeaderCell></Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {Object
                                .keys(allProducts)
                                .map(key => <ProductGrid key={key}
                                                         details={allProducts[key]}
                                                         loading={this.state.loading}/>
                                )
                            }
                        </Table.Body>
                    </Table>}
            </div>
        )
    }
}

export default Products

