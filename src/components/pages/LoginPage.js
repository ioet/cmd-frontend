import React from 'react';
import LoginForm from '../forms/LoginForm'
import { Segment, Label, Container } from 'semantic-ui-react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { login } from '../../actions/auth'

import './LoginPage.css'

class LoginPage extends React.Component {

    submit = data => this.props.login(data)
        .then(() => {
            //this.props.history.push("/restaurants-list")
            this.props.history.push("/super-admin/manage-restaurants") 
        })

    render() {
        return (
            <Container>
                <Segment id="header" raised>
                    <Label color='blue' size="huge" ribbon>Login Restaurank</Label>
                </Segment>
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