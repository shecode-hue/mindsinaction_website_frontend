import React from "react";
import { Tree, TreeNode } from "react-organizational-chart";
import David from "../../../images/services-images/ict/profile/David2.jpg";
import terry from "../../../images/services-images/ict/profile/terry.jpg";
import andreas from "../../../images/services-images/ict/profile/andreas.jpg";
import tito from "../../../images/services-images/ict/profile/tito.jpg";
import Jesse from "../../../images/services-images/ict/profile/Jesse.jpg";
import web_dev from "../../../images/services-images/ict/webDevelopment.jpg";
import mobile_dev from "../../../images/services-images/ict/mobile-app.jpeg";
import web_app from "../../../images/services-images/ict/webApp.png";
import data_center from "../../../images/services-images/ict/dataCenter.png"
import archive_img from "../../../images/services-images/ict/projects/archive.png";
import constitution_img from "../../../images/services-images/ict/projects/constitution-app.png";
import huster_img from "../../../images/services-images/ict/projects/huster-web.gif";
import minds_img from "../../../images/services-images/ict/projects/minds-web.png";
import exploradio_img from "../../../images/services-images/ict/projects/exploradio.png"
import rightArrow from "../../../icons/Img1.png";
import leftArrow from "../../../icons/Img2.png";
// import natis_img from "../../../images/services-images/ict/projects/NaTIS.png"
import { GiBullseye, BsEye, GiDiamondHard } from "react-icons/all";
// import Slider from "react-slick";
import "./ICT.css";

//projects array
const projects = [
  {
    img: minds_img,
    name: "Mindsinaction STEAM website"
  },
  {
    img: huster_img,
    name: "Huster Machinetool website"
  },
  {
    img: constitution_img,
    name: "Constitution mobile app"
  },
  // {
  //   img: natis_img,
  //   name: "Learner's license mobile app"
  // },
  {
    img: archive_img,
    name: "National Archive mobile app"
  },
  {
    img: exploradio_img,
    name: "Exploradio Audioguide Namibia"
  },
]

const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
  < img className="button-it" src={leftArrow} alt="prevArrow" {...props} />);

const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
  < img className="button-it" src={rightArrow} alt="nextArrow"  {...props} />);

//Projects slide configuration
const projectConfig = {
  dots: false,
  infinite: true,
  slidesToShow: 4,
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
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },

    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
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

