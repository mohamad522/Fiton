import { React, useState } from "react";
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from './firebase-config'
import { Alert } from 'react-bootstrap';
import '../css/signup.css';

const Signup = () => {
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [registerEmail, setRegisterEmail] = useState("")
  const [registerPassword, setRegisterPassword] = useState("")
  const [user, setUser] = useState("");

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  })

  const logout = async () => {
    await signOut(auth);
  };

  const register = async () => {
    // if (passwordRef.current.value !== passwordConfirmRef.current.value) {
    //   return setError("Passwords do not match")
    // }
    try {
      const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
      setError("")
      setLoading(true)
    } catch (error) {
      setError("Failed to create an account")
    }
    setLoading(false)
  };
  return (
    <>
    <div className='signup-body'>
      <div className='blackline'></div>
      <p className='signupTitle'>Sing Up</p>
      {error && <Alert variant="danger">{error}</Alert>}
        <div>
          <input type="email" id="signup-email"
            className="signup-email" placeholder='Email' onChange={(event) => {
              setRegisterEmail(event.target.value);
            }} required/>
        </div>
        <div>
          <input type="password" id="signup-password"
            className="signup-password" placeholder='Password'
            onChange={(event) => {
              setRegisterPassword(event.target.value);
            }} required/>
        </div>
        <div className='signup-button-div'>
          <button type="submit" disabled={loading} onClick={register} 
          className="btn btn-primary singup-button">SIGN UP</button>
        </div>
      <Link to='/signin' className='forgot-password'>
        Already Have An Account?</Link>
        <div>
        <h5 className='logged-user'>User Logged In: </h5>
        {user?.email}
        <div className='signup-button-div'>
          <button className='btn btn-primary singup-button' onClick={logout} >SIGN OUT</button>
        </div>
      </div>
    </div>
    <div className='signup-footer'>
      <p className='intouch-text'>LET'S STAY IN TOUCH</p>
      <input type="email" id="intouch-email" name="intouch-email"
          className="intouch-email" placeholder='EMAIL ADDRESS' />
    </div>
    </>
  )
}

export default Signup