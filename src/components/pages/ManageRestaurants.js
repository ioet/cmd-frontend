import React from 'react';
import { Label, Container, Button } from 'semantic-ui-react';
import { connect } from 'react-redux'
import { logout } from '../../actions/auth'

import axios from 'axios'

class ManageRestaurants extends React.Component {

    redirect = () => {
        this.props.logout()
        this.props.history.push("/login")
    }

    // IMPLEMENTADO SOLO PARA PRUEBAS CON PASSPORT EN SERVIDOR. 
    logout1 = () => {
        axios.get('/api/restaurant/get?id=1').then((res) => {
            console.log(res.data)
        })
    }

    render() {
        return (
            <Container>
                <Label color='blue' size="huge" ribbon>MANAGE RESTAURANTS</Label>
                <Button 
                    color="blue"
                    size="large"
                    onClick={this.redirect}>
                    LOGOUT
                </Button>            
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
        user: state.user,
        role: state.user.role
    };
}

export default connect(mapStateToProps, { logout })(ManageRestaurants);
