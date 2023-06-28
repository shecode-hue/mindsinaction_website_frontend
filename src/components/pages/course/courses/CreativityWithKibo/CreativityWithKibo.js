import Aos from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import React, { useEffect } from "react";
import exploringMainImage from "../../../../images/course-images/exploring.jpeg";
import electronicsImage from "../../../../images/course-images/electronics.jpeg";
import industrialImage from "../../../../images/course-images/industrial.jpeg";
import mobileImages from "../../../../images/course-images/mobile.jpg";
import backgroundImage from "../../../../images/course-images/creativity-kibo.jpg";
import { NavLink } from "react-router-dom";
import "./CreativityWithKibo.css";
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

function CreativityWithKibo() {
  useEffect(() => {
    Aos.init({
      duration: 3000,
    });
  }, []);

  return (
    <div>
      <div className="creativity-each-slide">
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
      <div className="creativity-title" data-aos="fade-up">
        <h1>Creativity with kKibo</h1>
        <img src={backgroundImage} alt="" />
      </div>
      <div className="creativity-module-info">
        <div className="creativity-module-3" data-aos="fade-up">
          <h3>Module 3 – Creativity with kKibo </h3>
        </div>
        <div className="creativity-module-3-content" data-aos="fade-up">
          <div className="creativity-module-3-description">
            <div className="creativity-module-3">
              <div className="creativity-icon">
                <HiOutlineUserGroup />
              </div>
              <p>
                <strong>Target Groups</strong>: Grade 8 – 12
              </p>
            </div>

            <div className="creativity-module-3">
              <div className="creativity-icon">
                <FaRegCalendarTimes />
              </div>
              <p>
                <strong>Period</strong>: Trimester – (max. 8 workshops, once per
                week)
              </p>
            </div>
            <div className="creativity-module-3">
              <div className="creativity-icon">
                <BiTimeFive />
              </div>
              <p>
                <strong>Time</strong>: 14H00 – 16H30
              </p>
            </div>
            <div className="creativity-module-3">
              <div className="creativity-icon">
                <BsFillStarFill color="#ffc500" />{" "}
                <BsFillStarFill color="#ffc500" /> <BsStar color="#ffc500" />
              </div>
              <p>
                <strong>Course Fee</strong>: N$ 2 500.00
              </p>
            </div>
            <div className="creativity-module-3">
              <div className="creativity-icon">
                <FaToolbox />
              </div>
              <p>
                <strong>Equipment</strong>: MecLab Stations (Station Stack
                Magazine, Station Conveyor, Station Handling) and Laptops
              </p>
            </div>
          </div>
          <div className="creativity-module-3-info">
            <h3>Highlights</h3>
            <p>
              <li>Construct models using basic art tools and materials.</li>
              <li>
                Combine different colors, tex- tures and media in creations.
              </li>
              <li>Self-expression in design and creating.</li>
              <li>Sequence advanced maneu-vers with QR codes.</li>
              <li>Add music and culture to art-bot.</li>
              <li>Communicate ideas clearly.</li>
            </p>
            <h3>Course description</h3>
            <p>
              In this course learners explore their creativity and develop a
              culture of making by adding on the artbot to make it their own.
              The goal for this course is to link arts and robotics in
              constructive play, through design, molding, and creative story
              telling. Problem solving and collaboration are incorporated in the
              activities.
            </p>
            <h3>Course competencies</h3>
            <p>
              Upon completion of this course, learners will be able to:
              <li>Instruct Kibo with QR codes</li>
              <li>Use hand tools</li>
              <li>Choose appropriate materials</li>
              <li>Demonstrate self-expression in problem solving</li>
              <li>Compose music for the artbot</li>
              <li>Demonstrate culture in presentation and story telling</li>
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

export default CreativityWithKibo;
