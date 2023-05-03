import React from "react";

// components
import GetData from "../components/GetData/GetData";
import SignoutButton from "../components/SignoutButton/SignoutButton";

// check if logged in
import auth from "../utils/auth";
import { Navigate } from "react-router-dom";
import UploadAndDisplayImage from "../components/UploadAndDisplayImage/UploadAndDisplayImage";

export default function Home() {
  // get the profile if logged in
  if (!auth.loggedIn()) {
    return <Navigate to="/login" />;
  }
  let userInfo = auth.getProfile();

  return (
    <>
      <header className="App-header">
        <div className="App">
          <div>Welcome to Pawprint!</div>
          {/* component to get data */}
          <GetData />
          <SignoutButton />
          {/* upload an image */}
          <UploadAndDisplayImage />
        </div>
      </header>
    </>
  );
}
