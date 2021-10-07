import React, { useContext } from 'react'
import { UserContext } from './UserContext'


export const Login = () => {
  const {setUser}=useContext(UserContext)

  return (
    <div>
      <button className="" onClick={()=>{setUser({id:123,Name:"gaston"})}}>Login</button>
    </div>
  )
}
