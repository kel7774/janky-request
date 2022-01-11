import React from 'react';
import firebase from 'firebase/app'

const AuthManager = () => {
  const functions = firebase.functions();
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
          <header>make an admin:</header>
          <input
            type='email'
            placeholder='email'
            onChange={(e) => setEmail(e.target.value)}
            className='p-2 h-10 my-4 rounded text-jazzPurple placeholder-jazzPurple border-2 border-jazzPurple active:border-black'
          />
          <button className='bg-jazzPurple text-indigo-50 rounded font-semibold border-2 border-jazzPurple w-56 uppercase cursor-pointer p-2 hover:bg-indigo-50 hover:text-jazzPurple duration-300 ease-in mb-3' onClick={() => makeAdmin()}>submit</button>
          {!success && (
            <div className='animate__animated animate__fadeOutDown'>🔓 you are now an admin!</div>
          )}
      </div>
    </div>
  )
}

export default AuthManager
