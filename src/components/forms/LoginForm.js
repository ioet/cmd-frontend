import React from 'react';
import PropTypes from "prop-types";
import { Form, Button } from 'semantic-ui-react';
import './LoginForm.css'

class LoginForm extends React.Component {

  state = {
    data: {
    	email: '',
    	password: ''
    }
  }

	onChange = e => this.setState({
		data: { ...this.state.data, [e.target.name]: e.target.value }
	})

  onSubmit = () => {
    this.props.submit(this.state.data)
	}

  render() {
    return (
        <Form onSubmit={this.onSubmit} > 
            <Form.Input 
                name="email"
                placeholder='Enter Email'
                onChange={this.onChange}
            />
            <Form.Input
              name="password"
              placeholder='Enter Password'
              onChange={this.onChange}
            />
            <Button id="buttonLogin" color="blue" size="large">Login</Button>
        </Form>
    )
  }
};

LoginForm.propTypes = {
	submit: PropTypes.func.isRequired
}

export default LoginForm;
