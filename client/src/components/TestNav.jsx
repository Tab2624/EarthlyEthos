import React, { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../App.css";
import ProfilePhoto from "./ProfilePhoto";

const Navbar = (props) => {
  const dropdownRef = useRef(null);

  useEffect(() => {
    const dropdownElement = dropdownRef.current;
    if (dropdownElement) {
      new window.bootstrap.Dropdown(dropdownElement);
    }
  }, []);
  return (
    <>
      {/* First Navbar */}
      <div className="flex items-center justify-between p-1 border border-gray-200 bg-success-subtle text-dark">
        <div className="flex p-1">
          <a className="p-1" href="#">
            English
          </a>
          <a className="p-1" href="#">
            About Us
          </a>
        </div>
        <div className="flex items-center p-1">
          <a href="#">Contact Us</a>
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
      </div>
      {/* Second nav bar */}
      <div className="justify-between bg-white border border-gray-200 sticky-top d-flex align-items-center">
        <img
          src="/static/images/EarthlyEthosLogo.png"
          alt="earthly ethos logo"
          width="190px"
        />

        {/* Dropdown menu */}
        <div class="btn-group ">
          <button type="button" class="btn btn-outline-success success-text">
            Shop
          </button>
          <button
            type="button"
            class="btn btn-outline-success success-text dropdown-toggle dropdown-toggle-split"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span class="visually-hidden">Toggle Dropdown</span>
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <div className="d-flex">
              <li>
                <a className="dropdown-item" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Clothing
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Lifestyle
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Outdoors
                </a>
              </li>
            </div>
            <div className="d-flex">
              <li>
                <a className="dropdown-item" href="#">
                  Pet Products
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Personal Care
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Essentials
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Upcycled and Recycled
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Garden
                </a>
              </li>
            </div>
          <hr />
          <li>
          <a className="dropdown-item" href="#">
                  All Categories
                  </a>
          </li>
          </ul>

        </div>

        {/* Other Navbar Elements */}
        <form action="#">
          <div className="pl-0 input-group md-form form-sm form-2">
            <input
              className="py-1 my-0 border form-control border-gray input-nav-bar"
              type="text"
              placeholder="Search"
              aria-label="Search"
              size="75"
            />
            <div className="input-group-append">
              <span className="input-group-text lighten-2" id="basic-text1">
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
        <ProfilePhoto />
        <div>
          <button className="d-flex btn btn-outline-success align-items-center">
            <img
              width="25"
              height="25"
              src="https://img.icons8.com/pastel-glyph/64/40C057/shopping-cart--v2.png"
              alt="shopping-cart--v2"
            />
            - $0.00
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
