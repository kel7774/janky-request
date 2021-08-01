import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useHistory } from 'react-router-dom'

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0()
  const history = useHistory()

  const navigate = () => {
    loginWithRedirect()
    history.push('/main')
  }

  return <button onClick={navigate}>Log In</button>
}

export default LoginButton
