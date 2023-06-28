import Aos from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import React, { useEffect } from "react";
import exploringMainImage from "../../../../images/course-images/exploring.jpeg";
import electronicsImage from "../../../../images/course-images/electronics.jpeg";
import industrialImage from "../../../../images/course-images/industrial.jpeg";
import mobileImages from "../../../../images/course-images/mobile.jpg";
import alternativeBackground from "../../../../images/course-images/alternative-background.jpg";
import { NavLink } from "react-router-dom";
import "./AlternativeEnergy.css";
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

export default function AlternativeEnergy() {
  useEffect(() => {
    Aos.init({
      duration: 3000,
    });
  }, []);

  return (
    <div>
      <div
        className="alternative-energy"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.95),rgba(255, 255, 255, 0.5)),url(${alternativeBackground})`,
          width: "100%",
          height: "250px",
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          // position: "relative",
        }}
      ></div>
      <div className="alternative-title" data-aos="fade-up">
        <h1>Alternative Energy</h1>
        <img src={alternativeBackground} alt="" />
      </div>
      <div className="alternative-module-info">
        <div className="alternative-module-3" data-aos="fade-up">
          <h3>Module 3 – Alternative Energy </h3>
        </div>
        <div className="alternative-module-3-content" data-aos="fade-up">
          <div className="alternative-module-3-description">
            <div className="alternative-module-3">
              <div className="alternative-icon">
                <HiOutlineUserGroup />
              </div>
              <p>
                <strong>Target Groups</strong>: Grade 8 – 12
              </p>
            </div>
            <div className="alternative-module-3">
              <div className="alternative-icon">
                <FaRegCalendarTimes />
              </div>
              <p>
                <strong>Period</strong>: Trimester – (max. 8 workshops, once per
                week)
              </p>
            </div>
            <div className="alternative-module-3">
              <div className="alternative-icon">
                <BiTimeFive />
              </div>
              <p>
                <strong>Time</strong>: 14H00 – 16H30
              </p>
            </div>
            <div className="alternative-module-3">
              <div className="alternative-icon">
                <BsFillStarFill color="#ffc500" />{" "}
                <BsFillStarFill color="#ffc500" /> <BsStar color="#ffc500" />
              </div>
              <p>
                <strong>Course Fee</strong>: N$ 2 500.00
              </p>
            </div>
            <div className="alternative-module-3">
              <div className="alternative-icon">
                <FaToolbox />
              </div>
              <p>
                <strong>Equipment</strong>: MecLab Stations (Station Stack
                Magazine, Station Conveyor, Station Handling) and Laptops
              </p>
            </div>
          </div>
          <div className="alternative-module-3-info">
            <h3>Highlights</h3>
            <p>
              <li>Sources of energy</li>
              <li>Power production and distribution</li>
              <li>Energy transformation</li>
              <li>Energy technologies and uses</li>
              <li>Strengths and limitations of ener- gy sources</li>
              <li>Energy efficiency</li>
            </p>
            <h3>Course description</h3>
            <p>
              This course provide an authentic learning experience to cultivate
              Taking the role of alternative energy engineers, working in
              response to a request from the City of Windhoek city planners who
              are building new houses in Otjomuise, learners are challenged to
              create a plan to support the energy needs of the residents where
              atleast 90% of the energy consumed should come from renewable
              sources.
            </p>
            <h3>Course competencies</h3>
            <p>
              Upon completion of this course, learners will be able to:
              <li>Explain the types and various forms of energy</li>
              <li>
                Discuss how energy can be transformed from one form to another
              </li>
              <li>Identify ways solar, wind, hydro energies can be used</li>
              <li>Explore current energy technologies and com ponents</li>
              <li>Recognize business opportunity in a problem</li>
              <li>
                Acknowledge advantages and disadvantages of renewable energies
              </li>
              <li>Perform measurements of energy levels</li>
              <li>Calculate the efficiency in the energy transfer process</li>
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
