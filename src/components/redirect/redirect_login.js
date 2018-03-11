import React from 'react';
import { Route, Redirect } from "react-router-dom";

const redirect_login = (WrappedComponent) => {
  return class redirect extends React.Component {
    render() {
      var path = ""
      switch(localStorage.role){
        case "super_admin":
          path = "/admin/restaurant/manage"
          break
        case "registered_user":
          path = "/user/restaurant/list"
          break
        case "admin":
          //
          break
        default:
          return <WrappedComponent {...this.props} />
      }
      return <Route render={props => <Redirect to={path} />}/>
    }
  }
}

export default redirect_login;