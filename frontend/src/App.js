import React, { Component } from 'react';
import { Switch, Route,withRouter,Redirect } from 'react-router-dom'


import Landing from './component/Landing/Landing'
import TopBar from './component/TopBar/TopBar'
import Enter from './component/Login/Enter'

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
        <Route exact path={routes.HOME} render={() => <Landing/>}/>
        <Route exact path={routes.LOGIN} render={() => <Enter/>}/>
        </Switch>
      </div>
    );
  }
}
export default withRouter(App);
