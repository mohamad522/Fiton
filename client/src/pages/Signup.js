import React from 'react'
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from './firebase-config'
import { useState } from "react";
import '../css/signin.css';

const Signup = () => {

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
    try {
      const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
      console.log(user)
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <div>
        <hr></hr>
        <h3 className='style-text'>Register User</h3>
        <input className='center-block' type = "email"
          placeholder="Email..." 
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        />
        <br/>
        <input className='center-block' type = "password"
          placeholder="Password..."
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
        />
        <br/>
        <button className='button-style' onClick={register} >Create User</button>
        <br/>
        <Link to="/signin">Already have an account? Sign in here!</Link>
      </div>
      <div>
        <h5 className='style-text'>User Logged In: </h5>
        {user?.email}
        <button className='button-style' onClick={logout} >Sign Out</button>
      </div>
    </div>
  )
}

export default Signup