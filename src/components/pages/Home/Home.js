import React, { useEffect, useState } from 'react';
import './Home.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import rightArrow from "../../icons/home_small arrow button - Right.svg";
import leftArrow from "../../icons/home_small arrow button - Left.svg";
// import SliderArrowR from "../../icons/Home-Sider-right.png";
// import SliderArrowL from "../../icons/Home-Sider-left.png";
// import SliderArrowL2 from "../../icons/Home-Sider-left (1).png";
import { NavLink } from 'react-router-dom';
import goethe from '../../images/goethe.png';
import dundee from '../../images/dundee.jpg';
import 'react-slideshow-image/dist/styles.css';
// import { Fade } from "react-slideshow-image";
import Sliderx from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Axios from 'axios';
import Slider from "react-animated-slider";
import { GiMaterialsScience } from "react-icons/gi";
import { AiOutlineRobot } from "react-icons/ai";
import { VscCircuitBoard } from "react-icons/vsc";
import { BsCode } from "react-icons/bs";
import { RiMicroscopeLine } from "react-icons/ri";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import "react-animated-slider/build/horizontal.css";
import "./SliderStyling/slider-animations.css";
import exxonmobil from '../../images/exxonmobil.png';
import konrad from '../../images/konrad.png';
import NAMIBIA_coa from '../../images/NAMIBIA_coa.png';
import ncrst from '../../images/ncrst.png';
import nss from '../../images/nss.png';
import unesco from '../../images/unesco.png';
import Slider1 from "../../images/Homepage Slider Images/IMG-20230424-WA0021.jpg";
import Slider2 from "../../images/Homepage Slider Images/IMG-20230424-WA0022.jpg";
import Slider3 from "../../images/Homepage Slider Images/IMG-20230424-WA0023.jpg";
import Slider4 from "../../images/Homepage Slider Images/IMG-20230424-WA0026.jpg";
import Slider5 from "../../images/Homepage Slider Images/IMG-20230424-WA0029.jpg";
import Slider6 from "../../images/Homepage Slider Images/IMG-20230424-WA0033.jpg";
import WhySteam1 from "../../images/Home_images/why-steam-images/why-steam (1).png";
import WhySteam2 from "../../images/Home_images/why-steam-images/why-steam (2).png";
import WhySteam3 from "../../images/Home_images/why-steam-images/why-steam (3).png";
import WhySteam4 from "../../images/Home_images/why-steam-images/why-steam (4).png";
import WhySteam5 from "../../images/Home_images/why-steam-images/why-steam (5).png";
import WhySteam6 from "../../images/Home_images/why-steam-images/why-steam (6).png";
import WhySteam7 from "../../images/Home_images/why-steam-images/why-steam (7).png";
import WhySteam8 from "../../images/Home_images/why-steam-images/why-steam (8).png";
import lego1 from "../../images/Home_images/LegoGallery/lego (1).jpg";
import lego2 from "../../images/Home_images/LegoGallery/lego (2).jpg";
// import lego3 from "../../images/Home_images/LegoGallery/lego (3).jpg";
import lego4 from "../../images/Home_images/LegoGallery/lego (4).jpg";
// import lego5 from "../../images/Home_images/LegoGallery/lego (5).jpg";
import lego6 from "../../images/Home_images/LegoGallery/lego (6).jpg";
import lego7 from "../../images/Home_images/LegoGallery/lego (7).jpg";
import Science from "../../images/Home_images/Home-modules-images/Science.svg"
import Software from "../../images/Home_images/Home-modules-images/Software.svg"
import Mechatronics from "../../images/Home_images/Home-modules-images/Mechatronics.svg"
import Electronics from "../../images/Home_images/Home-modules-images/Electronics.svg"
import Robotics from "../../images/Home_images/Home-modules-images/Robotics.svg"
// import BackgroundOne from "../../images/Home_images/home_Floating image.svg"
import services1 from "../../images/Home_images/Home-services/icon_Mobile App Dev.svg"
import services2 from "../../images/Home_images/Home-services/icon_Web Dev.svg"
import services3 from "../../images/Home_images/Home-services/icon_Data Center Solutions.svg"
import services4 from "../../images/Home_images/Home-services/icon_3D Printing.svg"


