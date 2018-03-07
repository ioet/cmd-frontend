import React from 'react';
import PropTypes from "prop-types";
import { Form, Button } from 'semantic-ui-react';
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
    console.log('comprobar')
    if(Object.keys(errors).length === 0){
      console.log('sin errores')
      this.props.submit(this.state.data)
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
