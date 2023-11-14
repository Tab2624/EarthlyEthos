import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import TrendingProduct from "./TrendingProduct";

const CategoryOne = (props) => {

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
    {/* Large top hero section */}
      <div
        id="large-hero-shop"
        height="2000px"
        className="w-100 large-margin-top"
      >
        <figure class="text-center">
          <blockquote class="blockquote text-white">
            <h1>"The Earth is what we all have in common"</h1>
          </blockquote>
          <figcaption class="blockquote-footer text-black">
            Naturalist and Writer,{" "}
            <cite title="Source Title">Wendell Berry</cite>
          </figcaption>
        </figure>
        <div className="d-flex justify-center">
        <button className="btn btn-lg btn-success text-center">Shop Eco-Friendly Now</button>
        </div>
      </div>

      <div className="container">
        {/* Top categories */}
        <div className="d-flex justify-around">
          <div id="trending-cat-one" className="text-center m-3 p-4 border " >
            <h1 className="margin-top new-title">Trending</h1>
            <button className="btn btn-success margin-top margin-bottom shadow">Shop Trending</button>
          </div>
          <div id="new-cat-one" className="text-center m-3 p-4 border " >
            <h1 className="margin-top new-title">New</h1>
            <button className="btn btn-success margin-top margin-bottom shadow">Shop New</button>
          </div>
          <div id="hot-cat-one" className="text-center m-3 p-4 border " >
            <h1 className="margin-top new-title">Hot</h1>
            <button className="btn btn-success margin-top margin-bottom shadow">Shop Hot</button>
          </div>
        </div>

        <h1 className="text-center margin-top">Category Name</h1>
        <hr />
        <div className="d-flex flex-wrap w-100">
        {products.map((product) => (
                <TrendingProduct product={product} />
              ))}
        </div>
      </div>
    </>
  );
};

export default CategoryOne;
