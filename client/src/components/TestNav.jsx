import React, { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import ProfilePhoto from "./ProfilePhoto";

const Navbar = (props) => {
  const dropdownRef = useRef(null);

  const navigate = useNavigate()
  const goHome = (()=>{
    navigate('/')
  })

  useEffect(() => {
    const dropdownElement = dropdownRef.current;
    if (dropdownElement) {
      new window.bootstrap.Dropdown(dropdownElement);
    }
  }, []);
  
  return (
    <>
      <div className="fixed-top">
        {/* First Navbar */}
        <div className="flex items-center justify-between p-1 border border-gray-200 bg-success-subtle text-dark">
          <div className="flex p-1">
            <Link className="p-1" to="/">
              English
            </Link>
            <Link className="p-1" to="/about-us">
              About Us
            </Link>
          </div>
          <div className="flex items-center p-1">
          <Link to="/about-us" className="">Contact Us</Link>
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
        <div className="justify-between bg-white border border-gray-200 sticky-top d-flex align-items-center pe-2 ps-2">
          <img
          onClick={()=> goHome()}
            src="/static/images/EarthlyEthosLogo.png"
            alt="earthly ethos logo"
            width="190px"
            style={{cursor: "pointer"}}
          />

          {/* Dropdown menu */}
          <div class="btn-group ">
            <Link class="btn btn-outline-success success-text" to="/shop">
              Shop
            </Link>
            <button
              type="button"
              class="btn btn-outline-success success-text dropdown-toggle dropdown-toggle-split"
              data-bs-toggle="dropdown"
              aria-expanded="false">
              <span class="visually-hidden">Toggle Dropdown</span>
            </button>
            <ul
              className="shadow dropdown-menu"
              aria-labelledby="dropdownMenuButton">
              <div className="d-flex">
                <li>
                  <Link className="dropdown-item" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/category/Clothing" className="dropdown-item">Clothing</Link>
                </li>
                <li>
                <Link to="/category/Lifestyle" className="dropdown-item">Lifestyle</Link>
                </li>
                <li>
                <Link to="/category/Outdoors" className="dropdown-item">Outdoors</Link>
                </li>
              </div>
              <div className="d-flex">
                <li>
                <Link to="/category/Pet Products" className="dropdown-item">Pet Products</Link>

                </li>
                <li>
                <Link to="/category/Personal Care" className="dropdown-item">Personal Care</Link>

                </li>
                <li>
                <Link to="/category/Essentials" className="dropdown-item">Essentials</Link>

                </li>
                <li>
                <Link to="/category/Upcycled and Recycled" className="dropdown-item">Upcycled and Recycled</Link>

                </li>
                <li>
                <Link to="/category/Garden" className="dropdown-item">Garden</Link>

                </li>
              </div>
              <hr />
              <li>
                <Link className="dropdown-item" to="/shop">
                  All Categories
                </Link>
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
          <div>
            <Link
              className="d-flex btn btn-outline-success align-items-center me-3"
              to="/cart">
              <img
                width="25"
                height="25"
                src="https://img.icons8.com/pastel-glyph/64/40C057/shopping-cart--v2.png"
                alt="shopping-cart--v2"
              />
              <p>{props.cartItems.length}</p>
              - $ {props.total}
            </Link>
          </div>
          <ProfilePhoto />
        </div>
      </div>
    </>
  );
};

export default Navbar;
