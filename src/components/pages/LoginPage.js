import React from 'react';
import LoginForm from '../forms/LoginForm'
import { Segment, Label, Container } from 'semantic-ui-react';

class LoginPage extends React.Component {
  render() {
    return (
        <Container>
            <Segment raised>
                <Label color='blue' size="huge" ribbon>Login Restaurank</Label>
            </Segment>
            <LoginForm/>
        </Container>
    )
  }
};

export default LoginPage;