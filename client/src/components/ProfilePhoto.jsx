import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { jwtDecode } from "jwt-decode";
import store from "../store"; // Import the store
import { useSelector } from "react-redux";
import { Provider } from "react-redux";



// const ProfilePhoto = ({ user }) => {
const ProfilePhoto = (props) => {

  const openProfilePopup = () => {
    console.log("open")
  }
  const closeProfilePopup = () => {
    console.log("close")
  }
  const user = useSelector(state => state.user); // Get the user from the Redux store

  // create a sign in button with google
  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "392990046278-n7s7ihp71s35g0o2ps53nh2e4g09soab.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });
    // render the login with google button
    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
    // pop-up prompt for google sign in
    google.accounts.id.prompt()
  }, []);

  
  

  // grab user data and hide sign in div after sign in completion
  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token: ", response.credential);
    let userObject = jwtDecode(response.credential);
    store.dispatch({ type: "SET_USER", payload: userObject }); // Dispatch user to Redux store
    document.getElementById("signInDiv").hidden = true;
  }

  // function to handle sign out
  function handleSignOut(event) {
    store.dispatch({ type: "USER_LOGOUT" }); // Dispatching action directly using the store
    document.getElementById("signInDiv").hidden = false;
  }


  

  return user && user.email_verified ? (
    <>
    <div className="justify-between d-flex align-items-center">
      <p>Welcome {user.name}!</p>
      <img
        className="m-2 border border-dark rounded-circle"
        width="30"
        height="30"
        src={user.picture}
        alt="person-male"
        onClick={openProfilePopup()}
        />
    </div>
    <div id="profileBox" className="fixed p-3 border rounded bg-light border-dark">
      <div className="justify-between d-flex align-items-center">
    <h1>{user.name}</h1>
    <button onClick={()=>closeProfilePopup()} className="">❌</button>
      </div>
    <hr />
    <button className="btn btn-outline-success">View Cart</button>
    <button className="btn btn-outline-success">Orders</button>
    <button className="btn btn-outline-success">Reviews</button>
    <hr />
    <button className="btn btn-danger" onClick={handleSignOut}>Logout</button>
    </div>
        </>
  ) : (
    <div>
      <div id="signInDiv"  hidden={user !== null}>Login</div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user // Assuming 'user' is the key for user data in your Redux store
  };
};

export default connect(mapStateToProps)(ProfilePhoto);
