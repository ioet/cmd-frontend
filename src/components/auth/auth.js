import React from 'react';
import store from "../../store"

const Authorization = (allowedRoles) => (WrappedComponent) => {
  return class WithAuthorization extends React.Component {
  
    render() {

      const { role } = store.getState().user

      if (allowedRoles.includes(role)) {
        return <WrappedComponent {...this.props} />
      } else {
        return <h1>No page for you!</h1>
      }
    }
  }
}

export default Authorization;