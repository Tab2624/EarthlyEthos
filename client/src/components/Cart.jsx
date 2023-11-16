import React, { useContext, useEffect, useState } from "react";
import TrashCan from "./TrashCan";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Cart = (props) => {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);

    // Optionally, you can add a cleanup function to scroll back to the top
    // when the component is unmounted
    return () => {
      window.scrollTo(0, 0);
    };
  }, []);

  const user = useSelector((state) => state.user);

  const [price, setPrice] = useState(0);
  const [message, setMessage] = useState("");
  const [cartTotal, setCartTotal] = useState(0);

  function calculateTotal(products) {
    let total = 0;
    for (let product of products) {
      total += product.price;
    }
    return +(Math.round(total + "e+2") + "e-2");
  }

  useEffect(() => {
    const total = calculateTotal(props.cartItems);
    setPrice(total);
  }, [props.cartItems]);

  useEffect(() => {
    if (props.cartItems.length === 0) {
      setMessage("Your cart is empty! Let's change that...");
    } else {
      setMessage("Cart Items: " + props.cartItems.length);
    }
  }, [props.cartItems]);

  return (
    <div className="container large-margin-top-2">
      <h1>Cart</h1>
      <hr />
      <div className="p-2 border rounded">
        <h3 className="p-2">{message}</h3>
        {props.cartItems.map((product, index) => (
          <div
            id={product.productName}
            className="justify-between p-1 m-1 w-100 border-bottom d-flex">
            <p>{product.productName}</p>
            <div className="d-flex">
              <p>$ {product.price}</p>
              <TrashCan index={index} removeFromCart={props.removeFromCart} />
            </div>
          </div>
        ))}
        <Link to="/shop" className="m-2 btn btn-outline-success">
          Continue Shopping
        </Link>
      </div>
      <div className="justify-between p-1 m-2 w-100 border-bottom d-flex">
        <h3>Total</h3>
        <h3>$ {price}</h3>
      </div>
      <div className="justify-center d-flex">
        {user ? (
          props.cartItems.length > 0 ? (
            <Link to="/checkout" className="btn btn-success w-25">
              Continue to Checkout
            </Link>
          ) : (
            <p className="btn btn-secondary">Must add items to cart first</p>
          )
        ) : (
          <p className="btn btn-secondary">Sign in to Continue</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
