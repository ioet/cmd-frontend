import React from 'react';
import { Container, Label } from 'semantic-ui-react';
import { connect } from 'react-redux'
import { login } from '../../actions/auth'

class UserListRestaurants extends React.Component {

    render() {

        return (
            <Container>
                <Container>
                    <Label color='blue' size="huge" ribbon>LIST RESTAURANTS</Label>
                </Container>  
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