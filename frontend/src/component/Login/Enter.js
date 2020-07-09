import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import {Menu, GridColumn,Segment} from 'semantic-ui-react'

import './Enter.css'

class Enter extends Component{
    state = { activeItem: 'Register' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
      const { activeItem } = this.state
  
      return (
        <div class="mainbox">
          <Menu attached='top' tabular widths={2}>
            <Menu.Item
              name='Register'
              active={activeItem === 'Register'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='Log In'
              active={activeItem === 'Log In'}
              onClick={this.handleItemClick}
            />
          </Menu>
  
          <Segment attached='bottom'>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly believable.
            If you are going to use a passage of Lorem Ipsum, you need to be sure
            there isn't anything embarrassing hidden in the middle of text. All
            the Lorem Ipsum generators on the Internet tend to repeat predefined
            chunks as necessary, making this the first true generator on the
            Internet. It uses a dictionary of over 200 Latin words, combined with
            a handful of model sentence structures, to generate Lorem Ipsum which
            looks reasonable. The generated Lorem Ipsum is therefore always free
            from repetition, injected humour, or non-characteristic words etc.
          </Segment>
        </div>
      )
    }
}
export default Enter