import React from 'react';
import { Label, Container, Button } from 'semantic-ui-react';
import { connect } from 'react-redux'
import { logout } from '../../actions/auth'

class ManageRestaurants extends React.Component {

    redirect = () => {
        this.props.logout()
        this.props.history.push("/login")
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
