import React, { useEffect } from "react";
import roboticsMainImage from "../../../../images/course-images/robotics.jpeg";
import electronicsImage from "../../../../images/course-images/electronics.jpeg";
import industrialImage from "../../../../images/course-images/industrial.jpeg";
import mobileImages from "../../../../images/course-images/mobile.jpg";
// import artImages from "../../../../images/course-images/art.jpg";
import backgroundImage from "../../../../images/course-images/breadborad.jpg";
import breadBoardImage from "../../../../images/course-images/eboard.jpg";
import { NavLink } from "react-router-dom";
import "./ElectronicsWithBrreadBoard.css";
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

export default function ElectronicsWithBrreadBoard() {
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
      <div className="board-title" data-aos="fade-up">
        <h1>Electronics With BreadBoard</h1>
        <img src={breadBoardImage} alt="" />
      </div>
      <div className="breadboard-module-info" data-aos="fade-up">
        <div className="module-1">
          <h3>Module 6 – Electronics With BreadBoard</h3>
        </div>
        <div className="module-1-content">
          <div className="module-1-description">
            <div className="breadboard-module-1">
              <div className="breadboard-icon">
                <HiOutlineUserGroup />
              </div>
              <p>
                <strong>Target Groups</strong>: Grade 4 – 7 and Grade 8 – 12
              </p>
            </div>

            <div className="breadboard-module-1">
              <div className="breadboard-icon">
                <FaRegCalendarTimes />
              </div>
              <p>
                <strong>Period</strong>: Trimester – (max. 8 workshops, once per
                week)
              </p>
            </div>
            <div className="breadboard-module-1">
              <div className="breadboard-icon">
                <BiTimeFive />
              </div>
              <p>
                <strong>Time</strong>: 14H00 – 16H30
              </p>
            </div>
            <div className="breadboard-module-1">
              <div className="breadboard-icon">
                <BsFillStarFill color="#ffc500" />{" "}
                <BsFillStarFill color="#ffc500" /> <BsStar color="#ffc500" />
              </div>
              <p>
                <strong>Course Fee</strong>: N$ 1 500.00
              </p>
            </div>
            <div className="breadboard-module-1">
              <div className="breadboard-icon">
                <FaToolbox />
              </div>
              <p>
                <strong>Equipment</strong>: Lego Robotics Mindstorms EV3 and
                Laptops
              </p>
            </div>
          </div>
          <div className="module-1-info">
            <h3>Highlights</h3>

            <p>
              <li>Recreate circuits on the breadboard</li>
              <li>Electricity flow</li>
              <li>Conductors and Resistors</li>
              <li>Light emitting diodes</li>
              <li>Build interactive circuits</li>
            </p>
          </div>
          <div className="module-1-info">
            <h3>Course description</h3>
            <p>
              In this course, learners dig deeper into electronics with ease
              using fun interactive projects. Learners are tasked to recreate
              prebuild circuits on the bread board to understand electricity
              flow. They will experience circuit components, such resistors,
              diodes, transistors to build basic flip-flop and truth logic
              circuits to reinforce confidence in electricity logic control.
            </p>
            <p>Upon completion of this course, learners will be able to:</p>
            <p>
              <li>Understand conductivity, and resistance</li>
              <li>
                Classify materials as electricity conductors or nonconductors
              </li>
              <li>Create interactive circuits with LEDs</li>
              
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
