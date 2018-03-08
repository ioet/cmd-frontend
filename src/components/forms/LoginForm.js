import React from 'react';
import PropTypes from "prop-types";
import { Form, Button, Message } from 'semantic-ui-react';
import Validator from 'validator';
import InlineError from '../messages/InlineError'
import './LoginForm.css'

class LoginForm extends React.Component {

  state = {
    data: {
    	email: '',
    	password: ''
    },
    errors: {}
  }

	onChange = e => this.setState({
		data: { ...this.state.data, [e.target.name]: e.target.value }
	})

  onSubmit = () => {
    const errors = this.validate(this.state.data);
    this.setState({errors});
    if(Object.keys(errors).length === 0){
      this.props
        .submit(this.state.data)
        .catch(err => this.setState( { errors: err.response.data.errors } ))
    }  
	}

  validate = (data) => {
		const errors = {};
		if(!Validator.isEmail(data.email)) errors.email = "Invalid email";
		if (!data.password) errors.password = "Can't be blank";
		return errors;
	}

  render() {
    const { errors } = this.state;
    return (
        <Form onSubmit={this.onSubmit} > 
            { errors.global && (
              <Message negative>
                <Message.Header>Something went wrong</Message.Header>
                <p>{errors.global}</p>
              </Message>
            )}
            {errors.email && <InlineError text={errors.email}/>}
            <Form.Input 
              error={!!errors.email}
              name="email"
              placeholder='Enter Email'
              onChange={this.onChange}
            />
            {errors.password && <InlineError text={errors.password}/>}
            <Form.Input
              error={!!errors.password}
              name="password"
              type="password"
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
