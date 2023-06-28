import Aos from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import React, { useEffect } from "react";
import exploringMainImage from "../../../../images/course-images/exploring.jpeg";
import electronicsImage from "../../../../images/course-images/electronics.jpeg";
import industrialImage from "../../../../images/course-images/industrial.jpeg";
import mobileImages from "../../../../images/course-images/mobile.jpg";
import backgroundImage from "../../../../images/course-images/creativity-kibo.jpg";
import SteamEducationBackground from "../../../../images/course-images/steam-education.jpeg";
import { NavLink } from "react-router-dom";
import "./SteamEducationWorks.css";
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

function SteamEducationWorks() {
  useEffect(() => {
    Aos.init({
      duration: 3000,
    });
  }, []);

  return (
    <div>
      <div className="steam-edu-each-slide">
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
      <div className="steam-title" data-aos="fade-up">
        <h1>Steam Education Works</h1>
        <img src={SteamEducationBackground} alt="" />
      </div>
      <div className="steam-module-info">
        <div className="steam-module-3" data-aos="fade-up">
          <h3>Module 3 – Steam Education Works </h3>
        </div>
        <div className="steam-module-3-content" data-aos="fade-up">
          <div className="steam-module-3-description">
            <div className="steam-module-3">
              <div className="steam-icon">
                <HiOutlineUserGroup />
              </div>
              <p>
                <strong>Target Groups</strong>: Grade 8 – 12
              </p>
            </div>

            <div className="steam-module-3">
              <div className="steam-icon">
                <FaRegCalendarTimes />
              </div>
              <p>
                <strong>Period</strong>: Trimester – (max. 8 workshops, once per
                week)
              </p>
            </div>
            <div className="steam-module-3">
              <div className="steam-icon">
                <BiTimeFive />
              </div>
              <p>
                <strong>Time</strong>: 14H00 – 16H30
              </p>
            </div>
            <div className="steam-module-3">
              <div className="steam-icon">
                <BsFillStarFill color="#ffc500" />{" "}
                <BsFillStarFill color="#ffc500" /> <BsStar color="#ffc500" />
              </div>
              <p>
                <strong>Course Fee</strong>: N$ 2 500.00
              </p>
            </div>
            <div className="steam-module-3">
              <div className="steam-icon">
                <FaToolbox />
              </div>
              <p>
                <strong>Equipment</strong>: MecLab Stations (Station Stack
                Magazine, Station Conveyor, Station Handling) and Laptops
              </p>
            </div>
          </div>
          <div className="steam-module-3-info">
            <h3>Highlights</h3>
            <p>
              <li>Links between math, science, arts, technology and engineering</li>
              <li>
                Combine different colors, tex- tures and media in creations.
              </li>
              <li>Problem identification, and entrepreneurship</li>
              <li>Digital fabrication methods</li>
              <li>Prototype building</li>
              <li>Entrepreneurship</li>
              <li>Pitching in business commu nications</li>
            </p>
            <h3>Course description</h3>
            <p>
              This course provide an authentic learning experience to cultivate
              practical competencies in STEAM. Integrative STEAM education
              combines math and science concepts with technology, arts, and
              engineering skills to identify and solve problems experienced in
              local communities. The problem-based activities motivate learners
              to develop intuitive creativity, authentic interest in innovation,
              develop a culture of making. Learners are challenged to identify a
              problem in their communities and turn the problem into a business
              idea, build a prototype and conduct a market research.
            </p>
            <h3>Course competencies</h3>
            <p>
            Upon completion of this course, learners will be able to:
              <li>Make connections between STEAM concepts</li>
              <li>Identify real-world problems</li>
              <li>Build a prototype from idea concept</li>
              <li>Use digital fabrication methods</li>
              <li>Recognize business opportunity in a problem</li>
              <li>Conduct further investigation about the problem</li>
              <li>Use prototype to conduct market research</li>
              <li>Communicate business idea and pitch</li>
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

export default SteamEducationWorks;