// import { IoChevronForward, HiChevronDoubleRight } from 'react-icons/all';

const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
  < img className="button-it" src={leftArrow} alt="prevArrow" {...props} />);

const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
  < img className="button-it" src={rightArrow} alt="nextArrow"  {...props} />);

//home page top slider config
const content = [
  {
    title: "Mindsinaction STEAM Centre",
    description:
      "We are a space where students explore Science, Technology, Engineering, Arts and Mathematics through exciting hands-on activities. Additionally, we take pride in offering quality ICT and Engineering Services.",
    button: "Read More",
    image: Slider1,
    user: "16 May 2023 ",

  },
  {
    title: "Mindsinaction STEAM Centre",
    description:
      "We are a space where students explore Science, Technology, Engineering, Arts and Mathematics through exciting hands-on activities. Additionally, we take pride in offering quality ICT and Engineering Services.",
    button: "Discover",
    image: Slider2,
    user: "16 May 2023",

  },
  {
    title: "Mindsinaction STEAM Centre",
    description:
      "We are a space where students explore Science, Technology, Engineering, Arts and Mathematics through exciting hands-on activities. Additionally, we take pride in offering quality ICT and Engineering Services.",
    button: "Register now",
    image: Slider3,
    user: "16 May 2023",

  },
  {
    title: "Mindsinaction STEAM Centre",
    description:
      "We are a space where students explore Science, Technology, Engineering, Arts and Mathematics through exciting hands-on activities. Additionally, we take pride in offering quality ICT and Engineering Services.",
    button: "Read More",
    image: Slider4,
    user: "16 May 2023",

  },
  {
    title: "Mindsinaction STEAM Centre",
    description:
      "We are a space where students explore Science, Technology, Engineering, Arts and Mathematics through exciting hands-on activities. Additionally, we take pride in offering quality ICT and Engineering Services.",
    button: "Discover",
    image: Slider5,
    user: "16 May 2023",

  },
  {
    title: "Mindsinaction STEAM Centre",
    description:
      "We are a space where students explore Science, Technology, Engineering, Arts and Mathematics through exciting hands-on activities. Additionally, we take pride in offering quality ICT and Engineering Services.",
    button: "Register now",
    image: Slider6,
    user: "16 May 2023",

  }
];
// config information for the services
const ServicesInfo = [
  {
    image: services1,
    service_name: 'MOBILE APP DEVELOPMENT',
    description:
      'We develop mobile applications for both IOS and Android platforms.',
  },
  {
    image: services3,
    service_name: 'WEBSITE DEVELOPMENT',
    description:
      'We develop high-performing, user-friendly, fully functional interactive websites.',
  },
  {
    image: services2,
    service_name: 'DATA CENTRE SOLUTIONS',
    description:
      'We help data centers become more safe, resilient and efficient.',
  },

  {
    image: services4,
    service_name: '3D PRINTING',
    description:
      // 'We analyse business, financial, IT systems and conduct assessments of new information systems to identify risks and improve IT-enabled business processes. ',
      'We analyse business, financial, IT systems and conduct assessments of new information systems.',
  },

];
// config information for the services
const ParentsFeedback = [
  {
    parent: 'Jennefier Metirapi',
    message:
      "My daughter is now attending the virtual camp now due to the current situation and he loves it. It is good balances of having fun and learning something new",
  },
  {
    parent: '2Jennefier Metirapi',
    message:
      "My daughter is now attending the virtual camp now due to the current situation and he loves it. It is good balances of having fun and learning something new",
  },
  {
    parent: '3Jennefier Metirapi',
    message:
      "My daughter is now attending the virtual camp now due to the current situation and he loves it. It is good balances of having fun and learning something new",
  }, {
    parent: '4Jennefier Metirapi',
    message:
      "My daughter is now attending the virtual camp now due to the current situation and he loves it. It is good balances of having fun and learning something new",
  }, {
    parent: '5Jennefier Metirapi',
    message:
      "My daughter is now attending the virtual camp now due to the current situation and he loves it. It is good balances of having fun and learning something new",
  },
];
const partnersConfig = {
  arrows: true,
  dots: true,
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 6,
  autoplay: true,
  autoplaySpeed: 6000,
  prevArrow: <SlickArrowLeft />,
  nextArrow: <SlickArrowRight />,
  responsive: [
    {
      breakpoint: 1124,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
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

//configuration for LegoGallery
const LegoGalleryConfig = {
  arrows: true,
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 6000,
  prevArrow: <SlickArrowLeft />,
  nextArrow: <SlickArrowRight />,
  responsive: [
    {
      breakpoint: 1124,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
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
// course card information


const partners = [
  {
    link: "https://www.dundeeprecious.com/English/Operating-Regions/Current-Operations/Tsumeb/Overview/default.aspx",
    image: dundee,
  },
  {
    link: "https://corporate.exxonmobil.com/",
    image: exxonmobil,
  },
  {
    link: "https://www.goethe.de/ins/na/en/ver.cfm?event_id=24619907",
    image: goethe,
  },
  {
    link: "https://www.kas.de/en/",
    image: konrad,
  },

  {
    link: "/",
    image: NAMIBIA_coa,
  },
  {
    link: "https://ncrst.na/",
    image: ncrst,
  },
  {
    link: "https://www.namscience.com/",
    image: nss,
  },
  {
    link: "https://www.unesco.org/en",
    image: unesco,
  },
];
// images for the legoslider
const legoimages = [
  {
    image: lego1,
  },
  {
    image: lego2,
  },
  {
    image: lego4,
  },
  {
    image: lego6,
  },
  {
    image: lego7,
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
    id: 'three',
    image: WhySteam3,
    title: "Consumer of Technology to Creator of Technology",
  },
  {
    id: 4,
    image: WhySteam4,
    title: "Creativity and Problem Solving",
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
    title: "Hands on Project Based Teaching",
  },
  {
    id: 8,
    image: WhySteam8,
    title: "Fun Filled Projects",
  },
];
//Products slide configuration

const productConfig = {
  dots: false,
  arrows: true,
  indicators: true,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: true,
  autoplaySpeed: 6000,
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
        arrows: true,
      },
    },

    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: true,
      },
    },
    {
      breakpoint: 580,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
      },
    },
  ],
};
//parents feedback slide configuration

