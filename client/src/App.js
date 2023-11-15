import React, { createContext, useEffect } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store"; // Import the store
// import Navbar from "./components/Navbar";
import "./App.css";
import TestNav from "./components/TestNav"
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import CategoryOne from "./components/CategoryOne";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import AboutUs from "./components/AboutUs";
import ProductViewOne from "./components/ProductViewOne";
import Checkout from "./components/Checkout";
import ThankYou from "./components/ThankYou";
import { useContext } from 'react';


const App = () => {


  (function(d, t) {
      var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
      v.onload = function() {
        window.voiceflow.chat.load({
          verify: { projectID: '65552f89a3886e0007ea7970' },
          url: 'https://general-runtime.voiceflow.com',
          versionID: 'production'
        });
      }
      v.src = "https://cdn.voiceflow.com/widget/bundle.mjs"; v.type = "text/javascript"; s.parentNode.insertBefore(v, s);
  })(document, 'script');


  return (
    <Provider store={store}>
        <TestNav/>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/category" element={<CategoryOne/>}/>
          <Route path="/category/:categoryname" element={<CategoryOne/>}/>
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/about-us" element={<AboutUs/>}/>
          <Route path="/product/:id" element={<ProductViewOne/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/thank-you" element={<ThankYou/>}/>
        </Routes>
        
      <Footer/>
    </Provider>
  );
};

export default App;
