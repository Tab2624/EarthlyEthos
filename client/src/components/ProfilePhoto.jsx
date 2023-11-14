import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";
import store from "../store"; // Import the store

const ProfilePhoto = (props) => {
  // State to manage the profile box visibility
  const [isProfileBoxOpen, setIsProfileBoxOpen] = useState(false);

  // Retrieve user information from Redux state
  const user = useSelector((state) => state.user);

  // Reference to the sign-in div in the DOM
  const signInDivRef = useRef(null);

  // State to track user login status
  const [loggedIn, setLoggedIn] = useState(false);

  // Function to open the profile popup
  const openProfilePopup = () => {
    setIsProfileBoxOpen(true);
  };

  // Function to close the profile popup
  const closeProfilePopup = () => {
    setIsProfileBoxOpen(false);
  };

  /*global google*/
  useEffect(() => {
    // Check for the existence of the sign-in div
    if (!signInDivRef.current) return;

    // Initialize Google sign-in
    google.accounts.id.initialize({
      client_id:
        "392990046278-n7s7ihp71s35g0o2ps53nh2e4g09soab.apps.googleusercontent.com",
      callback: handleCallbackResponse, // Callback function after sign-in
    });

    // Render the Google sign-in button
    google.accounts.id.renderButton(signInDivRef.current, {
      theme: "outline",
      size: "medium",
    });

    // Prompt the Google sign-in
    google.accounts.id.prompt();
  }, [loggedIn]);

  // Function to handle the callback response after successful sign-in
  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token: ", response.credential);
    let userObject = jwtDecode(response.credential);

    // Dispatch the user information to the Redux store
    store.dispatch({ type: "SET_USER", payload: userObject });

    // Hide the sign-in div
    if (signInDivRef.current) {
      signInDivRef.current.hidden = true;
    }

    // Update the login status
    setLoggedIn(!loggedIn);
  }

  // Function to handle user sign-out
  function handleSignOut(event) {
    // Dispatch the user logout action
    store.dispatch({ type: "USER_LOGOUT" });

    // Show the sign-in div
    if (signInDivRef.current) {
      signInDivRef.current.hidden = false;
    }

    // Update the login status
    setLoggedIn(!loggedIn);
  }

  // JSX to render the profile photo and associated functionalities
  return user && user.email_verified ? (
    <div className="justify-between d-flex align-items-center">
      <p>Welcome {user.name}!</p>
      <img
        className="m-2 border border-dark rounded-circle"
        width="30"
        height="30"
        src={user.picture}
        alt="person-male"
        onClick={openProfilePopup} // Clicking to open the profile popup
      />
      {isProfileBoxOpen && ( // Display the profile box when open
        <div
          id="profileBox"
          className="fixed p-3 border rounded bg-light border-dark">
          <div className="justify-between d-flex align-items-center">
            <h1>{user.name}</h1>
            <button onClick={closeProfilePopup}>❌</button>{" "}
            {/* Close the profile box */}
          </div>
          <hr />
          {/* Various profile options */}
          <button className="btn btn-outline-success">View Cart</button>
          <button className="btn btn-outline-success">Orders</button>
          <button className="btn btn-outline-success">Reviews</button>
          <hr />
          <button className="btn btn-danger" onClick={handleSignOut}>
            Logout
          </button>
        </div>
      )}
    </div>
  ) : (
    <div>
      {/* Display the login div */}
      <div ref={signInDivRef} hidden={user !== null}>
        Login
      </div>
    </div>
  );
};

export default ProfilePhoto;
