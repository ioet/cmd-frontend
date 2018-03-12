import React from 'react';
import PropTypes from "prop-types"
import { Label, Container, Button } from 'semantic-ui-react';
import { connect } from 'react-redux'
import { logout } from '../../actions/auth'

import axios from 'axios'

class ManageRestaurants extends React.Component {

    logout = () => {
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
                    onClick={this.logout}>
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

ManageRestaurants.propTypes = {
    logout: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        user: state.user,
        role: state.user.role
    };
}

export default connect(mapStateToProps, { logout })(ManageRestaurants);
