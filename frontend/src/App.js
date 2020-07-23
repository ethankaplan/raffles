import React, { Component } from 'react';
import { Switch, Route,withRouter,Redirect } from 'react-router-dom'


import Landing from './component/Landing/Landing'
import TopBar from './component/TopBar/TopBar'
import Enter from './component/Enter/Enter'

import './App.css';

import * as routes from './constants/routes'

class App extends Component {
state = {
  currentUser:{}

}
render(){
    return (
      <div className="width">
        
        <div class="bar"><TopBar currentUser={this.state.currentUser}/></div><br/>
        <Switch>
        <Route exact path={routes.HOME} render={() => <Landing />}/>
        <Route exact path={routes.LOGIN} render={() => <Enter activeItem='Log In'/>}/>
        <Route exact path={routes.REGISTER} render={() => <Enter activeItem='Register'/>}/>
        </Switch>
      </div>
    );
  }
}
export default withRouter(App);
