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

  return <button className='bg-gradient-to-r from-jazzPurple via-jazzLightPurp to-jazzBlue text-indigo-50 rounded-md p-3 w-28 ring-2 focus:ring-4 uppercase' onClick={navigate}>Log In</button>
}

export default LoginButton
