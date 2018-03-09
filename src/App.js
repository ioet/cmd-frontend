import React from 'react';
import { Route } from 'react-router-dom'
import LoginPage from './components/pages/LoginPage'
import MainPage from './components/pages/MainPage'

const App = () => (

  <div>
    <Route path="/" exact component={LoginPage}/>
    <Route path="/restaurants-list" exact component={MainPage}/>
  </div>

);

export default App;
