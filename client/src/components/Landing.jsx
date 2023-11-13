import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

const Landing = () => {
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

  return (
    <>
      {/* Double picture hero section */}
      <div id="photo-heroes" className="d-flex w-100">
        <div id="photo-hero-1" className="w-50 text-center border">
          <h1 className="fs-1">Top Products</h1>
          <button className="btn btn-lg btn-success shadow">Shop Now</button>
        </div>
        <div id="photo-hero-2" className="w-50 text-center border">
          <h1 className="fs-1">New Arrivals</h1>
          <button className="btn btn-lg btn-success shadow">Shop Now</button>
        </div>
      </div>

      {/* categories front page */}
      <div className="container">
        <div
          id="category-home"
          className="d-flex justify-around mt-5 text-center"
        >
          <div
            id="category-home-1"
            className="border height-400 width-400 me-3"
          >
            <h1>Clothing</h1>
            <button className="btn btn-success shadow">View Category</button>
          </div>
          <div id="category-home-2" className="border height-400 width-400 ">
            <h1>Personal Care</h1>
            <button className="btn btn-success shadow">View Category</button>
          </div>
          <div
            id="category-home-3"
            className="border height-400 width-400 ms-3"
          >
            <h1>Lifestyle</h1>
            <button className="btn btn-success shadow">View Category</button>
          </div>
        </div>

        {/* trending products */}

        <div className="row1">
          <div className="justify-content-between rowauto">
        <h1 className="text-center mt-5 mb-5">Trending Products</h1>
            <div className="d-inline-flex p-2 justify-content-between">
              <button
                className="scrollBtn btnLeft"
                onClick={() => scrollToLeft("rowMoving1")}
              >
                <div className="arrow left"></div>
              </button>
            </div>
            <div className="d-inline-flex p-2 justify-content-between">
              <button
                className="scrollBtn btnRight"
                onClick={() => scrollToRight("rowMoving1")}
              >
                <div className="arrow right"></div>
              </button>
            </div>
          </div>
          <div className="rowtoMove" id="rowMoving1">

          </div>
        </div>

        {/* container ending div */}
      </div>
    </>
  );
};

export default Landing;
