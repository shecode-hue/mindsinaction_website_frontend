import React, { useEffect } from "react";
import exploringMainImage from "../../../../images/course-images/exploring.jpeg";
import electronicsImage from "../../../../images/course-images/electronics.jpeg";
import industrialImage from "../../../../images/course-images/industrial.jpeg";
import mobileImages from "../../../../images/course-images/mobile.jpg";
import backgroundImage from "../../../../images/about-images/image1.jpg";
import { NavLink } from "react-router-dom";
import "./MobileAppDevelopment.css";
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

export default function MobileAppDevelopment() {
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
      <div className="mob-title" data-aos="fade-up">
        <h1>Mobile App Development</h1>
        <img src={mobileImages} alt="" />
      </div>
      <div className="mobile-module-info" data-aos="fade-up">
        <div className="module-4">
          <h3>Module 4 – Mobile App Development </h3>
        </div>
        <div className="module-4-content">
          <div className="module-4-description">
            <div className="mobile-module-4">
              <div className="mobile-icon">
                <HiOutlineUserGroup />
              </div>
              <p>
                <strong>Target Groups</strong>: Grade 8-12, university students
                and industry Professional
              </p>
            </div>

            <div className="mobile-module-4">
              <div className="mobile-icon">
                <FaRegCalendarTimes />
              </div>
              {/* <p>
                <strong>Period</strong>: Trimester – (max. 8 workshops, once per
                week)
              </p> */}
            </div>
            <div className="mobile-module-4">
              <div className="mobile-icon">
                <BiTimeFive />
              </div>
              <p>
                <strong>Time</strong>: 18H00 – 20H00
              </p>
            </div>
            <div className="mobile-module-4">
              <div className="mobile-icon">
                <BsFillStarFill color="#ffc500" />{" "}
                <BsFillStarFill color="#ffc500" /> <BsStar color="#ffc500" />
              </div>
              <p>
                <strong>Course Fee</strong>: N$ 2 500.00
              </p>
            </div>
            <div className="mobile-module-4">
              <div className="mobile-icon">
                <FaToolbox />
              </div>
              <p>
                <strong>Equipment</strong>: Internet and a Laptop
              </p>
            </div>
          </div>
          <div className="module-4-info">
            <h3>Course description</h3>
            <br />

            <div className="module-4">
              <h3>Level 1 : </h3>
            </div>
            <br />
            <div className="module-4">
              <h3>Module 1: Introduction and Setup </h3>
            </div>

            <p>
              <li> Download and install Android Studio on Windows</li>
              <li>Hello World Project</li>
            </p>
            <br />

            <div className="module-4">
              <h3>Module 2: Basic Views and Layouts </h3>
            </div>
            <p>
              <li> Buttons</li>
              <li>TextView</li>
              <li> EditText or Plain Text</li>
              <li>TextView</li>
              <li> ImageView</li>
              <li>Linear Layout</li>
              <li> Constraint Layout</li>
              <li>CardView</li>
              <li> DatePicker</li>
              <li>Spinner</li>
            </p>

            <br />

            <div className="module-4">
              <h3>Module 3: OnClickListners </h3>
            </div>
            <p>
              <li> Toasts</li>
              <li>Context</li>
            </p>

            <br />

            <div className="module-4">
              <h3>Module 4: Mini Projects </h3>
            </div>
            <p></p>
            <br />
            <br />
            <div className="module-4">
              <h3>Level 2 : </h3>
            </div>
            <br />
            <div className="module-4">
              <h3>Module 1: Kotlin/JAVA Basics </h3>
            </div>

            <p>
              <li> Hello World</li>
              <li>Data Types</li>
              <li> Arrays</li>
              <li>Conditional statements</li>
              <li> Loops</li>
              <li>Classes and Objects</li>
              <li>Static Keyword</li>
            </p>
            <br />

            <div className="module-4">
              <h3>Module 2: Media </h3>
            </div>
            <p>
              <li> Media Player</li>
              <li>Video View</li>
            </p>

            <br />

            <div className="module-4">
              <h3>Module 3: Activities and their Lifecycles </h3>
            </div>
            <p>
              <li> Activity Life Cycle</li>
              <li>Intents</li>
              <li>Passing Data from one Activity to another</li>
            </p>

            <br />

            <div className="module-4">
              <h3>Module 4: Mini Projects </h3>
            </div>
            <p>
              <li> RecyclerView</li>
              <li>Room persistence library instead of SQLite database</li>
            </p>


            <p></p>
            <br />
            <br />
            <div className="module-4">
              <h3>Level 3 : </h3>
            </div>
            <br />
            <div className="module-4">
              <h3>Module 1: Firebase </h3>
            </div>

            <p>
              <li> How to Create Firebase Project</li>
              <li>Manually add Firebase to Android Studio Project</li>
              <li> Firebase Realtime Database Intro. & Why we Use It.</li>
              <li>Firebase Database Structure & How to Structure Databases</li>
              <li> How to Insert Data in Firebase Realtime Database</li>
              <li>How to Read Data from Firebase Realtime Database</li>
              <li>How to Create a Child Node in Firebase Database</li>
              <li> Working with Success & Failure Listener with Firebase</li>
              <li>How to insert Data using Push Ids in Firebase</li>
              <li> How to Insert Data in Firebase Realtime Database</li>
              <li>How to Update Data in Firebase Database</li>
              <li>How to Delete Data in Firebase Database</li>
            </p>
            <br />

            <div className="module-4">
              <h3>Module 2: Google Maps </h3>
            </div>
            <p>
              <li> Setup Android Project & Permissions for Showing Google Maps</li>
              <li>Get Google Maps API Key & Add to Android Project</li>

              <li> Show Google Maps Using MapView and Fragments in Android App</li>
              <li>Set Google Maps Initial State using XML or Java Code</li>

              <li> Show Different Types of Google Maps</li>
              <li>Update Google Map Camera</li>

              <li> How to Restrict Google Maps to Specific Areas</li>
              <li>Geocoding and Addressing its Coordinates</li>

              <li> How to Check Android Device GPS is Enabled</li>
              <li>Get the Device’s Current Location with MyLocationButton or through Code</li>
            </p>

            <br />

            <div className="module-4">
              <h3>Module 3: Major Projects </h3>
            </div>
           
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
