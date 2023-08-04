import React from "react";
import "./Arduino.css";
import ArduinoImage from "../../../images/products-images/funduino_start.png";
import Image1 from "../../../images/products-images/arduino.png";
import Image2 from "../../../images/products-images/arduino-1.png";
import Image3 from "../../../images/products-images/arduino-2.png";
import SolderingImage from "../../../images/products-images/soldering-kit.png";
import ReactImageZoom from "react-image-zoom";
import { BsStarFill } from "react-icons/all";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { NavLink } from "react-router-dom";

export default function Arduino() {
  //image zoom in properties
  const props = {
    width: 400,
    height: 320,
    zoomPosition: "original",
    zoomWidth: 400,
    img: ArduinoImage,
  };

  const arduinoParts = [
    {
      image: ArduinoImage,
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

  const arduinoRelatedProducts = [
    {
      productImage: SolderingImage,
      productName: "Soldering Iron Kit",
      productPrice: "900.00",
      productLink: "/Soldering-icon-kit",
    },
  ];

  //Arduin properties
  const arduinProperties = [
    {
      arduinName: "Arduino UNO Kit",
      reviewedCustomers: 1,
      ardiunPrice: "950",
      arduinDescription:
        "The Arduino Starter Kit provides an open-source electronics prototyping platform based on flexible, easy-to-use hardware and software. It contains all of the essential components required to start programming with the Arduino Uno board.",
      amountInStock: 20,
      category: "Eletronics",
    },
  ];
  return (
    <div className="arduino-main">
      {arduinProperties.map((x, i) => {
        return (
          <div key={i} className="arduino-image-content">
            <div className="arduin-image">
              <ReactImageZoom {...props} />
            </div>
            <div className="arduin-content">
              <h1>{x.arduinName}</h1>
              <p>
                <span>
                  <BsStarFill color="#ffc500" />
                  <BsStarFill color="#ffc500" />
                  <BsStarFill color="#ffc500" />
                  <BsStarFill color="#ffc500" />
                  <BsStarFill color="#ffc500" />
                </span>
                <span className="ardiun-customer">{x.reviewedCustomers} </span>
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
      <div className="arduin-image-contaner">
        {arduinoParts.map((x, i) => {
          return (
            <div key={i} className="arduin-images">
              <img src={x.image} alt="" />
            </div>
          );
        })}
      </div>
      <div className="arduino-tabs">
        <Tabs>
          <TabList>
            <Tab>Description</Tab>
            <Tab>Reviews</Tab>
          </TabList>

          <TabPanel>
            <h2>Description</h2>
            <p className="tab-subheading">Packing list:</p>
            <p>
              1X for UNO R3+USB cable;
              <br />
              1X 65PCS/pack BREADBOARD JUMPERS;
              <br />
              1X830 Points HIGH QUALITY BREADBOARD;
              <br />
              15XLED (Red, Green, Yellow);
              <br />
              30X RESISTORS(220R, 10K, 1K);
              <br />
              1X 10 PIN DUPONT LINE(MALE TO FEMALE);
              <br />
              1X Potentiometer;
              <br />
              1X Active Buzzer;
              <br />
              1X Passive Buzzer;
              <br />
              1X 74HC595N;
              <br />
              1X Infrared receiving head;
              <br />
              1X LM35DZ;
              <br />
              1X Flame sensor;
              <br />
              1X Roll Ball Switch;
              <br />
              3X 5mm LDR;
              <br />
              5X Button Switch with Cap;
              <br />
              1X IR remote control;
              <br />
              1X Four digital tube;
              <br />
              1X 8*8 Dot Matrix;
              <br />
              1X One digital tube;
              <br />
              1X UNL2003 driver board;
              <br />
              1X 5V Stepper motor;
              <br />
              1X SG90;
              <br />
              1X LCD1602 IIC I2C;
              <br />
              1X PS2 GAME JOYSTICK;
              <br />
              1X DHT11 Digital Temperature and Humidity Sensor;
              <br />
              1X Water level measurement module;
              <br />
              1X RFID module;
              <br />
              1X RFID KEY RING;
              <br />
              1X RFID CARD;
              <br />
              1X SOUND MODULE;
              <br />
              1X 1 ROAD RELAY MODULE;
              <br />
              1X RTC Module;
              <br />
              1X 16 buttons Matrix Keyboard;
              <br />
              1X RGB Three Color Module;
              <br />
              1X 9V Battery Connector. <br />
            </p>
            <div className="arduino-related-products">
            <h2>Related products</h2>
              {arduinoRelatedProducts.map((x, i) => {
                return (
                  <div key={i} className="arduino-products">
                    <NavLink exact to={x.productLink}>
                      <div className="arduino-product-image">
                        <img src={x.productImage} alt="" />
                      </div>
                      <div className="arduino-product-content">
                        <h4>{x.productName}</h4>
                        <p className="arduino-product-star">
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
