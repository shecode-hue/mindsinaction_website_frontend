import React, { useEffect } from "react";
import roboticsMainImage from "../../../../images/course-images/robotics.jpeg";
import electronicsImage from "../../../../images/course-images/electronics.jpeg";
import industrialImage from "../../../../images/course-images/industrial.jpeg";
import mobileImages from "../../../../images/course-images/mobile.jpg";
import backgroundImage from "../../../../images/about-images/image1.jpg";
import { NavLink } from "react-router-dom";
import "./RoboticsProgramming.css";
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

export default function RoboticsProgramming() {
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
      <div className="rob-title" data-aos="fade-up">
        <h1>Introduction to Robotics and Programming</h1>
        <img src={roboticsMainImage} alt="" />
      </div>
      <div className="robotics-module-info" data-aos="fade-up">
        <div className="module-1">
          <h3>Module 1 – Introduction to Robotics and programming </h3>
        </div>
        <div className="module-1-content">
          <div className="module-1-description">
            <div className="robotics-module-1">
              <div className="robotics-icon">
                <HiOutlineUserGroup />
              </div>
              <p>
                <strong>Target Groups</strong>: Grade 4 – 7 and Grade 8 – 12
              </p>
            </div>

            <div className="robotics-module-1">
              <div className="robotics-icon">
                <FaRegCalendarTimes />
              </div>
              <p>
                <strong>Period</strong>: Trimester – (max. 8 workshops, once per
                week)
              </p>
            </div>
            <div className="robotics-module-1">
              <div className="robotics-icon">
                <BiTimeFive />
              </div>
              <p>
                <strong>Time</strong>: 14H00 – 16H30
              </p>
            </div>
            <div className="robotics-module-1">
              <div className="robotics-icon">
                <BsFillStarFill color="#ffc500" />{" "}
                <BsFillStarFill color="#ffc500" /> <BsStar color="#ffc500" />
              </div>
              <p>
                <strong>Course Fee</strong>: N$ 1 500.00
              </p>
            </div>
            <div className="robotics-module-1">
              <div className="robotics-icon">
                <FaToolbox />
              </div>
              <p>
                <strong>Equipment</strong>: Lego Robotics Mindstorms EV3 and
                Laptops
              </p>
            </div>
          </div>
          <div className="module-1-info">
            <h3>Course description</h3>
            <p>
              Learners use Lego Robotics Mindstorms EV3 hardware and software to
              build and program robots to solve defined problems. In this
              course, learners are introduced to the following:
            </p>
            <p>
              <li>Problem Identification</li>
              <li>
                Application of math and science concepts to technology and
                engineering process.
              </li>
              <li>
                Interaction with the environment through sensors, exploring
                touch, color, ultrasonic sensor, etc.
              </li>
              <li>
                Programming and decision making in switches, repetition in
                loops, multitasking, procedures, variables, and constants.
              </li>
              <li>
                Passive attachments design and construct passive attachments to
                pull, push, hook, and move items.
              </li>
              <li>
                Active attachments to pull, push, hook, and move items,
                incorporating motors and sensors.
              </li>
              <li>
                Data logging, analysis of sensor data through different types of
                experiments.
              </li>
              <li>Collaboration and Team Work</li>
              <li>
                Presentations and get excited about robotics competitions.
              </li>
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
