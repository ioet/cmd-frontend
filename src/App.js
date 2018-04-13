import React from 'react';
import { Route } from 'react-router-dom'
import LoginPage from './components/public/LoginPage'
import UserListRestaurants from './components/registered_user/UserListRestaurants'
import PublicListRestaurants from './components/public/PublicListRestaurants'
import ManageRestaurants from './components/super_admin/ManageRestaurants'
import Authorization from "./components/auth/auth"
import redirect_login from "./components/redirect/redirect_login"

const admin_restaurant_manage = Authorization(['super_admin'])
const user_restaurant_list = Authorization(['registered_user'])

const App = () => (

    <div dir={localStorage.dir_}>

      <Route path="/" exact component={PublicListRestaurants}/>
      <Route path="/login" exact component={redirect_login(LoginPage)}/>
      <Route path="/recovery" exact component={null}/>
      <Route path="/restaurant/list" exact component={null}/>
      <Route path="/restaurant/[id]" exact component={null}/>

      <Route path="/admin/restaurant/edit/[id]" exact component={null}/>
      <Route path="/admin/restaurant/manage/[id]" exact component={null}/>

      <Route path="/admin/restaurant/manage" exact component={admin_restaurant_manage(ManageRestaurants)}/>

      <Route path="/user/restaurant/list" exact component={user_restaurant_list(UserListRestaurants)}/>
      <Route path="/user/restaurant/edit/[id]" exact component={null}/>

    </div>


);

export default App;
