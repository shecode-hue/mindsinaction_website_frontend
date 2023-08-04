import React, { useEffect } from "react";
import exploringMainImage from "../../../../images/course-images/exploring.jpeg";
import electronicsImage from "../../../../images/course-images/electronics.jpeg";
import industrialImage from "../../../../images/course-images/industrial.jpeg";
import mobileImages from "../../../../images/course-images/mobile.jpg";
import backgroundImage from "../../../../images/about-images/image1.jpg";
import { NavLink } from "react-router-dom";
import "./ExplosingMechatronics.css";
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

export default function ExplosingMechatronics() {
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
      <div className="exp-title" data-aos="fade-up">
        <h1>Exploring Mechatronics</h1>
        <img src={exploringMainImage} alt="" />
      </div>
      <div className="exploring-module-info" data-aos="fade-up">
        <div className="module-3">
          <h3>Module 3 – Industrial Automation with PLC </h3>
        </div>
        <div className="module-3-content">
          <div className="module-3-description">
            <div className="exploring-module-3">
              <div className="exploring-icon">
                <HiOutlineUserGroup />
              </div>
              <p>
                <strong>Target Groups</strong>: Grade 8 – 12
              </p>
            </div>

            <div className="exploring-module-3">
              <div className="exploring-icon">
                <FaRegCalendarTimes />
              </div>
              <p>
                <strong>Period</strong>: Trimester – (max. 8 workshops, once per
                week)
              </p>
            </div>
            <div className="exploring-module-3">
              <div className="exploring-icon">
                <BiTimeFive />
              </div>
              <p>
                <strong>Time</strong>: 14H00 – 16H30
              </p>
            </div>
            <div className="exploring-module-3">
              <div className="exploring-icon">
                <BsFillStarFill color="#ffc500" />{" "}
                <BsFillStarFill color="#ffc500" /> <BsStar color="#ffc500" />
              </div>
              <p>
                <strong>Course Fee</strong>: N$ 2 500.00
              </p>
            </div>
            <div className="exploring-module-1">
              <div className="exploring-icon">
                <FaToolbox />
              </div>
              <p>
                <strong>Equipment</strong>: MecLab Stations (Station Stack
                Magazine, Station Conveyor, Station Handling) and Laptops
              </p>
            </div>
          </div>
          <div className="module-3-info">
            <h3>Course description</h3>
            <p>
              Mechatronics is a design process that includes a combination of
              mechanical engineering, electrical engineering, telecommunications
              engineering, control engineering, and computer engineering.
              Mechatronics is a multidisciplinary field of engineering, that is
              to say, it rejects splitting engineering into separate
              disciplines.
            </p>

            <p>
              A mechatronics engineer unites the principles of mechanics,
              electronics, and computing to generate a simpler, more economical,
              and reliable system. An industrial robot is a prime example of a
              mechatronics system; it includes aspects of electronics,
              mechanics, and computing to do its day-to-day jobs. Through
              collaboration, the mechatronic modules perform the production
              goals and inherit flexible and agile manufacturing properties in
              the production scheme. Modern production equipment consists of
              mechatronic modules that are integrated according to a control
              architecture. Hybrid systems important to mechatronics include
              production systems, synergy drives, planetary exploration rovers,
              automotive subsystems such as anti-lock braking systems and
              spin-assist, and everyday equipment such as autofocus cameras,
              video, hard disks, and CD players.
            </p>

            <p>
              Learners, taking on the role of mechatronics engineers, are
              challenged to design an automated system that adheres to given
              specifications and constraints, and explore the interaction
              between mechanics, electrical engineering, electronics, and
              computer engineering.
            </p>
            <p>
              <li> Identify the function of a pneumatic system</li>
              <li>
              Explain the purpose of a Stacking Magazine station
              </li>
              <li>
              Explain the functionality of sensors, cylinders, and valves
              </li>
              <li>
              Identify the elements of an electro-pneumatic control system
              </li>
              <li>
              Navigate FluidSIM
              </li>
              <li>
              Create and simulate pneumatic and electrical circuits in FluidSIM
              </li>
              <li>
              Develop and run control programs in FluidSIM
              </li>
              <li>
              Explain the purpose of a Conveyor station

              </li>
              <li>
              Identify the components of a Conveyor station

              </li>
              <li>Explain the functionality of inductive and optical proximity sensors</li>
              <li>
              Discuss the working principle of DC motors
              </li>
              <li>
              Identify the structure of a PLC (programmable logic controller)
              </li>
              <li>
              Identify logic gates
              </li>
              <li>
              Analyse logic circuits
              </li>
              <li>
              Develop and run sequence programs
              </li>
              <li>
              Explain the purpose of the Handling station
              </li>

              <li>
              Identify the components of the Handling station
              </li>
              <li>
              Explain the functionality of a gripper
              </li>

              <li>
              Analyze and create logic circuits and logic programs
              </li>
              <li>
              Apply the engineering design process
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
