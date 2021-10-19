import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { Autos } from '../../Autos';
import { AboutScreen } from './AboutScreen';
import { NavBar } from './NavBar'

export const AppRouterLogin = () => {
  return (
    <>
     <NavBar/>
       <div>
        <Switch>
          <Route exact path="/Autos" component={Autos}/>
          <Route exact path="/About" component={AboutScreen}/>
          
          <Redirect to="/Autos" component={Autos}/>
        </Switch>
        </div>
      
    </>
  )
}
