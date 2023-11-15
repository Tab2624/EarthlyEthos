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
    <div id="product" className="m-1 border rounded p-3">
      <div className="width-300">
        <img
          src={props.product.image}
          className="width-300 height-300"
          alt={props.product.name}
        />
        <div className="mt-3">
          <h5>
            {props.product.productName}{" "}
            <span class="badge text-bg-danger">{checkCategory()}</span>
          </h5>
          <hr />
          <p>{props.product.description}</p>
          <div className="d-flex justify-around">
            <button className="btn btn-primary shadow">View Product</button>
            <button className="btn btn-success shadow">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingProduct;
