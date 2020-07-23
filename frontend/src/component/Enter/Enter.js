import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import {Menu, GridColumn,Segment} from 'semantic-ui-react'

import './Enter.css'
import Login from './Login'
import Register from './Register'

class Enter extends Component{
    state = { activeItem: '' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    componentDidMount(){
      this.setState({
        activeItem:this.props.activeItem
      })
    }
    componentDidUpdate(prevProps){
      if(this.props.activeItem!=prevProps.activeItem){
        this.setState({
          activeItem:this.props.activeItem
        })
      }
    }
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
            {
            this.state.activeItem == 'Log In' ? <Login/> : <Register/>

            }
            
          </Segment>
        </div>
      )
    }
}
export default Enter