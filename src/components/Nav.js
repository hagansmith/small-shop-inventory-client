import React, { Component } from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'

export default class MainNav extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu className="Main-menu">
        <Menu.Item className="main-menu-item" name='Recieve Inventory' active={activeItem === 'recieve'} onClick={this.handleItemClick} />
        <Menu.Item className="main-menu-item" name='Cycle Count' active={activeItem === 'cycle'} onClick={this.handleItemClick} />
        <Menu.Item className="main-menu-item" name='Remove Inventory' active={activeItem === 'remove'} onClick={this.handleItemClick} />
        <Menu.Item className="main-menu-item" name='Products' active={activeItem === 'products'} onClick={this.handleItemClick} />
        <Dropdown className="main-menu-item" item text='Locations'>
            <Dropdown.Menu>
                <Dropdown.Item>Add Location</Dropdown.Item>
                <Dropdown.Item>Remove Location</Dropdown.Item>
                <Dropdown.Item>Edit Location</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
      </Menu>
    )
  }
}