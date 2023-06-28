import "./IntroductionToKibo.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import React, { useEffect } from "react";
import exploringMainImage from "../../../../images/course-images/exploring.jpeg";
import electronicsImage from "../../../../images/course-images/electronics.jpeg";
import industrialImage from "../../../../images/course-images/industrial.jpeg";
import mobileImages from "../../../../images/course-images/mobile.jpg";
import backgroundImage from "../../../../images/course-images/kibo.jpg";
import { NavLink } from "react-router-dom";

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

function IntroductionToKibo() {
  useEffect(() => {
    Aos.init({
      duration: 3000,
    });
  }, []);

  return (
    <div>
      <div className="kibo-each-slide">
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
      <div className="kibo-title" data-aos="fade-up">
        <h1>Introduction to Kibo</h1>
        <img src={backgroundImage} alt="" />
      </div>
      <div className="kibo-module-info" data-aos="fade-up">
        <div className="kibo-module-3">
          <h3>Module 3 – Introduction to Kibo </h3>
        </div>
        <div className="kibo-module-3-content">
          <div className="kibo-module-3-description">
            <div className="kibo-module-3">
              <div className="kibo-icon">
                <HiOutlineUserGroup />
              </div>
              <p>
                <strong>Target Groups</strong>: Grade 8 – 12
              </p>
            </div>

            <div className="kibo-module-3">
              <div className="kibo-icon">
                <FaRegCalendarTimes />
              </div>
              <p>
                <strong>Period</strong>: Trimester – (max. 8 workshops, once per
                week)
              </p>
            </div>
            <div className="kibo-module-3">
              <div className="kibo-icon">
                <BiTimeFive />
              </div>
              <p>
                <strong>Time</strong>: 14H00 – 16H30
              </p>
            </div>
            <div className="kibo-module-3">
              <div className="kibo-icon">
                <BsFillStarFill color="#ffc500" />{" "}
                <BsFillStarFill color="#ffc500" /> <BsStar color="#ffc500" />
              </div>
              <p>
                <strong>Course Fee</strong>: N$ 2 500.00
              </p>
            </div>
            <div className="kibo-module-3">
              <div className="kibo-icon">
                <FaToolbox />
              </div>
              <p>
                <strong>Equipment</strong>: MecLab Stations (Station Stack
                Magazine, Station Conveyor, Station Handling) and Laptops
              </p>
            </div>
          </div>
          <div className="kibo-module-3-info">
            <h3>Highlights</h3>
            <p>
              <li>Start tinkering</li>
              <li>Explore characteristics of Kibo</li>
              <li>Identify parts and functions</li>
              <li>Understand and apply se- quencing</li>
              <li>Learn computational thinking</li>
              <li>Create artistic models</li>
              <li>Communicate and present-ideas clearly</li>
            </p>
            <h3>Course description</h3>
            <p>
              In this introduction course, learners are exposed to arts and
              robotics through an easy to build artbot called Kibo. The artbot
              is very easy to assemble and gives grades 1 – 3 learners an
              interactive hands-on experience with arts and robotics. Learners
              are challenged to build, decorate and demonstrate new applications
              with the Kibo.
            </p>
            <h3>Course competencies</h3>
            <p>
              Upon completion of this course, learners will be able to:
              <li>Assemble a Kibo artbot from scratch</li>
              <li>Sequence basic movements with QR codes</li>
              <li>Identify and name components on the Kibo</li>
              <li>Design and construct her/his own artbot</li>
              <li>Explain the functionality of components on her his artbot</li>
              <li>Present the purpose of her/his artbot to peers</li>
              <li>Develop and run control programs in FluidSIM</li>
              <li>Explain the purpose of a Conveyor station</li>
              <li>Identify the components of a Conveyor station</li>
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

export default IntroductionToKibo;
