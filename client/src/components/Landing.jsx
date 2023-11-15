import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import TrendingProduct from "./TrendingProduct";
import { Link } from "react-router-dom";
import { useEffect,useState } from "react";
import axios from 'axios'

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
          <button className="shadow btn btn-lg btn-success">Shop Now</button>
        </div>
        <div id="photo-hero-2" className="text-center border w-50">
          <h1 className="fs-1">New Arrivals</h1>
          <Link to="/category/Lifestyle" className="shadow btn btn-lg btn-success">Shop Now</Link>
        </div>
      </div>

      {/* categories front page */}
      <div className="container">
        <div
          id="category-home"
          className="justify-around mt-5 text-center d-flex">
          <div
            id="category-home-1"
            className="border height-400 width-400 me-3">
            <h1>Clothing</h1>
            <Link to="/category/Clothing" className="shadow btn btn-success">
              View Category
            </Link>
          </div>
          <div id="category-home-2" className="border height-400 width-400 ">
            <h1>Personal Care</h1>
            <Link to="/category/Personal Care" className="shadow btn btn-success">
              View Category
            </Link>          </div>
          <div
            id="category-home-3"
            className="border height-400 width-400 ms-3">
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
                onClick={() => scrollToLeft("rowMoving1")}>
                <div className="arrow left"></div>
              </button>
            </div>
            <div className="d-flex rowToMove" id="rowMoving1">
              {products.map((product) => (
                <TrendingProduct product={product} />
              ))}
            </div>

            <div className="p-2 d-inline-flex justify-content-between">
              <button
                className="scrollBtn btnRight"
                onClick={() => scrollToRight("rowMoving1")}>
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
