import React from 'react';
import { Loader, Table, Header, Button } from 'semantic-ui-react';
import CustomerGrid from './CustomerGrid';
import { getCustomers } from '../Services/Data.js';
import _ from 'lodash';

class Customers extends React.Component {
    constructor() {
        super();

        this.getTheCustomers = this.getTheCustomers.bind(this);
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
          this.getTheCustomers();
      }

      getTheCustomers() {
          getCustomers()
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
                      console.log(results);
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
                                <Table.HeaderCell sorted={column === 'last_name' ? direction : null}
                                                  onClick={this.handleSort('last_name')}>Name</Table.HeaderCell>
                                <Table.HeaderCell sorted={column === 'orders_count' ? direction : null}
                                                  onClick={this.handleSort('orders_count')}>Order Count</Table.HeaderCell>
                                <Table.HeaderCell sorted={column === 'orders_total' ? direction : null}
                                                  onClick={this.handleSort('orders_total')}>Orders Total</Table.HeaderCell>
                                <Table.HeaderCell sorted={column === 'city' ? direction : null}
                                                  onClick={this.handleSort('city')}>City</Table.HeaderCell>
                                <Table.HeaderCell sorted={column === 'state' ? direction : null}
                                                  onClick={this.handleSort('state')}>State</Table.HeaderCell>
                                <Table.HeaderCell sorted={column === 'zip' ? direction : null}
                                                  onClick={this.handleSort('zip')}>Zip</Table.HeaderCell>
                                <Table.HeaderCell>
                                    {/*<Button active={showAllProducts} color={color} onClick={this.handleShowAllProducts}>Show all products</Button>*/}
                                </Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {Object
                                .keys(allProducts)
                                .map(key => <CustomerGrid key={key}
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

export default Customers

