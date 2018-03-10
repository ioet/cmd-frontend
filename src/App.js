import React from 'react';
import { Route } from 'react-router-dom'
import LoginPage from './components/pages/LoginPage'
import MainPage from './components/pages/MainPage'
import ManageRestaurants from './components/pages/ManageRestaurants'
import Error from './components/pages/ErrorAuth'
import Authorization from "./components/auth/auth"

const Manager = Authorization(['super_admin'])

const App = () => (
  
  <div>
    <Route path="/" exact component={LoginPage}/>
    <Route path="/restaurants-list" exact component={MainPage}/>
    <Route path="/super-admin/manage-restaurants" exact component={Manager(ManageRestaurants)}/>
    <Route path="/no_autorizado" exact component={Error}/>
  </div>

);

export default App;
