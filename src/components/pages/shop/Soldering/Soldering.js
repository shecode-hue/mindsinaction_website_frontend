import React from "react";
import "./Soldering.css";
import ArduinoImage from "../../../images/products-images/funduino_start.png";
import Image1 from "../../../images/products-images/multimeter.jpg";
import Image2 from "../../../images/products-images/complete-kit.jpg";
import Image3 from "../../../images/products-images/soldering-iron.jpg";
import SolderingImage from "../../../images/products-images/soldering-kit.png";
import ReactImageZoom from "react-image-zoom";
import { BsStarFill } from "react-icons/all";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { NavLink } from "react-router-dom";

export default function Soldering() {
  //image zoom in properties
  const props = {
    width: 400,
    height: 320,
    zoomPosition: "original",
    zoomWidth: 400,
    img: SolderingImage,
  };

  const solderingParts = [
    {
      image: SolderingImage,
    },
    {
      image: Image1,
    },
    {
      image: Image2,
    },
    {
      image: Image3,
    },
  ];

  const solderingRelatedProducts = [
    {
      productImage: ArduinoImage,
      productName: "Arduino UNO Kit",
      productPrice: "950.00",
      productLink: "/Arduin-uno-kit",
    },
  ];

  //Arduin properties
  const solderingProperties = [
    {
      arduinName: "Soldering Iron Kit",
      reviewedCustomers: 1,
      ardiunPrice: "900",
      arduinDescription:
        "Soldering Iron Kit Welding Tool, Soldering Kit with LCD Digital Multimeter, 60W Soldering Iron with 5 Extra Tips, Stand, Desoldering Pump, Solder, Wire Stripper Cutter, Tweezers, Tape, Tool Bag.",
      amountInStock: 5,
      category: "Eletronics",
    },
  ];
  return (
    <div className="soldering-main">
    {solderingProperties.map((x, i) => {
      return (
        <div key={i} className="soldering-image-content">
          <div className="soldering-image">
            <ReactImageZoom {...props} />
          </div>
          <div className="soldering-content">
            <h1>{x.arduinName}</h1>
            <p>
              <span>
                <BsStarFill color="#ffc500" />
                <BsStarFill color="#ffc500" />
                <BsStarFill color="#ffc500" />
                <BsStarFill color="#ffc500" />
                <BsStarFill color="#ffc500" />
              </span>
              <span className="soldering-customer">{x.reviewedCustomers} </span>
              customer(s) reviewed
            </p>
            <p>
              <span>N${x.ardiunPrice}</span>
            </p>
            <p>{x.arduinDescription}</p>
            <p>
              <span>{x.amountInStock}</span> in stock
            </p>
            <p>
              Category: <span>{x.category}</span>{" "}
            </p>
          </div>
        </div>
      );
    })}
    <div className="soldering-image-contaner">
      {solderingParts.map((x, i) => {
        return (
          <div key={i} className="soldering-images">
            <img src={x.image} alt="" />
          </div>
        );
      })}
    </div>
    <div className="soldering-tabs">
      <Tabs>
        <TabList>
          <Tab>Description</Tab>
          <Tab>Reviews</Tab>
        </TabList>

        <TabPanel>
          <h2>Description</h2>
          <p className="tab-subheading">Soldering Kit Includes:</p>
          <p>
          1* soldering iron
            <br />
            1* digital multimeter
            <br />
            2* multimeter pens
            <br />
            5* soldering tips
            <br />
            1* solder wire
            <br />
            1* desoldering pump
            <br />
            1* soldering iron stand
            <br />
            1* cleaning sponge
            <br />
            1* screwdriver
            <br />
            1X 74HC595N;
            <br />
            1* wire stripper cutter
            <br />
            1* anti-static tweezers
            <br />
            1* insolation tape
            <br />
            2* electric wires
            <br />
            1* PU bag
            <br />
            1* User Manual
          </p>
          <div className="soldering-related-products">
          <h2>Related products</h2>
            {solderingRelatedProducts.map((x, i) => {
              return (
                <div key={i} className="soldering-products">
                  <NavLink exact to={x.productLink}>
                    <div className="soldering-product-image">
                      <img src={x.productImage} alt="" />
                    </div>
                    <div className="soldering-product-content">
                      <h4>{x.productName}</h4>
                      <p className="soldering-product-star">
                        <span>
                          <BsStarFill color="#ffc500" />
                          <BsStarFill color="#ffc500" />
                          <BsStarFill color="#ffc500" />
                          <BsStarFill color="#ffc500" />
                          <BsStarFill color="#ffc500" />
                        </span>
                      </p>
                      <p className="arduino-product-price">N${x.productPrice}</p>
                    </div>
                  </NavLink>
                </div>
              );
            })}
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  </div>
  );
}
