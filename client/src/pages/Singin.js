import { React, useState } from 'react'
import './../css/signin.css'
import { Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from './firebase-config'

const Singin = () => {
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [loginEmail, setLoginEmail] = useState("")
  const [loginPassword, setLoginPassword] = useState("")
  const [user, setUser] = useState("");

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  })
  const login = async () => {
    try {
      setError("")
      setLoading(true)

      const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      console.log(user)
    } catch (error) {
      console.log(error.message);
      setError("Failed to sign in")
    }
    setLoading(false)
  };
  const logout = async () => {
      await signOut(auth);
  };
  return (
    <>
    <div className='signin'>
      <div className='signin-body'>
        <div className='blackline'></div>
        <p className='signinTitle'>Sing In</p>
        {error && <Alert variant="danger">{error}</Alert>}
        <div className="">
          <input id="signin-email" className="signin-email" type="email"
           placeholder="Email" required
           onChange={(event) => {
          setLoginEmail(event.target.value);
          }}
          />
        </div>
        <input type="password" id="signin-password" className="signin-password"
        placeholder='Password'  required onChange={(event) => {
        setLoginPassword(event.target.value);
        }}/>
      </div>
      <Link to='/contact-us' className='forgot-password'>Forgot your password?</Link>
      <div className='signin-button-div'>
        <button disabled={loading} onClick={login} className="btn btn-primary singin-button">SIGN IN</button>
      </div>
      <Link to='/signup' className='no-account'>
      Don't Have An Account Yet? Create Account</Link>
      <h5 className='logged-user' >User Logged In: </h5>
      {user?.email}
      <div className='signin-button-div'>
        <button disabled={loading} onClick={logout} className="btn btn-primary singin-button">SIGN OUT</button>
      </div>
      <div className='signin-footer'>
        <p className='intouch-text'>LET'S STAY IN TOUCH</p>
        <input type="email" id="intouch-email" name="intouch-email"
        className="intouch-email" placeholder='EMAIL ADDRESS' />
      </div>
    </div>
    </>
  )
}

export default Singin