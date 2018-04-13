import React from 'react';
import { Container, Label, Button } from 'semantic-ui-react';
import { connect } from 'react-redux'
import { logout } from '../../actions/auth'

class UserListRestaurants extends React.Component {

    redirect = () => {
        this.props.logout()
        this.props.history.push("/login")
    }

    render() {

        return (
            <Container>
                <Label color='blue' size="huge" ribbon>LIST RESTAURANTS</Label>
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

export default connect(mapStateToProps, { logout })(UserListRestaurants);