const parentsConfig = {
  dots: true,
  arrows: true,
  indicators: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 6000,
  prevArrow: <SlickArrowLeft />,
  nextArrow: <SlickArrowRight />,
  responsive: [
    {
      breakpoint: 1124,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
        arrows: true,
      },
    },

    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        arrows: true,
      },
    },
    {
      breakpoint: 580,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
      },
    },
  ],
};
const cards = [
  {
    icon: GiMaterialsScience,
    title: 'Science',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: Science,
    color: 'F05023',
  },
  {
    icon: BsCode,
    title: 'Software',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: Software,
    color: '7965AC',
  },
  {
    icon: RiMicroscopeLine,
    title: 'Mechatronics',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: Mechatronics,
    color: 'FFCD05',
  },
  {
    icon: VscCircuitBoard,
    title: 'Electronics',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: Electronics,
    color: 'F37021',
  },
  {
    icon: AiOutlineRobot,
    title: 'Robotics',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: Robotics,
    color: '33A85B',
  },
];
// const homeImageConfig = {
//   dots: false,
//   arrows: false,
//   infinite: true,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 6000,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         infinite: true,
//         dots: false,
//       },
//     },
//     {
//       breakpoint: 820,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         infinite: true,
//         dots: false,
//       },
//     },
//     {
//       breakpoint: 768,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         infinite: true,
//         dots: false,
//       },
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//       },
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//       },
//     },
//   ],
// };


