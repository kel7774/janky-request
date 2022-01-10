import React from 'react';
import firebase from 'firebase/app'
// import { useAuthState } from 'react-firebase-hooks/auth';
// import {auth} from '../firebase.config'

const AuthManager = () => {
  const functions = firebase.functions();
  // const [user] = useAuthState(auth)
  const [email, setEmail] = React.useState('');
  const [success, setSuccess] = React.useState(false)

  const makeAdmin = () => {
    const addAdminRole = functions.httpsCallable('addAdminRole')
    addAdminRole({ email }).then(result => {
      console.log(result)
      setSuccess(!success)
    });
  }
  
  return (
    <div className="text-center h-screen p-12">
      <div className='flex flex-col m-zeroAuto w-72'>
          <header>make admin:</header>
          <input
            type='email'
            placeholder='email'
            onChange={(e) => setEmail(e.target.value)}
            className='h-10 my-4 rounded text-jazzPurple placeholder-jazzPurple border-2 border-jazzPurple active:border-black'
          />
          <button onClick={() => makeAdmin()}>submit</button>
          {!success && (
            <div className='animate__animated animate__fadeOutDown'>🔓 you are now an admin!</div>
          )}
      </div>
    </div>
  )
}

export default AuthManager
