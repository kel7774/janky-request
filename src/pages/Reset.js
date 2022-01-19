import React from 'react'
import {useAuthState} from 'react-firebase-hooks/auth'
import {useNavigate, Link} from 'react-router-dom'

import {auth, sendPasswordResetEmail} from '../firebase.config'

function Reset() {
  const [email, setEmail] = React.useState("")

  const [user, loading] = useAuthState(auth)

  const navigate = useNavigate()

  React.useEffect(() => {
    if (loading) return;
    if (user) navigate('/main')
  }, [user, loading, navigate])

  return (
    <div className="text-center h-screen p-12">
      <div className='flex flex-col m-zeroAuto w-72'>
        <input
          type="text"
          className='h-10 my-4 rounded text-jazzPurple placeholder-jazzPurple border-2 border-jazzPurple active:border-black'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
        <div>
          <button
            className='bg-jazzPurple text-indigo-50 rounded font-semibold border-2 border-jazzPurple w-56 uppercase cursor-pointer p-2 hover:bg-indigo-50 hover:text-jazzPurple duration-300 ease-in mb-3'
            onClick={() => sendPasswordResetEmail(email)}
          >
            send password reset email
          </button>
          <div>
            don't have an account? <Link to="/register">register</Link> now.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reset
