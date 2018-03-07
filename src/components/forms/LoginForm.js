import React from 'react';
import { Form, Button } from 'semantic-ui-react';

class LoginForm extends React.Component {

  onChange = (data) => {
    console.log(data.target.name)
  }

  onSubmit = () => {
    console.log("Botón")
  }

  render() {
    return (
        <Form onSubmit={this.onSubmit}>
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
            <Button type='submit' color="blue" size="large">Login</Button>
        </Form>
    )
  }
};

export default LoginForm;
