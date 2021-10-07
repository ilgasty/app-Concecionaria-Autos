import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Autos } from '../../Autos';
import { AboutScreen } from './AboutScreen';
import { Login } from './Login';
import { NavBar } from './NavBar';

export const AppRouter = () => {
  return (
    <Router>
      <div>
      <NavBar/>
        <Switch>
          <Route exact path="/" component={Autos}/>
          <Route exact path="/Login" component={Login}/>
          <Route exact path="/About" component={AboutScreen}/>
        </Switch>
      </div>
    </Router>
  )
}
