import React, { useEffect, useRef, useState } from "react";
import "./Home.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";
// import goethe from '../../images/goethe.png';
// import dundee from '../../images/dundee.jpg';
import "react-slideshow-image/dist/styles.css";
// import { Fade } from "react-slideshow-image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Axios from "axios";
import { GiMaterialsScience } from "react-icons/gi";
import { AiOutlineRobot } from "react-icons/ai";
import { VscCircuitBoard } from "react-icons/vsc";
import { BsCode } from "react-icons/bs";
import { RiMicroscopeLine, RiArrowDropDownLine } from "react-icons/ri";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import "react-animated-slider/build/horizontal.css";
import "./SliderStyling/slider-animations.css";
import sliderArrow from "../../icons/Home-Sider-right.png";
import imageSlide from "./data";
import textSlide from "./data2";

import legoImage1 from "../../images/Home_images/LegoGallery/lego1.jpg";
import legoImage2 from "../../images/Home_images/LegoGallery/lego2.jpg";
import legoImage3 from "../../images/Home_images/LegoGallery/lego3.jpg";

import WhySteam1 from "../../images/Home_images/why-steam-images/why-steam (1).png";
import WhySteam2 from "../../images/Home_images/why-steam-images/why-steam (2).png";
import WhySteam3 from "../../images/Home_images/why-steam-images/why-steam (3).png";
import WhySteam4 from "../../images/Home_images/why-steam-images/why-steam (4).png";
import WhySteam5 from "../../images/Home_images/why-steam-images/why-steam (5).png";
import WhySteam6 from "../../images/Home_images/why-steam-images/why-steam (6).png";
import WhySteam7 from "../../images/Home_images/why-steam-images/why-steam (7).png";
import WhySteam8 from "../../images/Home_images/why-steam-images/why-steam (8).png";
import Science from "../../images/Home_images/Home-modules-images/Science.svg";
import Software from "../../images/Home_images/Home-modules-images/Software.svg";
import Mechatronics from "../../images/Home_images/Home-modules-images/Mechatronics.svg";
import Electronics from "../../images/Home_images/Home-modules-images/Electronics.svg";
import Robotics from "../../images/Home_images/Home-modules-images/Robotics.svg";
import services1 from "../../images/Home_images/Home-services/icon_Mobile App Dev.svg";
import services2 from "../../images/Home_images/Home-services/icon_Web Dev.svg";
import services3 from "../../images/Home_images/Home-services/icon_Data Center Solutions.svg";
import services4 from "../../images/Home_images/Home-services/icon_3D Printing.svg";

import dundee from "../../images/Home_images/partners/logo_Dundee.png";
import exxon from "../../images/Home_images/partners/logo_Exxon.png";
import goethe from "../../images/Home_images/partners/logo_Goethe.png";
import konrad from "../../images/Home_images/partners/logo_Kronrad.png";
import namSience from "../../images/Home_images/partners/logo_Nam Science.png";
import NCRST from "../../images/Home_images/partners/logo_NCRST.png";
import UNESCO from "../../images/Logo_UNESCO.svg";

import Carousel from "react-elastic-carousel";
import Item from "./Item";

const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
  <img id="slider-arrow-left" src={sliderArrow} alt="prevArrow" {...props} />
);

const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
  <img id="slider-arrow-right" src={sliderArrow} alt="nextArrow" {...props} />
);

//home page top slider config

