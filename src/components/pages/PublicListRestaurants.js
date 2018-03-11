import React from 'react';
import { Container, Label, Button } from 'semantic-ui-react';

class PublicListRestaurants extends React.Component {

    redirect = () => {
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
                    Login
                </Button>
            </Container>
        )
    }
};

export default PublicListRestaurants;