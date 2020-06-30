import React, { Component } from 'react';
import { Switch, Route,withRouter,Redirect } from 'react-router-dom'


import Landing from './component/Landing/Landing'
import './App.css';

import * as routes from './constants/routes'

class App extends Component {
state = {


}
render(){
    return (
      <div>
    <Route exact path={routes.HOME} render={() => <Landing/>}/>
      </div>
    );
  }
}
export default withRouter(App);
