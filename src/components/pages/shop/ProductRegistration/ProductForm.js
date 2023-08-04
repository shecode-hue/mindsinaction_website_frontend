import React, { useState } from "react";
import "./ProductForm.css";
import axios from "axios";
// import { Redirect } from "react-router";

export default function ProductForm() {
  //creating states for product's details
  const [productName, setProductName] = useState(null);
  const [productPrice, setProductPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [productImage, setProductImage] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");

  //variable states
  const [productNameStatus, setProductNameStatus] = useState("");
  const [productPriceStatus, setProductPriceStatus] = useState("");
  const [productStatus, setProductStatus] = useState("");
  const [productImageStatus, setproductImageStatus] = useState("");

  //constructing a set of values for image data
  // const imageData = new FormData();
  // imageData.append("image", productImage);

  //sending the data to backend
  const submitProduct = () => {
    if (productName === null) {
      setProductNameStatus("Please enter product name!");
    }
    if (productPrice === 0) {
      setProductPriceStatus("Please enter product price!");
    }
    if (quantity === 0) {
      setProductStatus("Please enter product's quantity");
    }
    if (productImage === null) {
      setproductImageStatus("Please enter image url");
    } else {
      axios
        .post("http://localhost:3000/api/insert-product", {
          productName: productName,
          productPrice: productPrice,
          quantity: quantity,
          productImage: productImage,
        })
        .then((res) => {
          setUploadStatus(res);
          // if (res) {
          //   return <Redirect to="/Shop" />;
          // }
        })
        .then((res) => {
          setUploadStatus(res.message);
        })
        .catch((error) => {
          setUploadStatus(error.message);
        });
    }
  };

  return (
    <div>
      <div className="product-registration">
        <h1>Product registration form</h1>
        <p>{uploadStatus}</p>
        <div className="product-form">
          <div className="product-input">
            <p>{productNameStatus}</p>
            <input
              type="text"
              name="product-name"
              placeholder="Product name"
              onChange={(e) => {
                setProductName(e.target.value);
              }}
              required
            />
          </div>
          <div className="product-input">
            <p>{productPriceStatus}</p>
            <input
              type="text"
              name="product-price"
              placeholder="Product price"
              onChange={(e) => {
                setProductPrice(e.target.value);
              }}
              required
            />
          </div>
          <div className="product-input">
            <p>{productStatus}</p>
            <input
              type="text"
              name="quantity"
              placeholder="Quantity"
              onChange={(e) => {
                setQuantity(e.target.value);
              }}
              required
            />
          </div>
          <div className="product-input">
            <p>{productImageStatus}</p>
            <input
              type="text"
              name="image_url"
              placeholder="Image url"
              onChange={(e) => {
                setProductImage(e.target.value);
              }}
              required
            />
          </div>
          <button onClick={submitProduct}>Submit</button>
        </div>
      </div>
    </div>
  );
}
