import React, { useReducer } from "react";

// import components
import CreateData from "../components/CreateData/CreateData";

// check if logged in
import auth from "../utils/auth";
import { Navigate } from "react-router-dom";

export default function Signup() {
  // get the profile if logged in
  if (auth.loggedIn()) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <header className="App-header">
        <div className="App">
          {/* component to create data */}
          <CreateData />
        </div>
      </header>
    </>
  );
}
