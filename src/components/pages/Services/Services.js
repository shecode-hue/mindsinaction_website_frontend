import React from "react";
import { NavLink } from "react-router-dom"
import 'aos/dist/aos.css';
import webDevImage from "../../images/services-images/web-dev.png";
import electricalEngineering from "../../images/services-images/engineering/Divisions/ElectricalEngineering.png";
import electronicEngineering from "../../images/services-images/engineering/Divisions/ElectronicEngineering.png";
import mechanicalEngineering from "../../images/services-images/engineering/Divisions/MechanicalEngineering.png";
import "./Services.css";

const services = [
  {
    name: "Information and Communication Technology (ICT)",
    image: webDevImage,
    description:
      "We design and develop mobile applications for both IOS and Android platforms.",
    link: "/ict"
  },
  {
    name: "Mechanical Engineering",
    image: mechanicalEngineering,
    description:
      "We design and oversee the manufaturing of products.",
    link: "/mechanical-engineering"
  },
  {
    name: "Electrical Engineering",
    image: electricalEngineering,
    description:
      "We design and develop electrical components of products.",
    link: "/electrical-engineering"
  },
  {
    name: "Electronics Engineering",
    image: electronicEngineering,
    description:
      "We design and develop electronic components and circuits of products.",
    link: "/electronic-engineering"
  },
]

export default function Services() {
  return (
    <>
      <div
        className="service-main"
      >
        {/* <h1>Our Services</h1> */}
        <div className="services-title-header" data-aos="fade-up">
              <h1>Our Services</h1>
            </div>
        <div className="service-ict">
        {/* <h3>ICT Services</h3> */}
        {/* <div className="service-ict-card">
          {ictService.map((x, i) => {
            return (
              <div key={i} className="services-card">
                {/* <div className="hr">
                    <button>View courses</button>
                  </div> *

                <div className="image-container">
                  <img src={x.image} alt="" />
                </div>

                <div className="services-content">
                  <h4>{x.name}</h4>
                  <p>{x.description}</p>
                </div>
                <div className="react-content-highlights">
                  <li>{x.highlight1}</li>
                  <li>{x.highlight2}</li>
                  <li>{x.highlight3}</li>
                  <li>{x.highlight4}</li>
                  <li>{x.highlight5}</li>
                </div>
                {/* <div className="services-border"></div> *
              </div>
            );
          })}
        </div> */}
        <div className="service-ict-card" data-aos="fade-up">
          {services.map((x, i) => {
            return (

              <div key={i} className="services-card">
                {/* <div className="hr">
                    <button>View courses</button>
                  </div> */}
                <NavLink exact to={x.link}>
                  <div className="image-container">
                    <img src={x.image} alt="" />
                  </div>
                
                <div className="services-content">
                  <h4>{x.name}</h4>
                  <p>{x.description}</p>
                </div>
                </NavLink>
                {/* <div className="services-border"></div> */}
              </div>
            );
          })}
        </div>
      </div>
      {/* <div className="service-eng">
        <h3>Engineering Services</h3>
        <div className="service-ict-card">
          {engServices.map((x, i) => {
            return (
              <div key={i} className="services-card">
                {/* <div className="hr">
                    <button>View courses</button>
                  </div> *

                <div className="image-container">
                  <img src={x.image} alt="" />
                </div>

                <div className="services-content">
                  <h4>{x.name}</h4>
                  <p>{x.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div> */}
      {/* <div className="center-hrz">
         <div className="department-mision-vision-values-services" data-aos="fade-up">
          <div className="container">
            <div className="icon">
              <div className="ico-container">
                <BsEye className="ico" />
              </div>
            </div>
            <div className="content">
              <h3>Vision</h3>
              <p>
                To be a leader in practicing safe engineering, environmentally
                friendly, cost effective,innovative and creative significant
                value to society
              </p>
            </div>
          </div>

          <div className="container">
            <div className="icon">
              <div className="ico-container">
                <AiOutlineAim className="ico" />
              </div>
            </div>
            <div className="content">
              <h3>Mission</h3>
              <p>
                Striving to satisfy our clients by engineering and innovating
                for sustainable growth
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
                Creative thinking, Excellence, Honesty, Integrity, All-
                encompassing stakeholder involvement and consideration.
              </p>
            </div>
          </div>
        </div>
      </div> */}
      
      </div>
    </>
  );
}
