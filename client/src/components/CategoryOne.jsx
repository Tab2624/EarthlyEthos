import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import TrendingProduct from "./TrendingProduct";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const CategoryOne = (props) => {
  
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);

    // Optionally, you can add a cleanup function to scroll back to the top
    // when the component is unmounted
    return () => {
      window.scrollTo(0, 0);
    };
  }, []);

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
            <Link to="/category/Trending" className="shadow btn btn-success margin-top margin-bottom">
              Shop Trending
            </Link>
          </div>
          <div id="new-cat-one" className="p-4 m-3 text-center border ">
            <h1 className="margin-top new-title">New</h1>
            <Link to="/category/New" className="shadow btn btn-success margin-top margin-bottom">
              Shop New
            </Link>
          </div>
          <div id="hot-cat-one" className="p-4 m-3 text-center border ">
            <h1 className="margin-top new-title">Hot</h1>
            <Link to="/category/Hot" className="shadow btn btn-success margin-top margin-bottom">
              Shop Hot
            </Link>
          </div>
        </div>

        <h1 className="text-center margin-top">{category.name}</h1>
        <hr />
        <div className="flex-wrap d-flex w-100">
          {product.map((product) => (
            <TrendingProduct key={product.productName} product={product} categoryname={categoryname} addToCart={props.addToCart}/>
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoryOne;
