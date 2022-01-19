import React from "react";
import {Navigate} from 'react-router-dom'
import {useAuthState} from 'react-firebase-hooks/auth'

import {auth} from '../firebase.config'

function ProtectedRoute({ children }) {
  const [user] = useAuthState(auth)
  const isAdmin = () => user.getIdTokenResult().then(idTokenResult => {
    if(idTokenResult.claims.admin) {
      return true
    } else {
      return false
    }
  })

  isAdmin()

  return isAdmin ? children : <Navigate to='/' replace />
}

export default ProtectedRoute;