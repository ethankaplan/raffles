import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, Button, Dropdown, Input } from 'semantic-ui-react'

import * as routes from '../../constants/routes'
import './TopBar.css'

class TopBar extends Component {
    state = { 
        activeItem: '' 
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
          ><NavLink exact to={routes.HOME} activeClassName="selected">Home</NavLink></Menu.Item>
          <Menu.Item
            name='raffles'
            active={activeItem === 'raffles'}
            onClick={this.handleItemClick}
          />
          <Menu.Item position='right'
            name='Register'
            active={activeItem === 'register'}
            onClick={this.handleItemClick}
          ><NavLink to={'/register'} activeClassName="selected">Register</NavLink></Menu.Item>
          <Menu.Item 
            name='Log In'
            active={activeItem === 'login'}
            onClick={this.handleItemClick}
          ><NavLink to={'/login'} activeClassName="selected">Login</NavLink></Menu.Item>
        </Menu>
        </div>
      )
    }
  }
  

export default TopBar