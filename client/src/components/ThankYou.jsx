import React from "react";
import { useEffect, useState } from "react";


const ThankYou = (props) => {

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);

    // Optionally, you can add a cleanup function to scroll back to the top
    // when the component is unmounted
    return () => {
      window.scrollTo(0, 0);
    };
  }, []);

  return (
    <div className="container">
      <div className="text-center large-margin-top-2">
        <h1>Thank you for your order!</h1>
        <hr />
        <h3>Your order number is: 355674367</h3>
        <div className="d-flex justify-center">
          <img
            src="https://cdn.pixabay.com/photo/2023/08/12/13/43/earth-8185636_640.png"
            alt="happy earth"
          />
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
