import React from "react";
import "../App.css";

const Navbar = (props) => {
  return (
    <>
    {/* First Navbar */}
      <div className="bg-white border border-gray-200 flex justify-between items-center p-1">
        <div className="flex p-1">
          <a className="p-1" href="#">English</a>
          <a className="p-1" href="#">About Us</a>
        </div>
        <div className="flex p-1 items-center">
          <a href="#">Contact Us</a>
          <img
          className="p-1"
            width="30"
            height="30"
            src="https://img.icons8.com/color/48/facebook-new.png"
            alt="facebook-new"
          />
          <img
          className="p-1"
            width="30"
            height="30"
            src="https://img.icons8.com/color/48/instagram-new--v1.png"
            alt="instagram-new--v1"
          />
          <img
          className="p-1"
            width="30"
            height="30"
            src="https://img.icons8.com/fluency/48/twitter.png"
            alt="twitter"
          />
        </div>
      </div>
      <div className="flex bg-white border border-gray-200">
        <img
          src="/static/images/EarthlyEthosLogo.png"
          alt="earthly ethos logo"
          width="190px"
        />
      <button className="p-2 bg-green-500">Login</button>
      </div>
    </>
  );
};

export default Navbar;
