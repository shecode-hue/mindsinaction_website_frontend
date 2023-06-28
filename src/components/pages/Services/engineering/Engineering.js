import React from "react";
import engineering_icon from "../../../images/services-images/engineering/engineering-icon.svg";
import electricalEngineering from "../../../images/services-images/engineering/Divisions/ElectricalEngineering.png";
import electronicEngineering from "../../../images/services-images/engineering/Divisions/ElectronicEngineering.png";
import mechanicalEngineering from "../../../images/services-images/engineering/Divisions/MechanicalEngineering.png";
import { AiOutlineAim, BsEye, GiDiamondHard } from "react-icons/all";
import { NavLink } from "react-router-dom";
import "./Engineering.css";

function Engineering() {
  return (
    <>
      <div
        className="engineering-main"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.95) 3%,rgba(17, 16, 16, 0.3) 30%),url(${engineering_icon})`,
          width: "100%",
          height: "300px",
          backgroundPosition: "center",
          backgroundSize: "cover",
          // position: "relative",
        }}
      >
        <h1>Welcome to our Engineering Department</h1>
      </div>

      <div className="engineering-divisions">
        <div className="heading">
          <h3>Divisions</h3>
        </div>
        <div className="engineering-container">
          <NavLink exact to="/mechanical-engineering">
            <div className="general-card">
              <img src={mechanicalEngineering} alt="" />
              <div className="content">
                <h4>Mechanical Engineering</h4>
              </div>
            </div>
          </NavLink>
          <NavLink exact to="/electrical-engineering">
            <div className="general-card">
              <img src={electricalEngineering} alt="" />
              <div className="content">
                <h4>Electrical Engineering</h4>
              </div>
            </div>
          </NavLink>
          <NavLink exact to="/electronic-engineering">
            <div className="general-card">
              <img src={electronicEngineering} alt="" />
              <div className="content">
                <h4>Electronics Engineering</h4>
              </div>
            </div>
          </NavLink>
        </div>
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
      </div>
    </>
  );
}

export default Engineering;
