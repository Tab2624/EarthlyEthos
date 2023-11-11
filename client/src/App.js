import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { useSelector } from "react-redux";
import store from "./store"; // Import the store
import Navbar from "./components/Navbar";
import { jwtDecode } from "jwt-decode";
import "./App.css";

const App = () => {
  const user = useSelector(state => state.user); // Get the user from the Redux store

  // create a sign in button with google
  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "392990046278-n7s7ihp71s35g0o2ps53nh2e4g09soab.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });
    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
    google.accounts.id.prompt()
  }, []);

  // grab user data and hide sign in div after sign in completion
  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token: ", response.credential);
    let userObject = jwtDecode(response.credential);
    store.dispatch({ type: "SET_USER", payload: userObject }); // Dispatch user to Redux store
    document.getElementById("signInDiv").hidden = true;
  }

  function handleSignOut(event) {
    store.dispatch({ type: "USER_LOGOUT" }); // Dispatching action directly using the store
    document.getElementById("signInDiv").hidden = false;
  }

  return (
    <Provider store={store}>
      <div>
        <Navbar />
        <div id="signInDiv" hidden={user !== null}></div>
        {user && Object.keys(user).length !== 0 && (
          <button onClick={handleSignOut}>Sign Out</button>
        )}
      </div>
    </Provider>
  );
};

export default App;
