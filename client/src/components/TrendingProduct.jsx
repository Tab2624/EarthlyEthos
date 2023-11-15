import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

const TrendingProduct = (props) => {

  const checkCategory = () => {
    if (props.categoryname === "Hot" || props.categoryname === "Trending" || props.categoryname === "New") {
      return props.categoryname
    }
  }

  return (
    <div id="product" className="p-3 m-1 border rounded">
      <div className="width-300">
        <img
          src={props.product.image}
          className="width-300 height-300"
          alt={props.product.productName}
        />
        <div className="mt-3">
          <h5>
            {props.product.productName}{" "}
            <span class="badge text-bg-danger">{checkCategory()}</span>
            <span class="badge text-bg-secondary">Trending</span>
          </h5>
          <hr />
          <p>{props.product.description}</p>
          <div className="justify-around d-flex">
            <button className="shadow btn btn-primary">View Product</button>
            <button className="shadow btn btn-success">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingProduct;
