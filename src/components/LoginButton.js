import React from 'react'
import {useAuth0} from '@auth0/auth0-react'

const LoginButton = () => {
    const {loginWithRedirect, isAuthenticated} = useAuth0();
  return (
    !isAuthenticated && (<a onClick={()=>{loginWithRedirect()}}>Log in</a>)
  )
}

export default LoginButton