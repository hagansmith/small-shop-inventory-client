import _ from 'lodash';
import React, { Component } from 'react';
import { Search, Grid } from 'semantic-ui-react';

export default class SearchProducts extends Component {

  componentWillMount() {
    this.resetComponent()
  }

  resetComponent = () => this.setState({ isLoading: false, results: [], value: '' })

  handleResultSelect = (e, { result }) => this.setState({ value: result.title })

  handleSearchChange = (e, { value }) => {

    this.setState({ isLoading: true, value })

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent()

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = result => re.test(result.title)
      ;
      this.setState({
        isLoading: false,
        results: _.filter(this.props.results, isMatch),
      })
    }, 500)
  }

  render() {
    const { isLoading, value, results } = this.state
    return (
      <Grid>
        <Grid.Column width={16}>
          <Search
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={this.handleSearchChange}
            results={this.state.results}
            value={value}
            {...this.state}
          />
        </Grid.Column>
      </Grid>
    )
  }
}
