import React from 'react';
import { Container, Message } from 'semantic-ui-react';
import { connect } from 'react-redux'
import { login } from '../../actions/auth'

class MainPage extends React.Component {

    render() {

        return (
            <Container>
                <Message>
                    <Message.Header>User connected successfully</Message.Header>
                </Message>   
            </Container>
        )
    }
};


function mapStateToProps(state) {
    return {
      role: state.user.role
    };
}

export default connect(mapStateToProps, { login })(MainPage);