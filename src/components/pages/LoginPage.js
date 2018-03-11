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
            switch(this.props.user.role){
                case "super_admin":
                    this.props.history.push("/admin/restaurant/manage") 
                    break;
                case "admin":            
                    this.props.history.push("/admin/restaurant/edit/[id]") 
                    break;
                case "registered_user":
                    this.props.history.push("/user/restaurant/list") 
                    break;
                default:
                    this.props.history.push("/restaurant/list") 
            }
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

function mapStateToProps(state) {
    return {
        user: state.user,
        role: state.user.role
    };
}

export default connect(mapStateToProps, { login })(LoginPage);