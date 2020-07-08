import React, { Component } from 'react';
import { Switch, Route,withRouter,Redirect } from 'react-router-dom'


import Landing from './component/Landing/Landing'
import TopBar from './component/TopBar/TopBar'


import './App.css';

import * as routes from './constants/routes'

class App extends Component {
state = {
  currentUser:{}

}
render(){
    return (
      <div>
        
        <div class="bar"><TopBar currentUser={this.state.currentUser}/></div><br/>
        <Switch>
        <Route exact path={routes.HOME} render={() => <Landing/>}/>
        </Switch>
      </div>
    );
  }
}
export default withRouter(App);
