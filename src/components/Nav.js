import React, { Component } from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'

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


// const MainNav = () => {
//     return (
//         <menu className="Main-menu">
//             <button> Recieve Inventory </button>
//             <button> Cycle Count </button>
//             <button> Remove Inventory </button>
//             <button onClick={this.AdminNav}> Administration </button>
//         </menu>
//     );
    
// }

// const AdminNav = () => {
//     return (
//         <menu className="Admin-drop-down">
//             <button> Add Location </button>
//             <button> Remove Location </button>
//             <button> Edit Location </button>
//         </menu>
//     )
// }

// export default MainNav;