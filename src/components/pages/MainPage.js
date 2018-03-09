import React from 'react';
import { Container, Message } from 'semantic-ui-react';

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

export default MainPage;