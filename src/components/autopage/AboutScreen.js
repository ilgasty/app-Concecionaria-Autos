import React, { useContext } from 'react'
import { authContext } from '../../auth/authContext'


export const AboutScreen = () => {
  const {user}=useContext(authContext)

  return (
    <div>
      <pre>
        {JSON.stringify(user,null,3)}
      </pre>
    </div>
  )
}
