import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GoogleSingInButton from  "../Components/GoogleSingInButton.jsx";
import {loginUserWithEmailPassword,  createUserWithEmailPassword } from "../Utils/emailPasswordLogin.js";

const Login = () => {
  const navigate = useNavigate();

  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [error, setError] = useState('');
  const createUser = () => {
      createUserWithEmailPassword(navigate, inputEmail, inputPassword)
  }
  const loginUser = () => {
      loginUserWithEmailPassword(navigate, inputEmail, inputPassword)
  }
  return (
    <main className="main-center">
          <label htmlFor="email">Email</label>
          <input id="email" value={inputEmail} onInput={e => setInputEmail(e.target.value)}/>
          <label htmlFor="pasword">Password</label>
          <input id="password" value={inputPassword} type="password" onInput={e => setInputPassword(e.target.value)} />
      <a>{error}</a>
          <br></br>
          <button  className="App-mini-button" onClick={()=>{loginUser();}}>Login with email</button>
          <button  className="App-mini-button" onClick={()=>{createUser(); }}>Create account with email</button>

          <br/>
          <br/>
           <GoogleSingInButton /> 
    </main>
  )
}

export default Login;
