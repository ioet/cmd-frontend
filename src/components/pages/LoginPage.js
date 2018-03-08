import React from 'react';
import LoginForm from '../forms/LoginForm'
import { Segment, Label, Container, Message } from 'semantic-ui-react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { login } from '../../actions/auth'

import './LoginPage.css'

class LoginPage extends React.Component {

    user = {
        connected: false
    }

    submit = data => this.props.login(data).then(() => {
        this.user.connected = true
        this.props.history.push("/")
    });

    render() {
        return (
            <Container>
                <Segment id="header" raised>
                    <Label color='blue' size="huge" ribbon>Login Restaurank</Label>
                </Segment>
                { this.user.connected && (
                    <Message>
                        <Message.Header>User connected successfully</Message.Header>
                    </Message>
                )}
                <LoginForm submit={this.submit}/>
            </Container>
        )
    }
};

LoginPage.propTypes = {
	history: PropTypes.shape({
		push: PropTypes.func.isRequired
	}).isRequired,
	login: PropTypes.func.isRequired
}

export default connect(null, { login })(LoginPage);