import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, Button, Dropdown, Input } from 'semantic-ui-react'

import * as routes from '../../constants/routes'
import './TopBar.css'

class TopBar extends Component {
    state = { 
        activeItem: 'home' 
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
      const { activeItem } = this.state
  
      return (
        <div >
        <Menu inverted borderless className="out">
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='raffles'
            active={activeItem === 'raffles'}
            onClick={this.handleItemClick}
          />
          <Menu.Item position='right'
            name='Register'
            active={activeItem === 'register'}
            onClick={this.handleItemClick}
          />
          <Menu.Item 
            name='Log In'
            active={activeItem === 'login'}
            onClick={this.handleItemClick}
          />
        </Menu>
        </div>
      )
    }
  }
  

export default TopBar