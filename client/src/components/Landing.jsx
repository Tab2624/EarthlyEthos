import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import TrendingProduct from "./TrendingProduct";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import CookiesBar from "./CookiesBar";
import axios from "axios";

const Landing = (props) => {

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);

    // Optionally, you can add a cleanup function to scroll back to the top
    // when the component is unmounted
    return () => {
      window.scrollTo(0, 0);
    };
  }, []);

  function scrollToRight(idToSelect) {
    let element = document.getElementById(idToSelect);
    element.scrollLeft += 900;
    console.log("scrollRight");
  }
  function scrollToLeft(idToSelect) {
    let element = document.getElementById(idToSelect);
    element.scrollLeft -= 900;
    console.log("scrollLeft");
  }

  const [products, setProduct] = useState([]);
  // fetch product based on category passed through useParams
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/category/Trending`)
      .then((res) => {
        console.log("RES.DATA*****", res.data);
        console.log("RES.DATA.CATEGORY.PRODUCT**", res.data.category);
        setProduct(res.data.category.products);
      })
      .catch((err) => {
        console.error("❌❌❌❌", err);
      });
  }, []);

  return (
    <>
      {/* Double picture hero section */}
      <div id="photo-heroes" className="d-flex w-100">
        <div id="photo-hero-1" className="text-center border w-50">
          <h1 className="fs-1">Top Products</h1>

          <Link to="/category/Hot" className="">
            <button className="shadow btn btn-lg btn-success">Shop Now</button>
          </Link>
        </div>
        <div id="photo-hero-2" className="text-center border w-50">
          <h1 className="fs-1">New Arrivals</h1>
          <Link to="/category/New" className="shadow btn btn-lg btn-success">
            Shop Now
          </Link>
        </div>
      </div>

      {/* categories front page */}
      <div className="container">
        <div
          id="category-home"
          className="justify-around mt-5 text-center d-flex"
        >
          <div
            id="category-home-1"
            className="border height-400 width-400 me-3"
          >
            <h1>Clothing</h1>
            <Link to="/category/Clothing" className="shadow btn btn-success">
              View Category
            </Link>
          </div>
          <div id="category-home-2" className="border height-400 width-400 ">
            <h1>Personal Care</h1>
            <Link
              to="/category/Personal Care"
              className="shadow btn btn-success"
            >
              View Category
            </Link>{" "}
          </div>
          <div
            id="category-home-3"
            className="border height-400 width-400 ms-3"
          >
            <h1>Lifestyle</h1>
            <Link to="/category/Lifestyle" className="shadow btn btn-success">
              View Category
            </Link>
          </div>
        </div>

        {/* trending products */}

        <div className="row1">
          <h1 className="mt-5 mb-5 text-center">Trending Products</h1>
          <div className="d-flex justify-content-between rowauto">
            <div className="p-2 d-inline-flex justify-content-between">
              <button
                className="scrollBtn btnLeft"
                onClick={() => scrollToLeft("rowMoving1")}
              >
                <div className="arrow left"></div>
              </button>
            </div>
            <div className="d-flex rowToMove" id="rowMoving1">
              {products.map((product) => (
                <TrendingProduct product={product} addToCart={props.addToCart} />
              ))}
            </div>

            <div className="p-2 d-inline-flex justify-content-between">
              <button
                className="scrollBtn btnRight"
                onClick={() => scrollToRight("rowMoving1")}
              >
                <div className="arrow right"></div>
              </button>
            </div>
          </div>
        </div>

        <div className="fixed-bottom">
          <CookiesBar />
        </div>
        {/* container ending div */}
      </div>
    </>
  );
};

export default Landing;
