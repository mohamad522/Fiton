import React from 'react'
import { Link } from 'react-router-dom';
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from './firebase-config'
import {useState } from "react";
import '../css/signin.css';



const Singin = () => {
  
  const [loginEmail, setLoginEmail] = useState("")
  const [loginPassword, setLoginPassword] = useState("")

  const [user, setUser] = useState("");

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  })


  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      console.log(user)
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };
  return (
    <div>
      <div>
      <hr></hr>
      <h3 className='style-text'>Login</h3>
      <input className='center-block' type="email" placeholder="Email..."
        onChange={(event) => {
          setLoginEmail(event.target.value);
          }}
      />
      <br/>
      <input className='center-block' type="password" placeholder="Password..."
        onChange={(event) => {
          setLoginPassword(event.target.value);
          }}
      />
      <br/>
      <button onClick={login} className= "button-style" >Login</button>
      <br/>
      <Link className='' to="/signup">Don't have an account yet? Register here!</Link>
      </div>
      <div>
        <h5 className='style-text' >User Logged In: </h5>
        {user?.email}
        <button onClick={logout} className= "button-style">Sign Out</button>
      </div>
    </div>
  )
}

export default Singin