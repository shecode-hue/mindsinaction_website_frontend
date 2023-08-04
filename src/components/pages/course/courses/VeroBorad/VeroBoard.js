import Aos from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import React, { useEffect } from "react";
import exploringMainImage from "../../../../images/course-images/exploring.jpeg";
import electronicsImage from "../../../../images/course-images/electronics.jpeg";
import industrialImage from "../../../../images/course-images/industrial.jpeg";
import mobileImages from "../../../../images/course-images/mobile.jpg";
import backgroundImage from "../../../../images/course-images/veroboard.png";
import { NavLink } from "react-router-dom";
import {
  HiOutlineUserGroup,
  FaRegCalendarTimes,
  BiTimeFive,
  BsFillStarFill,
  BsStar,
  FaToolbox,
} from "react-icons/all";
import "./VeroBoard.css";

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
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

//gallery array(images)
const projects = [
  {
    img: exploringMainImage,
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

export default function VeroBoard() {
  useEffect(() => {
    Aos.init({
      duration: 3000,
    });
  }, []);

  return (
    <div>
      <div className="veroboard-each-slide">
        <div
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.95),rgba(255, 255, 255, 0.5)),url(${backgroundImage})`,
            width: "100%",
            height: "250px",
            backgroundPosition: "center",
            backgroundSize: "cover",
            // position: "relative",
          }}
        ></div>
      </div>
      <div className="veroboard-title" data-aos="fade-up">
        <h1>Electronics With Vero Board</h1>
        <img src={backgroundImage} alt="" />
      </div>
      <div className="veroboard-module-info">
        <div className="veroboard-module-3" data-aos="fade-up">
          <h3>Module 3 – Electronics With Vero Board </h3>
        </div>
        <div className="veroboard-module-3-content" data-aos="fade-up">
          <div className="veroboard-module-3-description">
            <div className="veroboard-module-3">
              <div className="veroboard-icon">
                <HiOutlineUserGroup />
              </div>
              <p>
                <strong>Target Groups</strong>: Grade 8 – 12
              </p>
            </div>

            <div className="veroboard-module-3">
              <div className="veroboard-icon">
                <FaRegCalendarTimes />
              </div>
              <p>
                <strong>Period</strong>: Trimester – (max. 8 workshops, once per
                week)
              </p>
            </div>
            <div className="veroboard-module-3">
              <div className="veroboard-icon">
                <BiTimeFive />
              </div>
              <p>
                <strong>Time</strong>: 14H00 – 16H30
              </p>
            </div>
            <div className="veroboard-module-3">
              <div className="veroboard-icon">
                <BsFillStarFill color="#ffc500" />{" "}
                <BsFillStarFill color="#ffc500" /> <BsStar color="#ffc500" />
              </div>
              <p>
                <strong>Course Fee</strong>: N$ 2 500.00
              </p>
            </div>
            <div className="veroboard-module-3">
              <div className="veroboard-icon">
                <FaToolbox />
              </div>
              <p>
                <strong>Equipment</strong>: MecLab Stations (Station Stack
                Magazine, Station Conveyor, Station Handling) and Laptops
              </p>
            </div>
          </div>
          <div className="veroboard-module-3-info">
            <h3>Highlights</h3>
            <p>
              <li>Programming techniques for micro-controllers</li>
              <li>Basic electronic circuits</li>
              <li>Input-output peripherals</li>
              <li>Arduino sensor technologies</li>
              <li>Motors and other actuators</li>
              <li>Do-It-Yourself projects with Arduino</li>
            </p>
            <h3>Course description</h3>
            <p>
              In this course, learners start to tinker with the Arduino
              micro-controller. Programming with the Arduino IDE for real life
              applications.
            </p>
            <h3>Course competencies</h3>
            <p>
              Upon completion of this course, learners will be a ble to:
              <li>Identify elements on an Arduino micro- controller</li>
              <li>Build basic circuits</li>
              <li>Run and control programs using the Arduino IDE</li>
              <li>Use input and output peripherals</li>
              <li>Differentiate between digital and analogue interfaces</li>
              <li>Use sensors, motors and other Arduino products</li>
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
