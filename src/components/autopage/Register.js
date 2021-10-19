import React from 'react'
import { useDispatch } from 'react-redux';
import { register } from '../../actions/auth';
import { useForm } from '../../hooks/useFrom'

export const Register = () => {
  const[formValue,handleInputChange]=useForm({mail:'',mailr:'',password:''});
  const{mail,mailr,password}=formValue;
  const dispatch=useDispatch();
  const handleregister=(e) => {
    e.preventDefault();
    mail===mailr? dispatch(register(0,mail,password)): console.log('mail ')
  }
  return (
    <div className="auth__main">
      <div className="auth__box_container">
      <p className="auth__title">Register</p>
        <form className="" onSubmit={handleregister}>
          <input className="auth__input" type="text" name="mail" onChange={handleInputChange} value={mail}/>
          <input className="auth__input" type="text" name="mailr" onChange={handleInputChange} value={mailr}/>
          <input className="auth__input" type="password" name="password" onChange={handleInputChange} value={password}/>
          <button className="btn btn-primary btn-block"  type="submit">Login</button>
        </form>
      </div>
      
    </div>
  )
}
