import React, {Component} from 'react'
import {Container} from 'semantic-ui-react'

class Landing extends Component{
    render(){
        return(
            <Container textAlign='center'>
                <div>
                    <h1>Hello!</h1>
                </div><p/>
                <div>
                    <input type="text" id="input-box" />
                    <input type="submit" id="submit-btn" />  
                </div>

            </Container>
        )





    }
}
export default Landing