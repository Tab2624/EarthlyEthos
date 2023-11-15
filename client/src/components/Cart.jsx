import React, { useContext, useEffect, useState } from "react";
import TrashCan from './TrashCan';
import { Routes, Route, Link, useNavigate } from "react-router-dom";

const Cart = (props) => {
    const [ price, setPrice ] = useState(0);

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
          price: 12.00,
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
        {
          name: "Cow Statue",
          image:
            "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1681744106-orblue-silicone-stretch-lids-643d60d5ac251.jpg?crop=1xw:1xh;center,top&resize=980:*",
          description: "Small cow statuette",
          price: 9.99,
        }
      ];

      function calculateTotal(products) {
        let total = 0;
        for (let product of products) {
          total += product.price;
        }
        return +(Math.round(total + "e+2") + "e-2");
      }

      useEffect(() => {
        const total = calculateTotal(products);
        setPrice(total);
      }, []);

  return (
    <div className='container large-margin-top-2'>
        <div className='p-2 mt-5 border rounded'>
            {products.map((product) => (
        <div id={product.name} className='justify-between p-1 m-1 w-100 border-bottom d-flex'>
            <p>{product.name}</p>
            <div className='d-flex'>
                <p>$ {product.price}</p>
                <TrashCan/>
            </div>
        </div>
            ))}
            <Link to="/shop" className="m-2 btn btn-outline-success">Continue Shopping</Link>
        </div>
        <div className="justify-between p-1 m-2 w-100 border-bottom d-flex">
            <h3>Total</h3>
            <h3>$ {price}</h3>
        </div>
        <div className="justify-center d-flex">
        <Link to="/checkout" className="btn btn-success w-25">Continue to Checkout</Link>
        </div>
    </div>
  )
}

export default Cart