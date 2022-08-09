import React from 'react'
import {useAuth0} from "@auth0/auth0-react"

export const Profile = () => {
    const {user, isAuthenticated} = useAuth0()

  return (
    (isAuthenticated && (
        <>
        <img src={user.picture} alt={user.name} />
        <center>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <a href="#">Settings</a>
        </center>
        </>
    ))
||
    (!isAuthenticated && (
        <>
        <img src="images/user-1.png" alt="anonymous" />
        <center>
          <h2>Guest user</h2>
        </center>
        </>
    ))
  )
}
