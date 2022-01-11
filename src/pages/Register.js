import React from "react"
import {useAuthState} from "react-firebase-hooks/auth"
import {Link, useNavigate} from "react-router-dom"
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from '../firebase.config'

function Register() {
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [name, setName] = React.useState("")

  const [user, loading] = useAuthState(auth)
  const navigate = useNavigate()

  const register = () => {
    if (!name) alert("Please enter name")
    registerWithEmailAndPassword(name, email, password)
  };

  React.useEffect(() => {
    if (loading) return;
    if (user) navigate('/makerequests')
  }, [user, loading, navigate])
  
  return (
    <div className="text-center h-screen p-12">
      <div className='flex flex-col m-zeroAuto w-72'>
        <input
          required
          type="text"
          className='h-10 my-4 rounded text-jazzPurple placeholder-jazzPurple border-2 border-jazzPurple active:border-black'
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="full name"
        />
        <input
          required
          type="text"
          className='h-10 my-4 rounded text-jazzPurple placeholder-jazzPurple border-2 border-jazzPurple active:border-black'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="e-mail address"
        />
        <input
          required
          type="password"
          className='h-10 my-4 rounded text-jazzPurple placeholder-jazzPurple border-2 border-jazzPurple active:border-black'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <div>
          <button className='bg-jazzPurple text-indigo-50 rounded font-semibold border-2 border-jazzPurple w-56 uppercase cursor-pointer p-2 hover:bg-indigo-50 hover:text-jazzPurple duration-300 ease-in mb-3' onClick={register}>
            register
          </button>
          <button
            className="bg-googleBlue text-indigo-50 rounded font-semibold border-2 border-googleBlue w-56 uppercase cursor-pointer p-2 hover:bg-indigo-50 hover:text-googleBlue duration-300 ease-in mb-3"
            onClick={signInWithGoogle}
          >
            register with google
          </button>
        </div>
        <div>
          already have an account? <Link to="/login" className='font-bold'>login</Link> now.
        </div>
      </div>
    </div>
  )
}

export default Register
