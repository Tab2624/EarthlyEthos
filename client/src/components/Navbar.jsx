import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

const Navbar = (props) => {
  return (
    <>
      {/* First Navbar */}
      <div className="bg-success-subtle border border-gray-200 flex justify-between items-center p-1 text-dark">
        <div className="flex p-1">
          <a className="p-1" href="#">
            English
          </a>
          <a className="p-1" href="#">
            About Us
          </a>
        </div>
        <div className="flex p-1 items-center">
          <a href="#">Contact Us</a>
          <img
            className="p-1 ps-4"
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
      {/* Second nav bar */}
      <div className="flex justify-around align-items-center bg-white border border-gray-200">
        <img
          src="/static/images/EarthlyEthosLogo.png"
          alt="earthly ethos logo"
          width="190px"
        />
        <div>
        <button className="pt-2 pb-2 ps-3 pe-3 btn btn-success m-2">Login</button>
        </div>
        <form action="#">
          <div class="input-group md-form form-sm form-2 pl-0">
            <input
              class="form-control my-0 py-1 border border-gray input-nav-bar"
              type="text"
              placeholder="Search"
              aria-label="Search"
              size="75"
            />
            <div class="input-group-append">
              <span class="input-group-text lighten-2" id="basic-text1">
                <img
                  width="25"
                  height="25"
                  src="https://img.icons8.com/ios-filled/50/40C057/search--v1.png"
                  alt="search--v1"
                />
              </span>
            </div>
          </div>
        </form>
        <div className="ms-3 me-3">
          <select class="form-select" aria-label="Default select example">
            <option selected>Shop</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div>
          <button className="d-flex btn btn-outline-success align-items-center"><img width="25" height="25" src="https://img.icons8.com/pastel-glyph/64/40C057/shopping-cart--v2.png" alt="shopping-cart--v2"/>- $0.00</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
