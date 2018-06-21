import React, { Component } from 'react'
import { Dropdown, Menu, Rail } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { Auth, AuthButton } from './AuthService'

export default class MainNav extends Component {
  render() {
    return (
      <Menu className="Main-menu" pointing secondary>
        <Menu.Item className="main-menu-item" name='Inventory Overview' as={Link} to='/' />
        {/* <Menu.Item className="main-menu-item" name='Recieve Inventory' />
        <Menu.Item className="main-menu-item" name='Cycle Count' />
        <Menu.Item className="main-menu-item" name='Remove Inventory' /> */}
        <Menu.Item className="main-menu-item" name='Products' as={Link} to='/products' />
        {/* <Dropdown className="main-menu-item" item text='Locations'>
            <Dropdown.Menu>
                <Dropdown.Item>Add Location</Dropdown.Item>
                <Dropdown.Item>Remove Location</Dropdown.Item>
                <Dropdown.Item>Edit Location</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown> */}
          { Auth.isAuthenticated ? <AuthButton /> : ''}
      </Menu>
    )
  }
}