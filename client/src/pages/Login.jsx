import React from "react";

// check if logged in
import auth from "../utils/auth";
import { Navigate } from "react-router-dom";

export default function Login() {
  // get the profile if logged in
  if (auth.loggedIn()) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <div>login</div>
      <button onClick={() => window.location.assign("/signup")}>
        Click Here to Sign Up
      </button>
    </div>
  );
}
