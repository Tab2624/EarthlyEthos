import React, { useEffect } from "react";
import { Provider } from "react-redux";
import store from "./store"; // Import the store
// import Navbar from "./components/Navbar";
import "./App.css";
import TestNav from "./components/TestNav"

const App = () => {
  


  return (
    <Provider store={store}>
      <div>
        <TestNav/>
        {/* <div id="signInDiv" hidden={user !== null}></div>
        {user && Object.keys(user).length !== 0 && (
          <button onClick={handleSignOut}>Sign Out</button>
        )} */}
      </div>
    </Provider>
  );
};

export default App;
