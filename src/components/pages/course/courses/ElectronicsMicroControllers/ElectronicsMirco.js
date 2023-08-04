import React, { useEffect } from "react";
import backgroundImage from "../../../../images/about-images/image3.jpg";
import roboticsMainImage from "../../../../images/course-images/robotics.jpeg";
import electronicsImage from "../../../../images/course-images/electronics.jpeg";
import industrialImage from "../../../../images/course-images/industrial.jpeg";
import mobileImages from "../../../../images/course-images/mobile.jpg";
import { NavLink } from "react-router-dom";
import "./ElectronicsMicro.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import {
  HiOutlineUserGroup,
  FaRegCalendarTimes,
  BiTimeFive,
  BsFillStarFill,
  BsStar,
  FaToolbox,
  AiOutlineAppstoreAdd,
} from "react-icons/all";

//Array of sliding images
const config = {
  dots: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const projects = [
  {
    img: roboticsMainImage,
    pageLink: "/introduction-to-robotics-and-programming",
  },
  {
    img: electronicsImage,
    pageLink: "/electronics-with-microcontrollers-programming",
  },
  {
    img: industrialImage,
    pageLink: "/exploring-mechatronics",
  },
  {
    img: mobileImages,
    pageLink: "/mobile-development",
  },
];

export default function ElectronicsMirco() {
  useEffect(() => {
    Aos.init({
      duration: 3000,
    });
  }, []);

  return (
    <div>
      <div className="each-slide">
        <div
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.95),rgba(255, 255, 255, 0.5)),url(${backgroundImage})`,
            width: "100%",
            height: "250px",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            // position: "relative",
          }}
        ></div>
      </div>
      <div className="elec-title" data-aos="fade-up">
        <h1>Electronics with Microcontrollers Programming</h1>
        <img src={electronicsImage} alt="" />
      </div>
      <div className="electronic-module-info" data-aos="fade-up">
        <div className="module-1">
          <h3>Module 2 – Electronics with Microcontrollers Programming </h3>
        </div>
        <div className="module-1-content">
          <div className="module-1-description">
            <div className="electronic-module-1">
              <div className="electronics-icon">
                <HiOutlineUserGroup />
              </div>
              <p>
                <strong>Target Groups</strong>: Grade 4 – 7 and Grade 8 – 12
              </p>
            </div>

            <div className="electronic-module-1">
              <div className="electronics-icon">
                <FaRegCalendarTimes />
              </div>
              <p>
                <strong>Period</strong>: Trimester – (max. 8 workshops, once per
                week)
              </p>
            </div>
            <div className="electronic-module-1">
              <div className="electronics-icon">
                <BiTimeFive />
              </div>
              <p>
                <strong>Time</strong>: 14H00 – 16H30
              </p>
            </div>
            <div className="electronic-module-1">
              <div className="electronics-icon">
                <BsFillStarFill color="#ffc500" />{" "}
                <BsFillStarFill color="#ffc500" /> <BsStar color="#ffc500" />
              </div>
              <p>
                <strong>Course Fee</strong>: N$ 1 500.00
              </p>
            </div>
            <div className="electronic-module-1">
              <div className="electronics-icon">
                <FaToolbox />
              </div>
              <p>
                <strong>Equipment</strong>: Arduino UNO, Electronic components
                and Laptops
              </p>
            </div>
            <div className="electronic-module-1">
              <div className="electronics-icon">
                <AiOutlineAppstoreAdd />
              </div>
              <p>
                <strong>Prerequisite</strong>: Module 1 – Introduction to
                Robotics and programming
              </p>
            </div>
          </div>
          <div className="elec-module-info">
            <h3>Course description</h3>
            <p>
              Arduino is a prototype platform based on easy-to-use hardware and
              software. It consists of a circuit board, which can be programmed
              (referred to as a microcontroller) and software called Arduino IDE
              (Integrated Development Environment), which is used to write and
              upload the computer code to the physical board. Arduino provides a
              standard form factor that breaks the functions of the
              micro-controller into a more accessible package. This course is
              intended for enthusiastic learners or hobbyists. With Arduino, one
              can get to know the basics of micro-controllers, motors, sensors,
              resistors, and every other electronic component quickly and can
              start building prototypes with very little investment. This course
              is intended to make you comfortable in getting started with
              Arduino.
            </p>
            <p>
              <strong>Prerequisites</strong>
            </p>
            <p>
              We assume that you are already familiar with the basics of
              programming concepts. A basic understanding of microcontrollers
              and electronics are also expected. You may obtain this knowledge
              from Module 1 – Introductions to Robotics and Programming.
            </p>
            <p>
              <strong>Learning Outcome</strong>
            </p>
            <p>The learners will:</p>
            <p>
              <li>
                Learn the basics of electronics, including reading schematics
                (electronics diagrams)
              </li>
              <li>Learn how to prototype circuits with a breadboard</li>
              <li>Learn the Arduino programming language and IDE</li>
              <li>Prototype circuits and connect them to the Arduino</li>
              <li>
                Program basic Arduino examples to control different electronics
                (LED, motors, sensors, etc)
              </li>
              <li>
                Explore online resources for extending knowledge about the
                capabilities of the Arduino microcontroller
              </li>
              <li>Build your own project and Watch out for competitions</li>
            </p>
          </div>
        </div>
      </div>
      <div className="course-sliding-intro">
        <Slider {...config}>
          {projects.map((x, i) => {
            return (
              <div key={i} className="projects-image-cards">
                <NavLink to={x.pageLink}>
                  <img src={x.img} alt="" />
                </NavLink>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
