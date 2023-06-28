import React, { useEffect, useState } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import "./Shop.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Axios from "axios";
// import { response } from "express";

export default function Shop() {
  //creating products' array
  const [shopProducts, setShopProducts] = useState([]);

  //Aos animation initiatialization
  useEffect(() => {
    Aos.init({
      duration: 20000,
    });
  }, []);

  //Getting product's data from backend
  useEffect(() => {
    Axios.get("https://mindsinaction.com.na/api/getProduct.php").then(
      (response) => {
        console.log(response);
        setShopProducts(response.data);
      }
    );
  }, []);

  const numberOfProducts = shopProducts.length;

  return (
    <div className="shop-main">
      <div className="shop-title-header" data-aos="fade-up">
        <h1>Shop</h1>
        <p className="shop-products-results">
        Showing all <span>{numberOfProducts} </span> results
      </p>
      </div>
      
      <div className="shop-c" data-aos="fade-up">
        <div className="shop-cards">
          {shopProducts.map((x, i) => {
            return (
              <div key={i} className="shop-card">
                {/* <NavLink exact to={""}> */}
                <div className="shop-image">
                  <TransformWrapper>
                    <TransformComponent>
                      <img
                        src={
                          "https://mindsinaction.com.na/api/product/" +
                          x.image_url
                        }
                        alt="Product"
                      />
                    </TransformComponent>
                  </TransformWrapper>
                </div>

                <div className="shop-content">
                  <h4>{x.product_name}</h4>
                  <div className="shop-hr">
                    <p className="price">
                      N$<span>{x.product_price}</span>
                    </p>
                    <p className="quantity">
                      {" "}
                      <span>{x.quantity}</span> in stock
                    </p>
                  </div>
                </div>
                <div className="shop-border"></div>
                {/* </NavLink> */}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
