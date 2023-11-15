import React from 'react'
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import GoBack from './GoBack';
import "../App.css";

const ProductViewOne = (props) => {

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);

    // Optionally, you can add a cleanup function to scroll back to the top
    // when the component is unmounted
    return () => {
      window.scrollTo(0, 0);
    };
  }, []);
  
  const [product, setProduct] = useState([]);
  const { id } = useParams();

    // const product =
    // {
    //     name: "Backpack",
    //     image:
    //       "https://www.stoneycloverlane.com/cdn/shop/products/0326_Shot_13_Hand_Model_Classic_Backpack_CottonCandy_0271_RT_V3_grande.jpg?v=1650573274",
    //     description: "This is a backpack",
    //     price: 14.99,
    //   }

      useEffect(() => {
        axios
          .get(`http://localhost:8000/api/products/${id}`)
          .then((res) => {
            console.log("Axios get one RES.DATA*****", res.data.products);
            setProduct(res.data.products);
          })
          .catch((err) => {
            console.error("❌❌❌❌", err);
          });
      }, []);
    

  return (
    <div className='large-margin-top-2'>
        <div className='container'>
            <div className='d-flex'>
            <img className='border shadow' src={product.image} alt={product.productName} />
            <div className='p-3 w-100'>
                <h1>{product.productName}</h1>
                <hr />
                <h3>⭐⭐⭐⭐⭐</h3>
                <p>{product.description}</p>
                <hr />
                <div className='d-flex justify-between w-100'>
                    <h1>$ {product.price}</h1>
                    <button onClick={() => props.addToCart(product)} className='btn btn-outline-success'><div className='d-flex items-center'>+ Add to Cart <img width="25" height="25" src="https://img.icons8.com/glyph-neue/64/40C057/shopping-cart.png" alt="shopping-cart"/></div></button>
                    <GoBack/>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default ProductViewOne