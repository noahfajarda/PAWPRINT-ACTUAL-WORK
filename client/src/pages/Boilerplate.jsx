import React from "react";
import logo from "../logo.svg";

// check if logged in
import auth from "../utils/auth";
import { Navigate } from "react-router-dom";

export default function Boilerplate() {
  // get the profile if logged in
  if (!auth.loggedIn()) {
    return <Navigate to="/login" />;
  }
  let userInfo = auth.getProfile();

  return (
    <>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {userInfo ? <div>Logged In 🥳</div> : <div>Logged Out</div>}
      </header>
    </>
  );
}
