import React  from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,Redirect
} from 'react-router-dom';
//import { authContext } from '../../auth/authContext';

//import { AppRouterLogin } from './AppRouterLogin';
import { Autos } from '../../Autos';
import { AboutScreen } from './AboutScreen';
import { Login } from './Login';
//import { PrivateRoute } from './PrivateRoute';
import { NavBar } from './NavBar';
import { Register } from './Register';


export const AppRouter = () => {
  //const {user}=useContext(authContext)
  //const user={id:123,loged:true};
  return (
    <Router>
      <div >
      <NavBar/>
        <Switch>
        <Route exact path="/Login" component={Login}/>
        <Route exact path="/Register" component={Register}/>
        <Route exact path="/Autos" component={Autos}/>
          <Route exact path="/About" component={AboutScreen}/>
          
          <Redirect to="/Autos" component={Autos}/>
          
         
        </Switch>
      </div>
    </Router>
  )
}
