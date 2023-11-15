import React from "react";

const Footer = (props) => {
  return (
    <div>
    <div className="m-3 mt-5 d-flex border-top ">
      <div className="m-3 text-center w-50">
        <h4>About</h4>
        <p>
            EarthlyEthos is about providing eco-friendly products at a reasonal price to try and save the planet one product at a time. EarthlyEthos strives to better the enviroment not just for us but for you and future generations.
        </p>
        <div className="d-flex">

        <img width="48" height="48" src="https://img.icons8.com/color/48/discover.png" alt="discover"/>
        <img width="48" height="48" src="https://img.icons8.com/color/48/visa.png" alt="visa"/>
        <img width="48" height="48" src="https://img.icons8.com/color/48/mastercard.png" alt="mastercard"/>
        <img width="48" height="48" src="https://img.icons8.com/color/48/amex.png" alt="amex"/>
        </div>

      </div>

        
      <div className="m-3 w-25">
        <ul>
          <li>
            <h5>Information</h5>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Returns & Shipping Policy</a>
          </li>
          <li>
            <a href="#">Store Policy</a>
          </li>
        </ul>
      </div>
      <div className="m-3 w-25">
        <ul>
          <li>
            <h5>Contact</h5>
          </li>
          <li><a href="#">Contact Us</a></li>
          <div className="d-flex">
            <img
              className="p-1 ms-2"
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
        </ul>
      </div>
      <img
          src="https://content.presspage.com/uploads/1467/1920_logo-theclimatepledge-fade.png?10000"
          alt="eco friendly stamp"
          width="300px"
          height="200px"
          className="m-3"
        />
    </div>
    <footer>
        <div className="justify-around d-flex">
        <p>icons by <a href="https://icons8.com/icons">Icons8</a></p>
        <p>&copy; 2023 EarthlyEthos. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
    </footer>
    </div>
  );
};

export default Footer;
