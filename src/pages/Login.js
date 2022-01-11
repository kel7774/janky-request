import React from 'react'
import {useAuthState} from 'react-firebase-hooks/auth'
import {Link, useNavigate} from 'react-router-dom'
import {Loader} from 'semantic-ui-react'

import {auth, signInWithEmailAndPassword, signInWithGoogle} from '../firebase.config'

export default function Login() {
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")

  const [user, loading] = useAuthState(auth)

  const navigate = useNavigate();

  React.useEffect(() => {
    if (user && loading) {
      return <Loader size='massive'/>
    }
    if (user) navigate('/makerequests')
  }, [user, loading, navigate])

  return (
    <div className="text-center h-screen p-12">
      <div className='flex flex-col m-zeroAuto w-72'>
        <input
          type="text"
          className='h-10 my-4 p-2 rounded text-jazzPurple placeholder-jazzPurple border-2 border-jazzPurple active:border-black'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="e-mail"
        />
        <input
          type="password"
          className='h-10 my-4 p-2 rounded text-jazzPurple placeholder-jazzPurple border-2 border-jazzPurple active:border-black'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <div>
          <button
            className='bg-jazzPurple text-indigo-50 rounded font-semibold border-2 border-jazzPurple w-56 uppercase cursor-pointer p-2 hover:bg-indigo-50 hover:text-jazzPurple duration-300 ease-in mb-3'
            onClick={() => signInWithEmailAndPassword(email, password)}
          >
            login
          </button>
          <button className="bg-googleBlue text-indigo-50 rounded font-semibold border-2 border-googleBlue w-56 uppercase cursor-pointer p-2 hover:bg-indigo-50 hover:text-googleBlue duration-300 ease-in mb-3" onClick={signInWithGoogle}>
            login with google
          </button>
        </div>
        <div>
          <Link to="/reset" className='font-bold'>forgot password</Link>
        </div>
        <div>
          don't have an account? <Link to="/register" className='font-bold'>register</Link> now.
        </div>
      </div>
    </div>
  )
}
