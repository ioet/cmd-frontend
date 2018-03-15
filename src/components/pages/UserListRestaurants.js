import React from 'react';
import { Container, Label, Button } from 'semantic-ui-react';
import { connect } from 'react-redux'
import { login } from '../../actions/auth'

import axios from 'axios'

class UserListRestaurants extends React.Component {
 
    // IMPLEMENTADO SOLO PARA PRUEBAS CON PASSPORT EN SERVIDOR. 
    logout1 = () => {
        axios.get('/api/restaurant/get?id=1').then((res) => {
            console.log(res.data)
        })
    }

    render() {

        return (
            <Container>
                <Label color='blue' size="huge" ribbon>LIST RESTAURANTS</Label>
                <Button 
                    color="blue"
                    size="large"
                    onClick={this.logout1}>
                    PRUEBA
                </Button>
            </Container>
        )
    }
};


function mapStateToProps(state) {
    return {
      role: state.user.role
    };
}

export default connect(mapStateToProps, { login })(UserListRestaurants);