// config information for the services
const ServicesInfo = [
  {
    image: services1,
    service_name: "MOBILE APP DEVELOPMENT",
    description:
      "We develop mobile applications for both IOS and Android platforms.",
  },
  {
    image: services3,
    service_name: "WEBSITE DEVELOPMENT",
    description:
      "We develop high-performing, user-friendly, fully functional interactive websites.",
  },
  {
    image: services2,
    service_name: "DATA CENTRE SOLUTIONS",
    description:
      "We help data centers become more safe, resilient and efficient.",
  },

  {
    image: services4,
    service_name: "3D PRINTING",
    description:
      // 'We analyse business, financial, IT systems and conduct assessments of new information systems to identify risks and improve IT-enabled business processes. ',
      "We analyse business, financial, IT systems and conduct assessments of new information systems.",
  },
];
// config information for the services
const ParentsFeedback = [
  {
    parent: "Executive Director, MHETI Dr. Alfred van Kent",
    message:
      "The Ministry of Higher Education, Training and Innovation(MHETI) hereby declares its full support for Mindsinaction",
  },
  {
    parent: "Dr Natascha Cheikhyoussef",
    message:
      "My son Malik Cheikhyoussef is attending the classes and participating with the greatest enthusiasm. The learners learn many skills related to STEM.",
  },
  {
    parent: "Dr. Tanja Karp",
    message:
      "Mindsinaction staff and instructors needs to be congratulated for their professionalism and excellence in guiding the teams throughout the Virtual GEAR competition.",
  },
];

// course card information

const partners = [
  {
    link: "https://www.dundeeprecious.com/English/Operating-Regions/Current-Operations/Tsumeb/Overview/default.aspx",
    image: dundee,
  },
  {
    link: "https://corporate.exxonmobil.com/",
    image: exxon,
  },
  {
    link: "https://www.goethe.de/ins/na/en/ver.cfm?event_id=24619907",
    image: goethe,
  },
  {
    link: "https://www.kas.de/en/",
    image: konrad,
  },

  // {
  //   link: "/",
  //   image: NAMIBIA_coa,
  // },
  {
    link: "https://ncrst.na/",
    image: NCRST,
  },
  {
    link: "https://www.namscience.com/",
    image: namSience,
  },
  {
    link: "https://www.unesco.org/en",
    image: UNESCO,
  },
];

// images for the legoslider
const legoimages = [
  // {
  //   image: lego1,
  // },
  // {
  //   image: lego2,
  // },
  // {
  //   image: lego4,
  // },
  {
    image: legoImage1,
  },
  {
    image: legoImage2,
  },
  {
    image: legoImage3,
  },
];
// information for why-steam cards
const WhySteam = [
  {
    id: 1,
    image: WhySteam1,
    title: "Adaptive Curriculum",
  },
  {
    id: 2,
    image: WhySteam2,
    title: "Team Work",
  },
  {
    id: 3,
    image: WhySteam3,
    title: "Hands on Learning",
  },
  {
    id: 4,
    image: WhySteam4,
    title: "Cutting-Edge Resources",
  },
  {
    id: 5,
    image: WhySteam5,
    title: "Prototyping",
  },
  {
    id: 6,
    image: WhySteam6,
    title: "Research",
  },
  {
    id: 7,
    image: WhySteam7,
    title: "Expert Educators",
  },
  {
    id: 8,
    image: WhySteam8,
    title: "Real-World Relevance",
  },
];
//parents feedback slide configuration

const cards = [
  {
    icon: AiOutlineRobot,
    title: "Robotics",
    description:
      "Students are introduced to the basics of robotics, programming, engineering, problem identification and collaboration.",
    image: Robotics,
    color: "33A85B",
  },
  {
    icon: VscCircuitBoard,
    title: "Electronics",
    description:
      "Students learn how to solder, program electronics parts and circuits, and prototype using microcontrollers.",
    image: Electronics,
    color: "F37021",
  },
  {
    icon: RiMicroscopeLine,
    title: "Mechatronics",
    description:
      "Students will learn a design process that includes a combination of mechanical, electrical and computer engineering.",
    image: Mechatronics,
    color: "FFCD05",
  },
  {
    icon: GiMaterialsScience,
    title: "Science",
    description:
      "Students perform experiments in biology, chemistry and physical science based on the school curriculum.",
    image: Science,
    color: "F05023",
  },
  {
    icon: BsCode,
    title: "Software",
    description:
      "Students are introduced to graphics design through UX/UI, mobile app development and web design.",
    image: Software,
    color: "7965AC",
  },
];

