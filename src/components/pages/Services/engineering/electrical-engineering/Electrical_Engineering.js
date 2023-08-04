import React from "react";
import { Tree, TreeNode } from "react-organizational-chart";
import General_El from "../../../../images/services-images/engineering/Electrical-Engineering/General_El.jpg";
import Renewable from "../../../../images/services-images/engineering/Electrical-Engineering/Renewable.jpeg";
import male from "../../../../images/services-images/engineering/Electrical-Engineering/male.jpg";
import { AiOutlineAim, BsEye, GiDiamondHard } from "react-icons/all";
import "./Electrical_Engineering.css";
import Speaker from "../../../../images/coach-images/SP.jpg";
import Tina from "../../../../images/coach-images/tina.jpg";
import Victor from "../../../../images/coach-images/Victor.jpg";

//projects array
function Electrical_Engineering() {
  return (
    <>
      <div
        className="Electrical_Engineering-main"
      >
        <div className="Electrical_Engineering-main-header">
          <div className="electrical-engineering-main-heading">
            <h1>Welcome to our Electrical Engineering Department</h1>
          </div>
          {/* <h1>Welcome to our Electrical Engineering Department</h1> */}
          {/* <p>
            Electrical engineering is a field of engineering that generally deals
            with the study and application of electricity, electronics and
            electromagnetism and here at Minds In Action we strive on providing
            quality solutions to your electrical problems.
          </p> */}
        </div>

        <div className="electrical-engineering-title-header">
          <h1>DEPARTMENT STRUCTURE</h1>
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
                  <img src={male} alt="" />
                  <h5>Festus Naingwendje</h5>
                  <p>Director</p>
                  <h6>Electrical Engineering</h6>
                </div>
              }
              className="tree-root"
            >

              <TreeNode
                label={
                  <div className="dep-card">
                    <img src={Tina} alt="" />
                    <h5>Albertina Iiyambo</h5>
                  </div>
                }
              >
                <TreeNode
                  label={
                    <div className="pos">
                      <p>Electrical Engineer</p>
                    </div>
                  }
                />
              </TreeNode>
              <TreeNode
                label={
                  <div className="dep-card">
                    <img src={Speaker} alt="" />
                    <h5>Nelumbu Speakerperson</h5>
                  </div>
                }
              >
                <TreeNode
                  label={
                    <div className="pos">
                      <p>Electrical Engineer</p>
                    </div>
                  }
                />
              </TreeNode>
              <TreeNode
                label={
                  <div className="dep-card">
                    <img src={Victor} alt="" />
                    <h5>Victor Neshila</h5>
                  </div>
                }
              >
                <TreeNode
                  label={
                    <div className="pos">
                      <p>Electrical Engineer</p>
                    </div>
                  }
                />
              </TreeNode>
            </Tree>
          </div>
        </center>

        <div className="department-mision-vision-values">
          <div className="container" style={{height: "100%"}}>
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

          <div className="container" style={{height: "100%"}}>
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
          <div className="container" style={{height: "100%"}}>
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


        <div className="Electrical_Engineering-services">
          {/* <div className="heading">
            <h3>Our Services</h3>
          </div> */}
          <div className="electrical-engineering-title-header">
          <h1>OUR SERVICES</h1>
          </div>
          <div className="Electrical_Engineering-service-container">
            <div className="service-card">
              <img src={General_El} alt="" srcset="" />
              <div className="content">
                <h4>General Electrician</h4>
                <p>
                  <li>Electrical set up and rewiring</li>
                  <li>Electrical panel installation, upgrading and replacing</li>
                  <li>Whole house surge protection</li>
                  <li>Outlet installation and repair</li>
                  <li>Electrical Fence installation</li>
                  <li>Geyser installation</li>
                </p>
              </div>
            </div>
            <div className="service-card">
              <img src={Renewable} alt="" />
              <div className="content">
                <h4>Renewable Energy Consultants</h4>
                <p>
                  <li>Solar panel installation</li>
                  <li>Inverters and Converters for Renewable energy</li>
                  <li>Solar panel testing </li>
                  <li>Energy storage technology </li>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Electrical_Engineering;
