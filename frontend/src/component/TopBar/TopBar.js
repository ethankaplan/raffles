import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, Button } from 'semantic-ui-react'

import * as routes from '../../constants/routes'

class TopBar extends Component {
    state = { 
        activeItem: 'home' 
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
      const { activeItem } = this.state
  
      return (
        <Menu inverted>
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
          <Menu.Item
            name='account'
            active={activeItem === 'account'}
            onClick={this.handleItemClick}
          />
        </Menu>
      )
    }
  }
  

export default TopBar