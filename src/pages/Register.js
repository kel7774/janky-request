import React from "react"
import {useAuthState} from "react-firebase-hooks/auth"
import {Link, useHistory} from "react-router-dom"
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
  const history = useHistory()

  const register = () => {
    if (!name) alert("Please enter name")
    registerWithEmailAndPassword(name, email, password)
  };

  React.useEffect(() => {
    if (loading) return;
    if (user) history.replace("/requests")
  }, [user, loading])
  
  return (
    <div className="text-center h-screen p-12">
      <div className='flex flex-col m-zeroAuto w-72'>
        <input
          type="text"
          className="my-5 px-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
        />
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
        <button className="bg-jazzPurple text-white" onClick={register}>
          Register
        </button>
        <button
          className="bg-googleBlue text-white"
          onClick={signInWithGoogle}
        >
          Register with Google
        </button>
        <div>
          Already have an account? <Link to="/login" className='font-bold'>Login</Link> now.
        </div>
      </div>
    </div>
  )
}

export default Register
