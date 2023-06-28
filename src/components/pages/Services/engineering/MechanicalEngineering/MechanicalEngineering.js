import React from "react";
import { Tree, TreeNode } from "react-organizational-chart";
import dev_women from "../../../../images/services-images/mechanical_eng/profile/dev-profile-women.png";
import dev_men from "../../../../images/services-images/mechanical_eng/profile/dev-profile.png";
import x3D_printing from "../../../../images/services-images/mechanical_eng/x3D_printing.jpg";
import x1laser_cutting from "../../../../images/services-images/mechanical_eng/x1laser_cutting.jpg";
import x2numeric_control from "../../../../images/services-images/mechanical_eng/x2numeric_control.jpg";
import x4fabrication from "../../../../images/services-images/mechanical_eng/x4fabrication.png";
import { AiOutlineAim, BsEye, GiDiamondHard } from "react-icons/all";
import "./MechanicalEngineering.css";

function MechanicalEngineering() {
  return (
    <>
      <div
        className="mechanical_engineering-main"
      >
        <div className="mechanical-engineering-main-heading">
          <h1>Welcome to our Mechanical Engineering Division</h1>
        </div>
        {/* <h1>Welcome to our Mechanical Engineering Division</h1> */}
        {/* <div className="center-hrz">
          <p className="position-description">
            We design and oversee the manufaturing of products.
          </p>
        </div> */}

        <div className="mechanical-title-header">
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
                <img src={dev_women} alt="dev_women" />
                <p>Director</p>
                <h5>Petenen Nankela</h5>
                <h6>Design and Fabrication</h6>
              </div>
            }
            className="tree-root"
          >
            <TreeNode
              label={
                <div className="dep-card">
                  <img src={dev_men} alt="dev_men" />
                  <p>Design</p>
                  <h5>Mbakumba Tjihonge "Chris"</h5>
                </div>
              }
            >
              <TreeNode
                label={
                  <div className="pos">
                    <p>Engineer</p>
                  </div>
                }
              />
            </TreeNode>
            <TreeNode
              label={
                <div className="dep-card">
                  <img src={dev_women} alt="dev_women" />
                  <p>Fabrication</p>
                  <h5>Uaatjo Muhuure</h5>
                </div>
              }
            >
              <TreeNode
                label={
                  <div className="pos">
                    <p>Engineer</p>
                  </div>
                }
              />
            </TreeNode>
            <TreeNode
              label={
                <div className="dep-card">
                  <img src={dev_women} alt="dev_women" />
                  <p>Assembling</p>
                  <h5>Bold Creations</h5>
                </div>
              }
            >
              <TreeNode
                label={
                  <div className="pos">
                    <p>Manufacturer</p>
                  </div>
                }
              />
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

        <div className="mechanical_engineering-services">
          {/* <div className="heading">
          <h3>Our Services</h3>
        </div> */}
          <div className="mechanical-title-header">
            <h1>Our Services</h1>
          </div>
          <div className="mechanical_engineering-service-container">
            <div className="mechanical-service-card">
              <img src={x3D_printing} alt="3D_printing" srcset="" />
              <div className="mechanical-padding">
                <h4>3D Printing</h4>
                {/* <p>*************************</p> */}
              </div>
            </div>

            <div className="mechanical-service-card">
              <img src={x1laser_cutting} alt="Laser_Cutting" srcset="" />
              <div className="mechanical-padding">
                <h4>Laser Cutting</h4>
                {/* <p>*************************</p> */}
              </div>
            </div>

            <div className="mechanical-service-card">
              <img src={x2numeric_control} alt="cnc" srcset="" />
              <div className="mechanical-padding">
                <h4>Computer Numerical Control (CNC)</h4>
                {/* <p>*************************</p> */}
              </div>
            </div>

            <div className="mechanical-service-card">
              <img src={x4fabrication} alt="fabrication" srcset="" />
              <div className="mechanical-padding">
                <h4>Fabriction</h4>
                {/* <p>*************************</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default MechanicalEngineering;