export default function Home() {
  const [products, setProducts] = useState([]);
  const [isRotated, setIsRotated] = useState(true);
  //fetching products from the database
  const getProducts = () => {
    Axios.get("https://mindsinaction.com.na/api/getProduct.php")
      .then((response) => {
        console.log(response);
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleTriggerClick = () => {
    setIsRotated(!isRotated);
  };

  const [showInfo, setShowInfo] = useState(false);

  const handleClick = () => {
    setShowInfo(!showInfo);
  };

  //fetching images from the database
  const getImages = () => {
    Axios.get("https://mindsinaction.com.na/api/gallery.php")
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //Getting product's data from backend
  useEffect(() => {
    getProducts();
    getImages();
    // fetchHomeImages();
  }, []);

  //animation initialization
  useEffect(() => {
    Aos.init({
      duration: 3000,
    });
  }, []);

  const [currentState, setCurrentState] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentState === imageSlide.length - 1) {
        setCurrentState(0);
      } else {
        setCurrentState(currentState + 1);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentState]);

  const goToNext = () => {
    if (currentState === imageSlide.length - 1) {
      setCurrentState(0);
    } else {
      setCurrentState(currentState + 1);
    }
  };

  const goToPrev = () => {
    if (currentState === 0) {
      setCurrentState(imageSlide.length - 1);
    } else {
      setCurrentState(currentState - 1);
    }
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentState === textSlide.length - 1) {
        setCurrentState(0);
      } else {
        setCurrentState(currentState + 1);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentState]);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  const [isDivVisible, setDivVisible] = useState(true);

  const handleWindowResize = () => {
    const screenWidth = window.innerWidth;
    // Change the threshold width according to your requirement
    const thresholdWidth = 1400;
    setDivVisible(screenWidth >= thresholdWidth);
  };

  useEffect(() => {
    handleWindowResize(); // Set initial visibility based on screen width
    window.addEventListener("resize", handleWindowResize);

    return () => {
      // Remove the event listener when the component unmounts
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const overlay = useRef(0);

  const showOverlay = (event) => {
    event.preventDefault();
    if (overlay.current) {
      const element = overlay.current;
      // const className = initialClass.trim();

      // Check if the class exists on the element
      if (element.classList.contains("dontShow")) {
        // If the class exists, remove it
        element.classList.remove("dontShow");
        element.classList.add("Modules-item__overlay-mobile");
      } else {
        // If the class doesn't exist, add it
        element.classList.remove("Modules-item__overlay-mobile");
        element.classList.add("dontShow");
      }
    }
  };

  return (
    <div className="home-main-container" style={{ padding: "0px 0px 0px 0px" }}>
      <div
        style={{
          height: "100vh",
          backgroundColor: "white",
          textAlign: "center",
        }}
      >
        <div className="container-style">
          {/* zimage slides */}
          {imageSlide.map((slide, index) => (
            <div
              key={index}
              className={`image-slide ${
                index === currentState ? "active" : ""
              }`}
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundPosition: "top",
                backgroundSize: "cover",
                height: "100%",
              }}
            >
              <div className="transparent-background"></div>
              <div className="description">
                <div className="text">
                  <h1>{slide.title}</h1>
                  <div className="center-hr">
                    <hr />
                  </div>
                  <p style={{ color: "white" }}>{slide.description}</p>
                  <NavLink exact to="/modules">
                    <div className="center-hr" style={{ borderRadius: "20px" }}>
                      <button className="hero-button">{slide.button}</button>
                    </div>
                  </NavLink>
                </div>
              </div>
              {/* Navigation arrows */}
              <SlickArrowLeft onClick={goToPrev} />
              <SlickArrowRight onClick={goToNext} />
            </div>
          ))}
          {/* Slider buttons */}
          <div className="carousel-bullets">
            {imageSlide.map((slide, index) => (
              <span
                key={index}
                className={index === currentState ? "active" : ""}
                onClick={() => setCurrentState(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>

      <div className="Background-div-top">
        <div className="Modules-home">
          <h1>Modules</h1>

          {isDivVisible && (
            <div className="Modules-home-cards">
              {cards.map((x, i) => {
                return (
                  <div
                    key={i}
                    className="Modules-item"
                    style={{
                      backgroundColor: `#${x.color}`,
                      marginBottom: "90px",
                    }}
                  >
                    <NavLink exact to="/modules" aria-labelledby={x.title}>
                      {" "}
                    </NavLink>
                    <img src={x.image} alt={x.title} />
                    {/* <x.icon className="modules-icon" size='9rem' color="white" /> */}
                    <div
                      className="Modules-item__overlay"
                      style={{
                        backgroundColor: `#${x.color}`,
                      }}
                    >
                      <h3
                        id={x.title}
                        style={{
                          backgroundColor: `#${x.color}`,
                        }}
                        aria-hidden="true"
                      >
                        {x.title}
                      </h3>
                      <div className="Modules-item__body">
                        <p>{x.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* <Slider {...courseConfig}> */}
          {!isDivVisible && (
            <div
              className="Modules-home-cards"
              style={{ marginBottom: "90px" }}
            >
              <Carousel
                breakPoints={breakPoints}
                enableAutoPlay={true}
                autoPlaySpeed={6000}
                style={{ margin: "0px 50px" }}
              >
                {cards.map((x, i) => {
                  return (
                    <Item>
                      <div
                        key={i}
                        className="Modules-item-mobile"
                        onClick={showOverlay}
                        style={{
                          backgroundColor: `#${x.color}`,
                          cursor: "pointer",
                        }}
                      >
                        {/* <NavLink exact to="/modules" aria-labelledby={x.title}>
                          {" "}
                        </NavLink> */}
                        <img src={x.image} alt={x.title} />
                        {/* <x.icon className="modules-icon" size='9rem' color="white" /> */}
                        <p
                          style={{
                            color: "white",
                            position: "absolute",
                            bottom: "0",
                            top: "85%",
                            left: "50%",
                            transform: "translate(-50%)",
                            fontSize: "20px",
                          }}
                        >
                          {x.title}
                        </p>
                        <div
                          ref={overlay}
                          className="dontShow"
                          style={{
                            backgroundColor: `#${x.color}`,
                          }}
                        >
                          <h3
                            id={x.title}
                            style={{
                              backgroundColor: `#${x.color}`,
                              fontSize: "20px",
                            }}
                            aria-hidden="true"
                          ></h3>
                        </div>
                        <div
                          ref={overlay}
                          className="dontShow"
                          style={{
                            backgroundColor: `#${x.color}`,
                          }}
                        >
                          <h3
                            id={x.title}
                            style={{
                              backgroundColor: `#${x.color}`,
                              fontSize: "20px",
                            }}
                            aria-hidden="true"
                          >
                            {x.title}
                          </h3>
                          <div className="Modules-item__body-mobile">
                            <p>{x.description}</p>
                            <NavLink
                              exact
                              to="/modules"
                              className="button-link"
                            >
                              <button>Find out more</button>
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    </Item>
                  );
                })}
              </Carousel>
            </div>
          )}
          {/* </Slider> */}
        </div>

        <div
          className="display-home1"
          style={{ paddingLeft: "50px", paddingRight: "50px" }}
        >
          <div className="What-is-STEAM-Education-home">
            <div class="box-for-image-moving-UpandDown"></div>

            <div className="What-is-STEAM-Education-home-text">
              <h1>
                What is
                <font color="#f1603b"> S</font>
                <font color="#48aee3">T</font>
                <font color="#ffc60a">E</font>
                <font color="#f37021">A</font>
                <font color="#63be45">M </font>
                Education?
              </h1>
              <p>
                STEAM Education is a dynamic blend of Science, Technology,
                Engineering, Arts, and Mathematics, designed to inspire and
                cultivate the leaders of tomorrow. It offers a comprehensive and
                interdisciplinary approach that fosters risk-taking,
                experiential learning, and collaboration among students. By
                integrating these diverse disciplines, it cultivates innovators
                and leaders who can thrive in the 21st-century landscape,
                equipping them with essential skills for addressing real-world
                challenges effectively. Through hands-on learning, critical
                thinking, and teamwork, STEAM education prepares well-rounded
                individuals capable of driving innovation and making a positive
                impact on society in various professional settings.
              </p>
            </div>

            <div
              id="rotating-setting-icon"
              className={isRotated ? "rotate" : ""}
            ></div>
            <button id="trigger" onClick={handleTriggerClick}>
              Trigger
            </button>
          </div>
        </div>

        {/* small screen */}
        <div className="What-is-STEAM-Education-home-mobile display-home2">
          <center>
            <div class="box-for-image-moving-UpandDown-mobile"></div>
          </center>

          <div className="What-is-STEAM-Education-home-text-mobile">
            <h1 style={{ color: "white", textAlign: "center" }}>
              What is
              <font color="#f1603b"> S</font>
              <font color="#48aee3">T</font>
              <font color="#ffc60a">E</font>
              <font color="#f37021">A</font>
              <font color="#63be45">M </font>
              Education?
            </h1>
            <p>
              STEAM Education is a dynamic blend of Science, Technology,
              Engineering, Arts, and Mathematics, designed to inspire and
              cultivate the leaders of tomorrow. It offers a comprehensive and
              interdisciplinary approach that fosters risk-taking, experiential
              learning, and collaboration among students. By integrating these
              diverse disciplines, it cultivates innovators and leaders who can
              thrive in the 21st-century landscape, equipping them with
              essential skills for addressing real-world challenges effectively.
              Through hands-on learning, critical thinking, and teamwork, STEAM
              education prepares well-rounded individuals capable of driving
              innovation and making a positive impact on society in various
              professional settings.
            </p>
          </div>

          <div
            id="rotating-setting-icon-mobile"
            className={isRotated ? "rotate" : ""}
          ></div>
          <button id="trigger-mobile" onClick={handleTriggerClick}>
            Trigger
          </button>
        </div>
        <div className="button-container">
          <button
            className={`info-button ${showInfo ? "active" : ""}`}
            onClick={handleClick}
          >
            Benefits of STEAM
            <RiArrowDropDownLine
              className={`icon ${showInfo ? "rotate-icon" : ""}`}
            />
          </button>
          {showInfo && (
            <div className="info-content">
              {/* Place your extended information here */}
              <p>
                STEAM education offers a comprehensive and dynamic approach to
                learning that equips students with the skills and mindset needed
                to thrive in an increasingly technology-driven and
                interconnected world. It empowers learners to become critical
                thinkers, problem solvers, and creative innovators, shaping them
                into well-rounded individuals prepared for the challenges and
                opportunities of the future.
              </p>
              <p>
                The benefits of STEAM education are numerous and have a
                significant impact on society as a whole. Some of the key
                advantages include:
              </p>
              <p>
                <ul>
                  <li>
                    STEAM education equips students with technical skills in
                    science, technology, engineering, and mathematics. This
                    knowledge is in high demand in various industries, including
                    technology, healthcare, engineering, and many others.
                  </li>
                  <li>
                    Early exposure to STEAM educational activities encourages
                    students to think critically, solve problems, and apply
                    analytical skills to real-world situations. The
                    interdisciplinary nature of STEAM fosters a deeper
                    understanding of complex concepts, preparing students to
                    tackle challenges effectively.
                  </li>
                  <li>
                    By incorporating the arts into traditional STEM subjects,
                    STEAM promotes creativity and imagination. This approach
                    encourages students to think outside the box and come up
                    with innovative solutions to problems.
                  </li>
                  <li>
                    Bridging the gender gap: Traditional STEM fields have often
                    been male-dominated. However, the integration of arts in
                    STEAM has shown to attract more female students, bridging
                    the gender gap and promoting inclusivity in these
                    disciplines.
                  </li>
                  <li>
                    STEAM education emphasizes real-world applications of
                    knowledge, making learning more engaging and meaningful for
                    students. This approach helps students see the relevance of
                    what they are learning to their lives and future careers.
                  </li>
                  <li>
                    In a rapidly changing world, adaptability is a crucial
                    skill. STEAM education encourages students to embrace
                    change, learn continuously, and adapt to new technologies
                    and challenges.
                  </li>
                  <li>
                    STEAM projects often involve hands-on activities and
                    open-ended challenges, providing students with opportunities
                    to develop their problem-solving abilities and resilience.
                  </li>
                  <li>
                    STEAM projects often require teamwork and cooperation,
                    helping students develop strong communication and
                    collaboration skills. These skills are crucial in the
                    professional world, where successful projects often rely on
                    effective teamwork.
                  </li>
                  <li>
                    Preparing for future careers: Many of the fastest-growing
                    job sectors require skills and knowledge in science,
                    technology, engineering, arts, and mathematics. STEAM
                    education prepares students for these emerging career
                    opportunities.
                  </li>
                  <li>
                    Encouraging lifelong learning: By nurturing a passion for
                    learning and exploration, STEAM education instills a love
                    for knowledge that extends beyond the classroom and into
                    adulthood. Students are more likely to pursue further
                    education and seek continuous self-improvement.
                  </li>
                </ul>
              </p>
            </div>
          )}
        </div>
        <div className="Why-steam">
          <h1>Why Mindsinaction STEAM Center?</h1>
          <div className="Why-steam-cards-outer">
            {isDivVisible && (
              <div className="Why-steam-cards">
                {WhySteam.map((x, i) => {
                  return (
                    <div key={i} className="Why-steam-card">
                      <div
                        className="Why-steam-card-image"
                        style={{
                          background: `url('${x.image}') no-repeat center center`,
                        }}
                      ></div>
                      <div className="Why-steam-card-text">
                        <h3 id={x.id}>{x.title}</h3>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {!isDivVisible && (
              <div className="Why-steam-cards">
                <Carousel
                  breakPoints={breakPoints}
                  enableAutoPlay={true}
                  autoPlaySpeed={6000}
                >
                  {WhySteam.map((x, i) => {
                    return (
                      <Item>
                        <div key={i} className="Why-steam-card">
                          <div
                            className="Why-steam-card-image"
                            style={{
                              background: `url('${x.image}') no-repeat center center`,
                            }}
                          ></div>
                          <div className="Why-steam-card-text">
                            <h3 id={x.id} style={{ fontSize: "20px" }}>
                              {x.title}
                            </h3>
                          </div>
                        </div>
                      </Item>
                    );
                  })}
                </Carousel>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="Background-div-Middle">
        <div className="LegoGallery" style={{ paddingBottom: "50px" }}>
          <h3 className="LegoGallery-text">
            With the hands-on approach to STEAM, we cultivate a generation of
            innovators by providing the 4th industrial revolution skills to
            unleash the true potential of young minds.
          </h3>
          <div className="LegoGallery-images-box">
            <Carousel
              breakPoints={breakPoints}
              enableAutoPlay={true}
              autoPlaySpeed={6000}
            >
              {legoimages.map((x, y) => {
                return (
                  <Item>
                    <div key={y} className="LegoGallery-images-box-slider">
                      <div className="image-for-lego">
                        <img src={x.image} alt="lego" srcset="" />
                      </div>
                    </div>
                  </Item>
                );
              })}
            </Carousel>
          </div>
        </div>
        <div className="social-media-feed" style={{ marginTop: "60px" }}>
          <h1>TESTIMONIALS</h1>
          <div className="center-hrz" style={{ marginTop: "60px" }}>
            {/* Products section */}
            <div className="sliderx-container">
              {ParentsFeedback.map((x, i) => {
                return (
                  <div key={i} className="chat-boxes">
                    <div className="box sb">
                      <div>{x.message}</div>
                      {/* <hr className="new1" /> */}
                      <div className="boxes"> -{x.parent}-</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="parralex-div">
        <div className="container-style">
          {/* zimage slides */}
          {textSlide.map((slide, index) => (
            <div
              key={index}
              className={`image-slide ${
                index === currentState ? "active" : ""
              }`}
            >
              <div className="description">
                <div className="text">
                  <h2>
                    <FaQuoteLeft />
                    <span> {slide.description} </span> <FaQuoteRight />
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="Background-div-bottom">
        <div className="services-home-div" data-aos="fade-up">
          <div className="home-title-electronic">
            <h1>Other Services</h1>
          </div>
          <div className="center-hrz">
            {isDivVisible && (
              <div className="home-services-cards">
                {ServicesInfo.map((x, i) => {
                  return (
                    <div key={i} className="home-services-card">
                      {/* <NavLink to={x.productLink}> */}
                      <NavLink exact to="/services">
                        <div
                          className="home-services-card-image-top"
                          style={{
                            background: `url('${x.image}') no-repeat center center`,
                          }}
                        >
                          {/* <img
                        src={x.image} alt="lego"
                      /> */}
                        </div>
                        <div className="home-services-card-text-bottom">
                          <h3>{x.service_name}</h3>
                          <p>{x.description}</p>
                        </div>
                      </NavLink>
                    </div>
                  );
                })}
              </div>
            )}

            {!isDivVisible && (
              <div className="home-services-cards">
                <Carousel
                  breakPoints={breakPoints}
                  enableAutoPlay={true}
                  autoPlaySpeed={6000}
                  style={{ color: "black" }}
                >
                  {ServicesInfo.map((x, i) => {
                    return (
                      <Item>
                        <div key={i} className="home-services-card">
                          {/* <NavLink to={x.productLink}> */}
                          <NavLink exact to="/services">
                            <div
                              className="home-services-card-image-top"
                              style={{
                                background: `url('${x.image}') no-repeat center center`,
                              }}
                            >
                              {/* <img
                        src={x.image} alt="lego"
                      /> */}
                            </div>
                            <div className="home-services-card-text-bottom">
                              <h3>{x.service_name}</h3>
                              <p>{x.description}</p>
                            </div>
                          </NavLink>
                        </div>
                      </Item>
                    );
                  })}
                </Carousel>
              </div>
            )}
          </div>
        </div>

        <div className="electronic-home" data-aos="fade-up">
          <div style={{ marginTop: "" }} className="home-title-electronic">
            <h1>Electronic Shop</h1>
          </div>
          {/*  */}
          <div className="products" style={{ marginTop: "60px" }}>
            {/**Products section */}
            <Carousel
              breakPoints={breakPoints}
              enableAutoPlay={true}
              autoPlaySpeed={6000}
            >
              {products.map((x, i) => {
                return (
                  <Item>
                    <div key={i} className="product-image-card">
                      {/* <NavLink to={x.productLink}> */}
                      <NavLink exact to="/Shop">
                        <img
                          src={
                            "https://mindsinaction.com.na/api/product/" +
                            x.image_url
                          }
                          alt=""
                        />
                      </NavLink>
                      <div className="products-content-home">
                        <h4>{x.product_name}</h4>
                        <p>
                          {" "}
                          <span>N$</span> {x.product_price}
                        </p>
                      </div>
                      <NavLink exact to="/Shop">
                        <div className="btn-buy-outer">
                          <button className="shop-button-home-inner">
                            View
                          </button>
                        </div>
                      </NavLink>
                    </div>
                  </Item>
                );
              })}
            </Carousel>

            {/*  */}
          </div>
        </div>
      </div>

      <div className="partners-home" style={{ marginTop: "" }}>
        <div
          style={{ marginTop: "" }}
          className="home-title-partners"
          data-aos="fade-up"
        >
          <h1>Our Partners</h1>
        </div>
        <div className="our-partners" data-aos="fade-up">
          <div className="course" style={{ marginTop: "60px" }}>
            {/**Courses section */}
            <Carousel
              breakPoints={breakPoints}
              enableAutoPlay={true}
              autoPlaySpeed={6000}
            >
              {partners.map((partner, index) => (
                <Item>
                  <div key={index} className="partners-swiper-slide-home">
                    <div className="image">
                      <a
                        href={partner.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={partner.image} alt="partner" />
                      </a>
                    </div>
                  </div>
                </Item>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}
