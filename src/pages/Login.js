import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth, signInWithEmailAndPassword, signInWithGoogle} from '../firebase.config'
import { useAuthState } from 'react-firebase-hooks/auth'

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [user, loading, error] = useAuthState(auth)
  const history = useHistory();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) history.replace('/requests')
  }, [user, loading]);
  return (
    <div className="text-center h-screen p-12">
      <div className='flex flex-col m-zeroAuto w-72'>
        <input
          type="text"
          className="my-5 px-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="my-5 px-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button
          className="bg-jazzPurple text-white"
          onClick={() => signInWithEmailAndPassword(email, password)}
        >
          Login
        </button>
        <button className="bg-googleBlue text-white" onClick={signInWithGoogle}>
          Login with Google
        </button>
        <div>
          <Link to="/reset" className='font-bold'>Forgot Password</Link>
        </div>
        <div>
          Don't have an account? <Link to="/register" className='font-bold'>Register</Link> now.
        </div>
      </div>
    </div>
  )
}
