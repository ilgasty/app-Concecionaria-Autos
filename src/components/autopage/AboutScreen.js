import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const AboutScreen = () => {
  const {user}=useContext(UserContext)

  return (
    <div>
      <per>
        {JSON.stringify(user,null,3)}
      </per>
    </div>
  )
}
