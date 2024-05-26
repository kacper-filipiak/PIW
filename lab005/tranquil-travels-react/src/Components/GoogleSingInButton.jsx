import React from "react";
import { useNavigate } from "react-router-dom";
import { loginWithGoogle } from "../Utils/firebase.utils.js";
const GoogleSingInButton = () => {
  const navigate = useNavigate();
const logGoogleUser = async () => {
        const response = await loginWithGoogle(navigate);
        console.log(response);
    }
return (
        <div>
            <button  className="App-mini-button" onClick={logGoogleUser}>Sign In With Google</button>
        </div>
    )
}
export default GoogleSingInButton;
