import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import TrendingProduct from "./TrendingProduct";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const CategoryOne = (props) => {
  // const products = [
  //   {
  //     name: "Backpack",
  //     image:
  //       "https://www.stoneycloverlane.com/cdn/shop/products/0326_Shot_13_Hand_Model_Classic_Backpack_CottonCandy_0271_RT_V3_grande.jpg?v=1650573274",
  //     description: "This is a backpack",
  //     price: 14.99,
  //   },
  //   {
  //     name: "Mousepad",
  //     image:
  //       "https://m.media-amazon.com/images/I/61RheQjHm+L._AC_UF894,1000_QL80_.jpg",
  //     description: "Mousepad which is ethically sourced",
  //     price: 10.99,
  //   },
  //   {
  //     name: "Edible Forks",
  //     image:
  //       "https://i.cbc.ca/1.4763252.1532634753!/fileImage/httpImage/bakey-s-3.jpg",
  //     description: "Edible forks instead of plastic!",
  //     price: 12.0,
  //   },
  //   {
  //     name: "Go Green shirt",
  //     image:
  //       "https://i.pinimg.com/originals/a4/6a/bb/a46abbaf15440e5daf83e9350fc4e9b7.jpg",
  //     description: "Recycled material shirt, sport the green!",
  //     price: 19.99,
  //   },
  //   {
  //     name: "Reuseable bag",
  //     image:
  //       "https://cdn.shopify.com/s/files/1/0070/7032/files/blank_tote_merch_swag_fashion_print_on_demand.jpg?v=1689965049",
  //     description: "Reuseable and recycled bag",
  //     price: 9.99,
  //   },
  //   {
  //     name: "Reuseable tupperware silicone lids",
  //     image:
  //       "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1681744106-orblue-silicone-stretch-lids-643d60d5ac251.jpg?crop=1xw:1xh;center,top&resize=980:*",
  //     description: "Reuseable silicone lids",
  //     price: 9.99,
  //   },
  // ];
  const { categoryname } = useParams();
  console.log(categoryname)
  const [category, setCategory] = useState("")
  const [product, setProduct] = useState([]);
  // fetch product based on category passed through useParams
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/category/${categoryname}`)
      .then((res) => {
        console.log("RES.DATA*****", res.data);
        console.log("RES.DATA.CATEGORY.PRODUCT**", res.data.category);
        setProduct(res.data.category.products);
        setCategory(res.data.category)
      })
      .catch((err) => {
        console.error("❌❌❌❌", err);
      });
  }, [categoryname]);

  return (
    <>
      {/* Large top hero section */}
      <div
        id="large-hero-shop"
        height="2000px"
        className="w-100 large-margin-top">
        <figure class="text-center">
          <blockquote class="blockquote text-white">
            <h1>"The Earth is what we all have in common"</h1>
          </blockquote>
          <figcaption class="blockquote-footer text-black">
            Naturalist and Writer,{" "}
            <cite title="Source Title">Wendell Berry</cite>
          </figcaption>
        </figure>
        <div className="justify-center d-flex">
          <button className="text-center btn btn-lg btn-success">
            Shop Eco-Friendly Now
          </button>
        </div>
      </div>

      <div className="container">
        {/* Top categories */}
        <div className="justify-around d-flex">
          <div id="trending-cat-one" className="p-4 m-3 text-center border ">
            <h1 className="margin-top new-title">Trending</h1>
            <button className="shadow btn btn-success margin-top margin-bottom">
              Shop Trending
            </button>
          </div>
          <div id="new-cat-one" className="p-4 m-3 text-center border ">
            <h1 className="margin-top new-title">New</h1>
            <button className="shadow btn btn-success margin-top margin-bottom">
              Shop New
            </button>
          </div>
          <div id="hot-cat-one" className="p-4 m-3 text-center border ">
            <h1 className="margin-top new-title">Hot</h1>
            <button className="shadow btn btn-success margin-top margin-bottom">
              Shop Hot
            </button>
          </div>
        </div>

        <h1 className="text-center margin-top">{category.name}</h1>
        <hr />
        <div className="flex-wrap d-flex w-100">
          {product.map((product) => (
            <TrendingProduct key={product.productName} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoryOne;
