import React, { useEffect, useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store"; // Import the store
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
import "./App.css";

const App = () => {

  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem('cartItems')) || []
  );

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const removeFromCart = (index) => {
    setCartItems((prevItems) => {
      const newItems = [...prevItems];
      newItems.splice(index, 1);
      return newItems;
    });
  };

  return (
    <Provider store={store}>
        <TestNav/>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/category" element={<CategoryOne/>}/>
          <Route path="/category/:categoryname" element={<CategoryOne addToCart={addToCart}/>}/>
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/cart" element={<Cart removeFromCart={removeFromCart} cartItems={cartItems}/>}/>
          <Route path="/about-us" element={<AboutUs/>}/>
          <Route path="/products/:id" element={<ProductViewOne addToCart={addToCart}/>}/>
          <Route path="/checkout" element={<Checkout removeFromCart={removeFromCart} cartItems={cartItems}/>}/>
          <Route path="/thank-you" element={<ThankYou/>}/>
        </Routes>
      <Footer/>
    </Provider>
  );
};

export default App;