export default function Home() {

  // adding dots to the slider
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);

  const handleDotClick = (index) => {
    setActiveSlide(index);
  }
  const [products, setProducts] = useState([]);
  // const [homeImages, setHomeImages] = useState([]);
  const [isRotated, setIsRotated] = useState(true);
  //fetching products from the database
  const getProducts = () => {
    Axios.get('https://mindsinaction.com.na/api/getProduct.php')
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
  // const fetchHomeImages = () => {
  //   Axios.get('https://mindsinaction.com.na/api/home_page.php')
  //     .then((response) => {
  //       console.log(response.data);
  //       setHomeImages(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  //fetching images from the database
  const getImages = () => {
    Axios.get('https://mindsinaction.com.na/api/gallery.php')
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


  return (
    <div className="home-main-container" style={{ padding: "0px 0px 0px 0px" }}>
      <div className="home-page-top-slider">
        <Slider className="slider-wrapper"
          autoplay={1000}
          activeIndex={currentSlide}
          onSlideChange={(slideIndex) => setCurrentSlide(slideIndex)}
          handleDotClick={handleDotClick}
        >
          {content.map((item, index) => (
            <div
              key={index}
              className="slider-content"
              style={{ background: `url('${item.image}') no-repeat center center` }}
            >
              <div className="inner">
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <button className='Home-page-Slider-button-outer'><div className="Home-page-Slider-button-inner">{item.button}</div></button>
              </div>
              <section>
                <span>
                  Date Posted <strong>{item.user}</strong>
                </span>
              </section>
            </div>
          ))}
        </Slider>
        <div className="slider-dots">
          {content.map((content, index) => (
            <span
              key={index}
              className={activeSlide === index ? 'active' : ''}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </div>
      <div className="Background-div-top">
        <div className="Modules-home">
          <h1>Modules</h1>
          <div className="Modules-home-cards">
            {cards.map((x, i) => {
              return (
                <div key={i} className="Modules-item"
                  style={{
                    backgroundColor: `#${x.color}`,
                  }}>
                  <a href="#0" aria-labelledby={x.title}> </a>
                  <img src={x.image} alt={x.title} />
                  {/* <x.icon className="modules-icon" size='9rem' color="white" /> */}
                  <div className="Modules-item__overlay" style={{
                    backgroundColor: `#${x.color}`,
                  }}>
                    <h3 id={x.title}
                      style={{
                        backgroundColor: `#${x.color}`,
                      }} aria-hidden="true">{x.title}</h3>
                    <div className="Modules-item__body">
                      <p>{x.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="What-is-STEAM-Education-home">
          <div class="box-for-image-moving-UpandDown"></div>

          <div className="What-is-STEAM-Education-home-text" >
            <h1>What is
              <font color="#f1603b"> S</font>
              <font color="#48aee3">T</font>
              <font color="#ffc60a">E</font>
              <font color="#f37021">A</font>
              <font color="#63be45">M </font>
              Education ?</h1>
            <p>STEAM stands for Science, Technology, Engineering, Arts and Mathematics. Students uncover the dynamic power and potential of STEAM modules through projects featuring robotics, electronics, exploring mechatronics, engineering, programming and more.</p>
          </div>
          <div id="rotating-setting-icon" className={isRotated ? 'rotate' : ''} >

          </div>
          <button id="trigger" onClick={handleTriggerClick}>Trigger</button>

        </div>
        <div className="Why-steam">

          <h1>Why Mindsinaction STEAM Center</h1>
          <div className="Why-steam-cards-outer" >
            <div className="Why-steam-cards" >
              {WhySteam.map((x, i) => {
                return (


                  <div key={i} className="Why-steam-card" >
                    <div className="Why-steam-card-image"
                      style={{ background: `url('${x.image}') no-repeat center center` }}
                    >
                    </div>
                    <div className="Why-steam-card-text" >
                      <h3 id={x.id}>
                        {x.title}
                      </h3>
                    </div>
                  </div>

                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className='Background-div-Middle'>
        <div className='LegoGallery'>
          <h3 className='LegoGallery-text'>
            We use LEGO® Education SPIKE™ Prime robotics kits, which are the most easy-to-understand yet versatile and engaging robotics kits currently in the market.
          </h3>
          <div className='LegoGallery-images-box'>
            < Sliderx {...LegoGalleryConfig}>
              {legoimages.map((x, y) => {
                return (
                  <div key={y} className="LegoGallery-images-box-slider">
                    <div className="image-for-lego">
                      <img src={x.image} alt="lego" srcset="" />
                    </div>
                  </div>
                );
              })}
            </ Sliderx>
          </div>
        </div>
        <div className="social-media-feed">
          <h1>What our parents are saying</h1>
          {/*  */}
          <div className="products" style={{ marginTop: '60px' }}>
            {/**Products section */}
            < Sliderx {...parentsConfig}>
              {ParentsFeedback.map((x, i) => {
                return (
                  <div key={i} className="chat-boxes">
                    <div className="box sb">
                    {x.message}
                      <hr className="new1" />
                      -{x.parent}-
                    </div>
                  </div>
                );
              })}
            </ Sliderx>
          </div>
          {/*  */}
        </div>
      </div>
      <div className='parralex-div'>
        <h2><FaQuoteLeft />< span>  Namibian Learners Deserve Exciting, Hands-on Experiences </span> <FaQuoteRight /></h2>
      </div>
      <div className='Background-div-bottom'>
        <div className="services-home-div" data-aos="fade-up">
          <div style={{ marginTop: '120px' }} className="home-title-electronic">
            <h1>Our Services</h1>
          </div>
          <div className="home-services-cards">
            {ServicesInfo.map((x, i) => {
              return (
                <div key={i} className="home-services-card">
                  {/* <NavLink to={x.productLink}> */}
                  <NavLink exact to="/services">

                    <div className="home-services-card-image-top"
                      style={{ background: `url('${x.image}') no-repeat center center` }}>
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
        </div>
        <div className="electronic-home" data-aos="fade-up">
          <div style={{ marginTop: '120px' }} className="home-title-electronic">
            <h1>Electronic Shop</h1>
          </div>
          {/*  */}
          <div className="products" style={{ marginTop: '60px' }}>
            {/**Products section */}
            < Sliderx {...productConfig}>
              {products.map((x, i) => {
                return (
                  <div key={i} className="product-image-card">
                    {/* <NavLink to={x.productLink}> */}
                    <NavLink exact to="/Shop">
                      <img
                        src={
                          'https://mindsinaction.com.na/api/product/' + x.image_url
                        }
                        alt=""
                      />
                    </NavLink>
                    <div className="products-content-home">
                      <h4>{x.product_name}</h4>
                      <p>
                        {' '}
                        <span>N$</span> {x.product_price}
                      </p>
                    </div>
                    <NavLink exact to="/Shop">
                      <div className="btn-buy-outer">
                        <button className='shop-button-home-inner'>buy</button>
                      </div>
                    </NavLink>
                  </div>
                );
              })}
            </ Sliderx>
          </div>
          {/*  */}
        </div>

        <div className="partners-home">
          <div style={{ marginTop: '120px' }} className="home-title-partners">
            <h1>Our Partners</h1>
          </div>
          <div className="our-partners">
            <div className="course" style={{ marginTop: '60px' }}>
              {/**Courses section */}
              < Sliderx {...partnersConfig}>
                {partners.map((partner, index) => (
                  <div key={index} className="partners-swiper-slide-home">
                    <div className="image">
                      <a href={partner.link} target="_blank" rel="noopener noreferrer">
                        <img src={partner.image} alt="partner" />
                      </a>
                    </div>
                  </div>
                ))}
              </ Sliderx>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