function ICT() {
  return (
    <>
      <div
        className="ict-main"
      >
        <div className="ict-main-heading">
          <h1>Welcome to our ICT Department</h1>
        </div>

        <div className="ict-title-header">
          <h1>Department Structure</h1>
        </div>
        <center>
          <div className="department-main">
            {/* <div className="heading">
            <h3>Department Structure</h3>
          </div> */}

            <Tree
              // lineColor={"#a4b0be"}
              lineColor={"#fff"}
              label={
                <div className="dep-card">
                  <img src={andreas} alt="" />
                  <h5>Andreas Leonard</h5>
                  <p>ICT Manager</p>
                  <h6>Marketing and Sales</h6>
                </div>
              }
              className="tree-root"
            >
              <TreeNode
                label={
                  <Tree
                    // lineColor={"#a4b0be"}
                    lineColor={"#fff"}
                    label={
                      <div className="dep-card">
                        <img src={David} alt="" />
                        <h5>David Ruwodo</h5>
                        <p>Director</p>
                        <h6>Software Engineer</h6>
                      </div>
                    }
                    className="tree-root"
                  >
                    {/* <TreeNode
              label={
                <div className="dep-card">
                  <img src={dev_women} alt="" />
                  <h5>Toini Jonas</h5>
                  <p>UI/UX design Division</p>
                </div>
              }
            >
              <TreeNode
                label={
                  <div className="pos">
                    <p>Software Engineer</p>
                  </div>
                }
              />
            </TreeNode> */}
                    <TreeNode
                      label={
                        <div className="dep-card">
                          <img src={terry} alt="" />
                          <h5>Tarry Gaoseb</h5>
                          <p>Coding division</p>
                        </div>
                      }
                    >
                      <TreeNode
                        label={
                          <div className="pos">
                            <p>Software Engineer</p>
                          </div>
                        }
                      />
                    </TreeNode>
                    <TreeNode
                      label={
                        <div className="dep-card">
                          <img src={Jesse} alt="" />
                          <h5>Jesse Sambo</h5>
                          <p>Coding Division</p>
                        </div>
                      }
                    >
                      <TreeNode
                        label={
                          <div className="pos">
                            <p>Software Engineer</p>
                          </div>
                        }
                      />
                    </TreeNode>
                    <TreeNode
                      label={
                        <div className="dep-card">
                          <img src={tito} alt="" />
                          <h5>Tito Barnabas</h5>
                          <p>Infrastructure division</p>
                        </div>
                      }
                    >
                      <TreeNode
                        label={
                          <div className="pos">
                            <p>Systems and Networks</p>
                          </div>
                        }
                      />
                    </TreeNode>
                  </Tree>
                }
              >
              </TreeNode>
            </Tree>
          </div>
        </center>

        <div className="department-mision-vision-values">
          <div className="container">
            <div className="icon">
              <div className="ico-container">
                <BsEye className="ico" />
              </div>
            </div>
            <div className="content">
              <h3>Vision</h3>
              <p>
                To be a leader in providing quality Web and Software Development
                solutions in the competitive global marketplace.
              </p>
            </div>
          </div>

          <div className="container">
            <div className="icon">
              <div className="ico-container">
                <GiBullseye className="ico" />
              </div>
            </div>
            <div className="content">
              <h3>Mission</h3>
              <p>
                Our mission is to deliver innovative optimal solutions with
                quality.
              </p>
            </div>
          </div>
          <div className="container">
            <div className="icon">
              <div className="ico-container">
                <GiDiamondHard className="ico" />
              </div>
            </div>
            <div className="content">
              <h3>Values</h3>
              <p>
                Creative thinking, Excellence, Honesty, Integrity, All- encompassing stakeholder involvement and consideration.
              </p>
            </div>
          </div>
        </div>
        <div className="ict-services">
          {/* <div className="heading">
            <h3>Our Services</h3>
          </div> */}
          <div className="ict-title-header">
            <h1>Our Services</h1>
          </div>
          <div className="ict-service-container">

            <div className="service-card">
              <img src={mobile_dev} alt="" srcset="" />
              <div className="content">
                <h4>
                  Mobile app development
                </h4>
                <p>
                  We design and develop mobile applications
                  for both IOS and Android platforms
                </p>
              </div>
            </div>
            <div className="service-card">
              <img src={web_dev} alt="" />
              <div className="content">

                <h4>
                  Website development
                </h4>
                <p>
                  We design and develop high-performing,
                  user-friendly, fully functional, very secure and
                  scalable websites.
                </p>
              </div>
            </div>
            <div className="service-card">
              <img src={data_center} alt="" />
              <div className="content">
                <h4>
                  Data Centre Solutions
                </h4>
                <p>
                  Mindsinaction helps data centers become
                  more safe, resilient, and efficient
                </p>
              </div>
            </div>
            <div className="service-card">
              <img src={web_app} alt="" />
              <div className="content">
                <h4>
                  Systems and web application
                  development
                </h4>
                <p>
                  We design and develop high-performing,
                  user-friendly, fully functional, very secure and
                  scalable applications.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="ict-projectsx">
          {/* <div className="heading">
            <h3>Projects</h3>
          </div> */}
          {/* <div className="ict-title-header">
            <h1>Projects</h1>
          </div> */}
          {/* <div className="projects-card-container">
            <div className="projects-card">
              <Slider {...projectConfig}>
                {
                  projects.map((x, i) => {
                    return (
                      <div className="project-card">
                        <img src={x.img} alt="" />
                        <div className="heading">
                          <h4>{x.name}</h4>
                        </div>
                      </div>
                    )
                  })
                }
              </Slider>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default ICT;
