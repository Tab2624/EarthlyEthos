import React from "react";
import CategoryBox from "./CategoryBox";
import { useEffect, useState } from "react";


const Shop = (props) => {

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);

    // Optionally, you can add a cleanup function to scroll back to the top
    // when the component is unmounted
    return () => {
      window.scrollTo(0, 0);
    };
  }, []);

  const categories = [
    {
      name: "Clothing",
      imageURL:
        "https://thehollyspirit.org/wp-content/uploads/2022/02/Eco-Friendly-organic_clothing.jpeg",
      url:"/category/Clothing"
    },
    {
      name: "Lifestyle",
      imageURL:
        "https://roobags.com.au/wp-content/uploads/2019/07/eco-friendly-lifestyle-bamboo-toiletries.jpg",
        url:"/category/Lifestyle"
    },
    {
      name: "Outdoors",
      imageURL:
        "https://www.installitdirect.com/wp-content/uploads/2012/11/How-to-Create-an-Eco-Friendly-Outdoor-Living-Space.jpg?x21307",
        url:"/category/Outdoors"
    },
    {
      name: "Pet Products",
      imageURL:
        "https://www.kerry.com/content/dam/kerry/en/images/products/animal-and-pet-applications/pet-application-l3/pet-app-hero2.jpg",
        url:"/category/Pet%20Products"
    },
    {
      name: "Personal Care",
      imageURL:
        "https://imageio.forbes.com/specials-images/imageserve/637bf6e60dfc2253ec817eec/Organic-herbal-cosmetic-products-on-green-background--Top-view-beauty-spa-cosmetic/0x0.jpg?format=jpg&crop=3564,2673,x0,y0,safe&width=960",
        url:"/category/Personal%20Care"
    },
    {
      name: "Essentials",
      imageURL:
        "https://somewhat-sustainable.com/wp-content/uploads/2020/12/sustainable-on-the-go-essentials-1.jpg",
        url:"/category/Essentials"
    },
    {
      name: "Upcycled and Recycled",
      imageURL:
        "https://stepandrepeatla.com/wp-content/uploads/2019/11/green-backdrops-recycle.jpg",
        url:"/category/Upcycled%20and%20Recycled"
    },
    {
      name: "Garden",
      imageURL:
        "https://s42814.pcdn.co/wp-content/uploads/2023/02/Garden_iStock_1414023501-scaled.jpg.optimal.jpg",
        url:"/category/Garden"
    },
  ];

  return (
    <>
      <div className="large-margin-top d-flex">
        <div
          id="shop-new"
          className="items-center text-center border flex-short">
          <button className="shadow btn btn-lg btn-success margin-top-x margin-bottom-x">
            Shop New
          </button>
        </div>
        <div
          id="shop-trending"
          className="items-center text-center border flex-short">
          <button className="shadow btn btn-lg btn-success margin-top-x margin-bottom-x">
            Shop Trending
          </button>
        </div>
        <div
          id="shop-hot"
          className="items-center text-center border flex-short">
          <button className="shadow btn btn-lg btn-success margin-top-x margin-bottom-x">
            Shop Hot
          </button>
        </div>
      </div>

      <div className="container">
        <h1 className="text-center margin-top">Categories</h1>
        <hr />
        <div className="flex-wrap d-flex">
          {categories.map((category) => (
            <CategoryBox category={category} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Shop;
