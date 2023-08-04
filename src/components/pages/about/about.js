import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import mission from "../../images/about-images/Mission Icon.png";
import vision from "../../images/about-images/Vision Icon-01.png";
import values from "../../images/about-images/Values Icon.png";
import image1 from "../../images/about-images/image1.jpg";
import image2 from "../../images/about-images/image2.jpg";
import image3 from "../../images/about-images/image3.jpg";
import adaptive_image from "../../images/about-images/adaptive-learning.png";
import teamwork_image from "../../images/about-images/team-work.png";
import consumer_image from "../../images/about-images/consumer-to-creator.png";
import cretivity_image from "../../images/about-images/creativity.png";
import prototyping_image from "../../images/about-images/prototyping.png";
import research_image from "../../images/about-images/research.png";
import hands_on_image from "../../images/about-images/hands-on.png";
import fun_image from "../../images/about-images/fun.png";
import kids from "../../images/about-images/kids looking at laptop.jpg";
// import kids from "../../images/about-images/kids-looking-at-laptop compressed.webp";
import rightArrow from "../../icons/Img1.png";
import leftArrow from "../../icons/Img2.png";
import { BsArrowDown } from 'react-icons/all';
import Aos from "aos";
import "aos/dist/aos.css";
import "./about.css";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function About() {
  const [gallery, setGallery] = useState([]);

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    < img className="button-it" src={leftArrow} alt="prevArrow" {...props} />);

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    < img className="button-it" src={rightArrow} alt="nextArrow"  {...props} />);


  //api for fetching images
  //fetching images from the databse
  const getImages = () => {
    axios
      .get("https://mindsinaction.com.na/api/gallery.php")
      .then((response) => {
        console.log(response);
        setGallery(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //Getting product's data from backend
  useEffect(() => {
    getImages();
  }, []);

  useEffect(() => {
    Aos.init({
      duration: 3000,
    });
  }, []);

  //Course slide configuration
  const courseConfig = {
    arrows: true,
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 6000,
  adaptiveHeight: false,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1124,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const config = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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

  const [arrow_1, setArrow_1] = useState(true);
  const [arrow_2, setArrow_2] = useState(true);

  return (
    <div>
      <div
        className="profile-main-container"
      >
        {/* profile secondary container */}
        <div className="profile-secondary-container">
          <div className="display-1">
            <div className="heading-profile-page"
              style={{ width: "95%" }}
            >
              <h2
                data-aos="fade-up"
                className="page-animation"
                data-text="Mindsinaction STEAM Centre"
              >
                Mindsinaction STEAM Centre
              </h2>
            </div>
          </div>

          <div className="center-hrz">
            <div className="display-2" style={{ marginTop: "100px" }}>
              <div className="center-hrz">
                <div className="heading-profile-page" style={{ marginBottom: "20px" }}>
                  <h2
                    data-aos="fade-up"
                    className="page-animation"
                    data-text="Mindsinaction"
                  >
                    Mindsinaction
                  </h2>
                </div>
              </div>

              <div className="center-hrz">
                <div className="heading-profile-page" style={{ marginBottom: "20px" }}>

                  <h2
                    data-aos="fade-up"
                    className="page-animation"
                    data-text="STEAM"
                  >
                    STEAM
                  </h2>

                </div>
              </div>

              <div className="center-hrz">
                <div className="heading-profile-page">
                  <h2
                    data-aos="fade-up"
                    className="page-animation"
                    data-text="Centre"
                  >
                    Centre
                  </h2>
                </div>
              </div>

            </div>
          </div>
          <center>
            <div data-aos="fade-up" className="flex-container-main-about">
              <div className="header-text">
                {/* <h1>Creating the <br></br> innovators of tomorrow</h1> */}
                <h1>Creating the innovators of tomorrow</h1>
                <div>
                  <p data-aos="fade-up">
                    At Mindsinaction we aim to expose Namibian youth to
                    lifelong opportunities in Science, Technology, Engineering, Art
                    and Mathematics - (STEAM Education) - to stimulate creative
                    thought in innovation.
                    <br />
                    <br />
                    Our objective is to produce a generation of innovators with the
                    ability to tackle challenges in their environment using STEAM
                    knowledge and the scientific approach.
                  </p>

                </div>
              </div>
              <div className="image-container">
                <img className="img-size" src={kids} alt="kids looking at a laptop" />
              </div>
            </div>
          </center>
          <div data-aos="fade-up" className="mission-vision-values">
            <div className="mission-vision-values-container">
              <div className="mission-vision-values-card">
                <div
                  className="mission-vision-value-content"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 128, 0, 0.80) 1%,rgba(0, 128, 0, 0.80) 30%),url(${image1})`,
                    width: "100%",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="mission-vision-value-mini-content">
                    <img src={mission} alt="" />
                    <h1>Mission</h1>
                  </div>
                </div>
                <p>Make STEAM Education accessible.</p>
              </div>
              <div className="mission-vision-values-card">
                <div
                  className="mission-vision-value-content"
                  style={{
                    backgroundImage: `linear-gradient(rgba(128, 0, 0, 0.80) 1%,rgba(128, 0, 0, 0.80) 30%),url(${image2})`,
                    width: "100%",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="mission-vision-value-mini-content">
                    <img src={vision} alt="" />
                    <h1>Vision</h1>
                  </div>
                </div>
                <p>A generation of innovators.</p>
              </div>
              <div className="mission-vision-values-card">
                <div
                  className="mission-vision-value-content"
                  style={{
                    backgroundImage: `linear-gradient(rgba(255, 140, 0, 0.80) 1%,rgba(255, 140, 0, 0.80) 30%),url(${image3})`,
                    width: "100%",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="mission-vision-value-mini-content">
                    <img src={values} alt="" />
                    <h1>Values</h1>
                  </div>
                </div>
                <p>
                  Creative thinking, Excellence, Honesty, Integrity.
                  {/* Allencompassing stakeholder involvement and consideration. */}
                </p>
              </div>
            </div>
          </div>
          <div data-aos="fade-up" className="Company-History">
          <h2>Our History</h2>
          <div className="history">
             <p>
                Mindsinaction was established in August 2017 by two Science Fair partners, Ndaudika Mulundileni and Andreas Leonard, to offer hands-on training in Science, Technology, Engineering, Arts & Mathematics (STEAM), Industry 4.0 Skills. It began with a mobile program going around to schools and exposing learners to STEAM Educational activities in Windhoek and Walvis Bay. As of 2019, the company increased its offering to the Tsumeb community. From 2020 Mindsinaction established a STEAM Centre in Windhoek to offer modules in clusters covering robotics, coding, electronics, 3D printing, renewable energy, water technology, and computer -aided-design (CAD) to children age 6+. Each module spans a period of eight (8) weeks, attendance once a week, the learner choose a day in the week i.e Thursdays from 14h00 – 16h30. The modules offer continuity, for example to do module 2, a learner should have completed 8 weeks of module 1, and so on. New registrations open every two months, we charge N$ 1 500.00 per module per 8 workshops. All materials, laptops, software and hardware are provided by Mindsinaction. 
             </p>
             <p>
                The company's growth strategy is to acquire more hands-on learning equipment, in order to increase the modules offerings and retain customers through continuity. The company plans to source funds in order to expand to all 14 regions in the country. The next establishment of a STEAM Centre is planned for Swakopmund, Erongo Region, Namibia.
             </p>
             <p>
                The company sees a great future in African children and our most ambitious goal is to expose African children to Industry 4.0 Skills through STEAM programs by 2030.
             </p>
             
                <div className="History-button" >
                 <NavLink to="/founders">
                  <button >Meet The Founders</button>
                  </NavLink>
                </div>
           
             </div>
          </div>

          <div  data-aos="fade-up" className="Co-founders">
            
          </div>
          {/* took away the fade in feature for the profile steam content */}

          <div className="profile-steam-content" data-aos="fade-up">
            {/* started creating a responsive accordian menu */}
            <div style={{ marginTop: "50px" }} className="about-title-header">
              <h1>STEAM</h1>
            </div>


            <div className="tabs-container">
              <div class="tabs">
                <div className="tab">
                  <input type="radio" name="reset" id="check--1" />
                  <label className="tab-label" for="check--1" onClick={() => {
                    setArrow_1(false);
                    setArrow_2(true);
                  }} >
                    &nbsp; What does STEAM mean
                    {arrow_1 &&
                      <span><BsArrowDown className="arrow-down" /></span>
                    }
                    {!arrow_1 &&
                      <span><BsArrowDown className="arrow-up" /></span>
                    }

                  </label>
                  <div className="tab-content">
                    <p>
                      STEAM stands for Science, Technology, Engineering, Arts
                      and Mathematics.
                      Students uncover the dynamic power and
                      potential of STEAM modules through projects featuring
                      robotics, electronics, exploring mechatronics,
                      engineering, programming and more.
                    </p>
                  </div>
                </div>
                <div className="tab">
                  <input type="radio" name="reset" id="check--2" />
                  <label className="tab-label" for="check--2" onClick={() => {
                    setArrow_1(true);
                    setArrow_2(false);
                  }
                  } >
                    &nbsp; Benefits of STEAM
                    {/* <span><BsArrowDown style={{color: "#6fb73f", fontSize: "30px", fontWeight: "bolder", transform: "rotate(180deg)"}}/></span> */}
                    {arrow_2 &&
                      <span><BsArrowDown className="arrow-down" /></span>
                    }
                    {!arrow_2 &&
                      <span><BsArrowDown className="arrow-up" /></span>
                    }
                  </label>
                  <div className="tab-content">
                    <ul>
                      <li>Exposes students to the creative process</li>
                      <li>Offers meaningful collaboration</li>
                      <li>
                        Increases critical thinking
                      </li>
                      <li>Provides a unique way to problem-solving</li>
                      <li>Gives all students hands-on learning experiences</li>
                      <li>Encourages girls to explore STEAM fields</li>
                      <li>Shows them a different way to value the arts</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="gallery">
              <div className="about-title-header" style={{ padding: "5% 0px 0px 0px" }}>
                <h1>Gallery</h1>
              </div>
              {gallery.length === 0 ? (
                <div>No images</div>
              ) : (
                <Slider {...config}>
                  {gallery.map((x, i) => {
                    return (
                      <div className="gallery-image-cards">
                        <img
                          src={
                            'https://mindsinaction.com.na/api/gallery/' +
                            x.image
                          }
                          alt=""
                        />
                      </div>
                    );
                  })}
                </Slider>
              )}
            </div>
          </div>
        </div>


        <div className="steam-about" data-aos="fade-up">
          <div className="about-title-header">
            <h1>Why Mindsinaction STEAM Centre</h1>
          </div>

          <div className="steam-box-container">

            <div className="steam-about-box">
              <div className="steam-about-icon" style={{ background: '#fd6494' }}>
                <img src={adaptive_image} alt="" />
              </div>
              <div className="steam-about-content">
                <p>Adaptive Curriculum</p>
              </div>
            </div>

            <div className="steam-about-box">
              <div className="steam-about-icon" style={{ background: '#4eb7ff' }}>
                <img src={teamwork_image} alt="" />
              </div>
              <div className="steam-about-content">
                <p>Team Work</p>
              </div>
            </div>

            <div className="steam-about-box">
              <div className="steam-about-icon" style={{ background: '#43f3ef' }}>
                <img src={consumer_image} alt="" />
              </div>
              <div className="steam-about-content">
                <p>Consumer of Technology to Creator of Technology</p>
              </div>
            </div>

            <div className="steam-about-box">
              <div className="steam-about-icon" style={{ background: '#ffb508' }}>
                <img src={cretivity_image} alt="" />
              </div>
              <div className="steam-about-content">
                <p>Creativity and Problem Solving</p>
              </div>
            </div>

            <div className="steam-about-box">
              <div className="steam-about-icon" style={{ background: '#37ba82' }}>
                <img src={prototyping_image} alt="" />
              </div>
              <div className="steam-about-content">
                <p>Prototyping</p>
              </div>
            </div>

            <div className="steam-about-box">
              <div className="steam-about-icon" style={{ background: "#cd57ff" }}>
                <img src={research_image} alt="" />
              </div>
              <div className="steam-about-content">
                <p>Research</p>
              </div>
            </div>

            <div className="steam-about-box">
              <div className="steam-about-icon" style={{ background: '#fd6494' }}>
                <img src={hands_on_image} alt="" />
              </div>
              <div className="steam-about-content">
                <p>Hands on Project Based Teaching</p>
              </div>
            </div>

            <div className="steam-about-box">
              <div className="steam-about-icon" style={{ background: '#43f390' }}>
                <img src={fun_image} alt="" />
              </div>
              <div className="steam-about-content">
                <p>Fun Filled Projects</p>
              </div>
            </div>


          </div>
        </div>
        <div className="videos">
          <div className="about-title-header" data-aos="fade-up">
            <h1>Videos</h1>
          </div>

          <div className="course-service">
            <div className="course-about" data-aos="fade-up">
              {/**Courses section */}
              <Slider {...courseConfig}>
                <div
                  className="course-image-cards-about"
                  style={{ backgroundColor: "white" }}
                >
                  <iframe
                    id="professional"
                    src="https://www.youtube.com/embed/AFblJKg9Egw"
                    title="Professional Development "
                    allowFullScreen
                    className="video-card-player"
                  ></iframe>
                  <h3
                    style={{
                      textAlign: "center",
                      color: "#0c50a3",
                      marginTop: "20px",
                    }}
                  >
                    DEVELOPING TEACHERS AND LEADERS
                  </h3>
                  <p style={{ color: "darkgrey", padding: "15px" }}>
                    Explore programs and resources that support professional
                    development and drive the impact of teaching across schools
                    and colleges.
                  </p>
                </div>
                <div
                  className="course-image-cards-about"
                  style={{ backgroundColor: "white" }}
                >
                  <iframe
                    id="professional"
                    src="https://www.youtube.com/embed/m46Nau6NpjE"
                    title="Professional Development "
                    allowFullScreen
                    className="video-card-player"
                  ></iframe>
                  <h3
                    style={{
                      textAlign: "center",
                      color: "#0c50a3",
                      marginTop: "20px",
                    }}
                  >
                    INSPIRING GROUPS AND COMMUNITIES
                  </h3>
                  <p style={{ color: "darkgrey", padding: "15px" }}>
                    Discover projects, activities and challenges to engage young
                    people of all ages with the world and wonder of STEAM
                    subjects and careers.
                  </p>
                </div>
                <div
                  className="course-image-cards-about"
                  style={{ backgroundColor: "white" }}
                >
                  <iframe
                    src="https://www.youtube.com/embed/6w7ZBVmf5gs"
                    title="YouTube video player"
                    allowfullscreen
                    className="video-card-player"
                  ></iframe>
                  <h3
                    style={{
                      textAlign: "center",
                      color: "#0c50a3",
                      marginTop: "20px",
                    }}
                  >
                    ENGAGING EMPLOYERS AND INDUSTRY
                  </h3>
                  <p style={{ color: "darkgrey", padding: "15px" }}>
                    Learn more about STEAM learning initiatives that connect
                    employers with educators, bridging the gap between today's
                    learners and tomorrow's careers.
                  </p>
                </div>
                {/*  */}
                <div
                  className="course-image-cards-about"
                  style={{ backgroundColor: "white" }}
                >
                  <iframe
                    id="professional"
                    src="https://www.youtube.com/embed/AFblJKg9Egw"
                    title="Professional Development "
                    allowFullScreen
                    className="video-card-player"
                  ></iframe>
                  <h3
                    style={{
                      textAlign: "center",
                      color: "#0c50a3",
                      marginTop: "20px",
                    }}
                  >
                    DEVELOPING TEACHERS AND LEADERS
                  </h3>
                  <p style={{ color: "darkgrey", padding: "15px" }}>
                    Explore programs and resources that support professional
                    development and drive the impact of teaching across schools
                    and colleges.
                  </p>
                </div>
                <div
                  className="course-image-cards-about"
                  style={{ backgroundColor: "white" }}
                >
                  <iframe
                    id="professional"
                    src="https://www.youtube.com/embed/m46Nau6NpjE"
                    title="Professional Development "
                    allowFullScreen
                    className="video-card-player"
                  ></iframe>
                  <h3
                    style={{
                      textAlign: "center",
                      color: "#0c50a3",
                      marginTop: "20px",
                    }}
                  >
                    INSPIRING GROUPS AND COMMUNITIES
                  </h3>
                  <p style={{ color: "darkgrey", padding: "15px" }}>
                    Discover projects, activities and challenges to engage young
                    people of all ages with the world and wonder of STEAM
                    subjects and careers.
                  </p>
                </div>
                <div
                  className="course-image-cards-about"
                  style={{ backgroundColor: "white" }}
                >
                  <iframe
                    src="https://www.youtube.com/embed/6w7ZBVmf5gs"
                    title="YouTube video player"
                    allowfullscreen
                    className="video-card-player"
                  ></iframe>
                  <h3
                    style={{
                      textAlign: "center",
                      color: "#0c50a3",
                      marginTop: "20px",
                    }}
                  >
                    ENGAGING EMPLOYERS AND INDUSTRY
                  </h3>
                  <p style={{ color: "darkgrey", padding: "15px" }}>
                    Learn more about STEAM learning initiatives that connect
                    employers with educators, bridging the gap between today's
                    learners and tomorrow's careers.
                  </p>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
