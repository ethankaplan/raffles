import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import {Grid, Container} from 'semantic-ui-react'

class Register extends Component {
  state = {
    username: '',
    password: '',
    password2:'',
    email:'',
    logged: false,
    message:''
  }

  changeHandler = e => {
    this.setState({
        [e.target.name]: e.target.value
    })
  };
/*
  onSubmit = async (e) => {
    e.preventDefault();
    console.log("here")

    const registerResponse = await fetch(`${process.env.REACT_APP_BACKEND_URL}/users/new`, {
        method: 'POST',
        credentials: 'include',
      //test  
        body: JSON.stringify(this.state),
        headers:{
            "Content-type" : 'application/json',
            'Access-Control-Allow-Origin':  window.location.origin,
            'Access-Control-Allow-Methods': 'POST',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization'
            
        }
    })

    const parsedResponse = await registerResponse.json();
    console.log(parsedResponse)
    if(parsedResponse.user) {
      this.props.doSetCurrentUser(parsedResponse.user)
        this.setState({
            logged: true,
        })
    }
    else{
      this.setState({
        message:parsedResponse.message
      })
    }
}
*/
  render() {
    const {username, password, email} = this.state
    
    return(
      <Container textAlign='center' style={{ margin: '1em 0em 0em', padding: '1em 0em' }}>
        {
          this.state.logged
            ? <Redirect to={`/users/view/${this.props.currentUser._id}`} />
            : <div>
              <h2>Register</h2>
              <p>{this.state.message}</p>
              <RegisterForm 
                changeHandler={this.changeHandler}
                onSubmit={this.onSubmit}
                username={username}
                password={password}
                email={email}
              /></div>
        }
      </Container>

    )
  }
}

const RegisterForm = ({changeHandler, onSubmit, username, password,email}) =>
<form onSubmit={onSubmit}>
          <Grid  >
          <Grid.Row columns={2} >
            <Grid.Column textAlign='right' >
              Username: 
              </Grid.Column>
              <Grid.Column textAlign='left'>
                <input type="text" name="username" value={username} onChange={changeHandler} />
            </Grid.Column>
            <Grid.Row columns={2} >
            <Grid.Column textAlign='right' >
              Username: 
              </Grid.Column>
              <Grid.Column textAlign='left'>
                <input type="text" name="email" value={email} onChange={changeHandler} />
            </Grid.Column>
            </Grid.Row>
            </Grid.Row><Grid.Row columns={2}>
            <Grid.Column textAlign='right'>
                Password: </Grid.Column> <Grid.Column textAlign='left'>
                <input type="password" name="password" value={password} onChange={changeHandler} />
                
            </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={2}>
            <Grid.Column textAlign='right'>
                Password Again: </Grid.Column> <Grid.Column textAlign='left'>
                <input type="password" name="password2" onChange={changeHandler} />
                
            </Grid.Column>
            </Grid.Row>
            </Grid><br/>
            <button type='submit'>Submit</button>
            
            
              </form>

export default Register