import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import TrendingProduct from "./TrendingProduct";

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

  const products = [
    {
      name: "Backpack",
      image:
        "https://www.stoneycloverlane.com/cdn/shop/products/0326_Shot_13_Hand_Model_Classic_Backpack_CottonCandy_0271_RT_V3_grande.jpg?v=1650573274",
      description: "This is a backpack",
      price: 14.99,
    },
    {
      name: "Mousepad",
      image:
        "https://m.media-amazon.com/images/I/61RheQjHm+L._AC_UF894,1000_QL80_.jpg",
      description: "Mousepad which is ethically sourced",
      price: 10.99,
    },
    {
      name: "Edible Forks",
      image:
        "https://i.cbc.ca/1.4763252.1532634753!/fileImage/httpImage/bakey-s-3.jpg",
      description: "Edible forks instead of plastic!",
      price: 12.0,
    },
    {
      name: "Go Green shirt",
      image:
        "https://i.pinimg.com/originals/a4/6a/bb/a46abbaf15440e5daf83e9350fc4e9b7.jpg",
      description: "Recycled material shirt, sport the green!",
      price: 19.99,
    },
    {
      name: "Reuseable bag",
      image:
        "https://cdn.shopify.com/s/files/1/0070/7032/files/blank_tote_merch_swag_fashion_print_on_demand.jpg?v=1689965049",
      description: "Reuseable and recycled bag",
      price: 9.99,
    },
    {
      name: "Reuseable tupperware silicone lids",
      image:
        "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1681744106-orblue-silicone-stretch-lids-643d60d5ac251.jpg?crop=1xw:1xh;center,top&resize=980:*",
      description: "Reuseable silicone lids",
      price: 9.99,
    },
  ];

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
          <h1 className="text-center mt-5 mb-5">Trending Products</h1>
          <div className="d-flex justify-content-between rowauto">
            <div className="d-inline-flex p-2 justify-content-between">
              <button
                className="scrollBtn btnLeft"
                onClick={() => scrollToLeft("rowMoving1")}
              >
                <div className="arrow left"></div>
              </button>
            </div>
            <div className="d-flex rowToMove" id="rowMoving1">
              {products.map((product) => (
                <TrendingProduct product={product} />
              ))}
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
        </div>

        {/* container ending div */}
      </div>
    </>
  );
};

export default Landing;
