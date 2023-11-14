import React, { useEffect } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store"; // Import the store
// import Navbar from "./components/Navbar";
import "./App.css";
import TestNav from "./components/TestNav"
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import Shop from "./components/CategoryOne";

const App = () => {
  


  return (
    <Provider store={store}>
        <TestNav/>
        {/* <div id="signInDiv" hidden={user !== null}></div>
        {user && Object.keys(user).length !== 0 && (
          <button onClick={handleSignOut}>Sign Out</button>
        )} */}
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/shop" element={<Shop/>}/>
        </Routes>
      <Footer/>
    </Provider>
  );
};

export default App;
