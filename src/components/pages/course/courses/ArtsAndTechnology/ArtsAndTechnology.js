import React, { useEffect } from "react";
import roboticsMainImage from "../../../../images/course-images/robotics.jpeg";
import electronicsImage from "../../../../images/course-images/electronics.jpeg";
import industrialImage from "../../../../images/course-images/industrial.jpeg";
import mobileImages from "../../../../images/course-images/mobile.jpg";
// import artImages from "../../../../images/course-images/art.jpg";
import backgroundImage from "../../../../images/about-images/image1.jpg";
import { NavLink } from "react-router-dom";
import "./ArtsAndTechnology.css";
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

export default function ArtsAndTechnology() {
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
      <div className="tech-title" data-aos="fade-up">
        <h1>Introduction Arts and Technology</h1>
        <img src={roboticsMainImage} alt="" />
      </div>
      <div className="technology-module-info" data-aos="fade-up">
        <div className="module-1">
          <h3>Module 5 – Introduction Arts and Technology</h3>
        </div>
        <div className="module-1-content">
          <div className="module-1-description">
            <div className="technology-module-1">
              <div className="technology-icon">
                <HiOutlineUserGroup />
              </div>
              <p>
                <strong>Target Groups</strong>: Grade 4 – 7 and Grade 8 – 12
              </p>
            </div>

            <div className="technology-module-1">
              <div className="technology-icon">
                <FaRegCalendarTimes />
              </div>
              <p>
                <strong>Period</strong>: Trimester – (max. 8 workshops, once per
                week)
              </p>
            </div>
            <div className="technology-module-1">
              <div className="technology-icon">
                <BiTimeFive />
              </div>
              <p>
                <strong>Time</strong>: 14H00 – 16H30
              </p>
            </div>
            <div className="technology-module-1">
              <div className="technology-icon">
                <BsFillStarFill color="#ffc500" />{" "}
                <BsFillStarFill color="#ffc500" /> <BsStar color="#ffc500" />
              </div>
              <p>
                <strong>Course Fee</strong>: N$ 1 500.00
              </p>
            </div>
            <div className="technology-module-1">
              <div className="technology-icon">
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
              This course advances from the preceding courses with Kibo.
              Learners are challenged to transform Kibo to whatever they
              imagine. The complexity of problem solving activities increases.
              Learners will use their creations to tell stories, relate it to
              the environment and local communities. QR coding, art, building
              skills and culture are integrated in this course.
            </p>
            <p>
              <li>Combine the imagine, plan and making processes</li>
              <li>
              Express themselves freely in design thinking process
              </li>
              <li>
              Intentionally pick appropriate tools and materials
              </li>
              <li>
              Learn about architecture and construction
              </li>
              <li>
              Apply the engineering design process
              </li>
              <li>
              Generate personalized sequences with QR codes
              </li>
              <li>
              Create a project from start to finish
              </li>
              <li>Collaboration and Team Work</li>
              <li>
              Collaborate with peers towards an end goal
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
