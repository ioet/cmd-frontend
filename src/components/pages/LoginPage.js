import React from 'react';
import LoginForm from '../forms/LoginForm'
import { Segment, Label, Container } from 'semantic-ui-react';

import { connect } from 'react-redux'
import { login } from '../../actions/auth'

class LoginPage extends React.Component {

    submit = data => {
        this.props.login(data)
    }

    render() {
        return (
            <Container>
                <Segment raised>
                    <Label color='blue' size="huge" ribbon>Login Restaurank</Label>
                </Segment>
                <LoginForm submit={this.submit}/>
            </Container>
        )
    }
};

export default connect(null, { login })(LoginPage);