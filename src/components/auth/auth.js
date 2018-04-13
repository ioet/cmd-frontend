import React from 'react';
import store from "../../store"
import ErrorAuth from "./ErrorAuth"

const Authorization = (allowedRoles) => (WrappedComponent) => {
  return class WithAuthorization extends React.Component {

    render() {

      const { role } = store.getState().user

      if (allowedRoles.includes(role)) {
        return <WrappedComponent {...this.props} />
      } else {
        return <ErrorAuth />
      }
    }
  }
}

export default Authorization;
