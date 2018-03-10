import React from 'react';
import { Label, Container } from 'semantic-ui-react';
import { connect } from 'react-redux'
import { login } from '../../actions/auth'

class ManageRestaurants extends React.Component {

    render() {
        return (
            <Container>
                <Label color='blue' size="huge" ribbon>MANAGE RESTAURANTS</Label>
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

export default connect(mapStateToProps, { login })(ManageRestaurants);