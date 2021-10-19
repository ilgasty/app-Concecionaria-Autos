import React from 'react'
import {useDispatch} from 'react-redux'
import { login, startGooglelogin } from '../../actions/auth'
import { useForm } from '../../hooks/useFrom'
//import { authContext } from '../../auth/authContext'
//import { types } from '../../types/types'


export const Login = ({history}) => {
  const[formValue,handleInputChange]=useForm({mail:'gaston.pellegrini@gmail.com',password:'123'});
  const{mail,password}=formValue;
  const dispach = useDispatch();
  //const{dispatch}=useContext(authContext);
const handleLogin=(e)=>{
  e.preventDefault();
  
  dispach(login(123,mail));
  /*const lastpath=localStorage.getItem('lastpath')|| '/';
  dispatch({ 
    type:types.login,
    payload:{ id:123,   Name:"gaston"}
  })*/
  //history.replace(lastpath);
  history.replace('/');
}
const handlegoogle=()=>{
  dispach(startGooglelogin());
}
  return (
    <div className="auth__main">
      <div className="auth__box_container">
        <p className="auth__title">Login</p>
        <form>
          <input type="text" placeholder="Mail" name="mail" value={mail} onChange={handleInputChange} className="auth__input"/>
          <input type="password" placeholder="password" name="password" value={password} onChange={handleInputChange}  className="auth__input"/>
        <button className="btn btn-primary btn-block"  onClick={handleLogin}>Login</button>
        <br/>
        <div className="auth__social-networks">
          <p>login with social netkork</p>
          <div className="google-btn" onClick={handlegoogle}>
            <div className="google-icon-wrapper">
                <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
            </div>
            <p className="btn-text">
                <b>Sign in with google</b>
            </p>
          </div>
        </div>
        </form>
      
      </div>
      
    </div>
  )
}
