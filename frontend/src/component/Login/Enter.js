import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import {Grid, GridColumn,Container} from 'semantic-ui-react'

import './Enter.css'

class Enter extends Component{
    state={

    }

    render(){

        return(
            <div class="mainbox">
            <Container>
                <Grid textAlign='center' celled>
                    <Grid.Row>
                    <Grid.Column  width={8}>
                        <p>REGISTER</p>
                    </Grid.Column>
                    <Grid.Column  width={8}>
                        <p>LOGIN</p>
                    </Grid.Column>
                    </Grid.Row>
                </Grid>



            </Container>
            </div>

        )
    }
}
export default Enter