import React from "react";
import { useNavigate } from "react-router-dom";
import GoogleSingInButton from  "../Components/GoogleSingInButton.jsx";

const Login = () => {

  return (
    <main className="main-center">
          <label htmlFor="email">Email</label>
          <input id="email"/>
          <label htmlFor="pasword">Password</label>
          <input id="password" type="password" />
          <br></br>
          <button  className="App-mini-button">Login with email</button>

          <br/>
          <br/>
           <GoogleSingInButton /> 
    </main>
  )
}

export default Login;
