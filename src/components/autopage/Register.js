import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../actions/auth';
import { useForm } from '../../hooks/useFrom';
import validator from 'validator';
import { RemoveError, SetError } from '../../actions/ui';
export const Register = () => {
  const[formValue,handleInputChange]=useForm({name:'',mail:'',mailr:'',password:''});
  const{name,mail,mailr,password}=formValue;
  const dispatch=useDispatch();
  const {msgError}=useSelector(state=> state.ui);


  const handleregister=(e) => {
    
    e.preventDefault();
   if (isFormValid()){
    dispatch(startRegisterWithEmailPasswordName(mail,password,name))
    
   }
  }
  const isFormValid=() => {
    if (!validator.isEmail(mail)){
      dispatch(SetError('email invalido'))

      return false;
      //mail===mailr? dispatch(register(0,mail,password)): console.log('mail ')
      
    }
    if(mail!==mailr){
      dispatch(SetError('mail incorrecto'))
    
      return false;
    }
    if(name.trim().length===0){
      dispatch(SetError('se requiere nombre'))
     
      return false;
    }
    dispatch(RemoveError())
    return true;
  }
  return (
    <div className="auth__main">
      <div className="auth__box_container">
      <p className="auth__title">Register</p>
        <form className="" onSubmit={handleregister}>
          {
            msgError && <div className="auth__alert-error">{msgError}</div>
          }
          
          <input className="auth__input" type="text" name="name" onChange={handleInputChange} value={name} placeholder="Nombre"/>
          <input className="auth__input" type="text" name="mail" onChange={handleInputChange} value={mail} placeholder="email"/>
          <input className="auth__input" type="text" name="mailr" onChange={handleInputChange} value={mailr} placeholder="confirmacion email"/>
          <input className="auth__input" type="password" name="password" onChange={handleInputChange} value={password}/>
          <button className="btn btn-primary btn-block"  type="submit">Login</button>
        </form>
      </div>
      
    </div>
  )
}
