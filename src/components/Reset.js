import React from "react"
import {useAuthState} from "react-firebase-hooks/auth"
import {useNavigate, Link} from "react-router-dom"
import {auth, sendPasswordResetEmail} from "./firebase.config"

function Reset() {
  const [email, setEmail] = React.useState("")

  const [user, loading] = useAuthState(auth)

  const navigate = useNavigate()

  React.useEffect(() => {
    if (loading) return;
    if (user) navigate('/main')
  }, [user, loading])

  return (
    <div className="reset">
      <div className="reset__container">
        <input
          type="text"
          className="reset__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <button
          className="reset__btn"
          onClick={() => sendPasswordResetEmail(email)}
        >
          Send password reset email
        </button>
        <div>
          Don't have an account? <Link to="/register">Register</Link> now.
        </div>
      </div>
    </div>
  )
}

export default Reset
