import React from "react";
import { Tree, TreeNode } from "react-organizational-chart";
import laptop_repair from "../../../../images/services-images/engineering/Electronic Engineering/laptop_repair.jpg";
import pcb_design from "../../../../images/services-images/engineering/Electronic Engineering/pcb_design.jpeg";
import smartHome from "../../../../images/services-images/engineering/Electronic Engineering/smartHome.png"
import voltageReg from "../../../../images/services-images/engineering/Electronic Engineering/voltageReg.jpg"
import male from "../../../../images/services-images/engineering/Electronic Engineering/male_avatar.png";
import { AiOutlineAim, BsEye, GiDiamondHard } from "react-icons/all";
import "./Electronic_Engineering.css";
import Security from "../../../../images/services-images/engineering/Electrical-Engineering/Security.jpg";
import Tumelo from "../../../../images/coach-images/Tumelo.jpg";
import shepherd from "../../../../images/coach-images/Sheperd.jpg";
import Tito from "../../../../images/coach-images/Tito.jpg";

function Electronic_Engineering() {
  return (
    <>
      <div
        className="Electronic_Engineering-main"
      >
        <div className="electronic-engineering-main-heading">
          <h1>Welcome to our Electronics Engineering Department</h1>
          {/* <p>
            Electronics engineering is an a branch of engineering that deals with the design, fabrication,
            and operation of circuits, electronic devices, and systems.
          </p> */}
        </div>

        <div className="electronic-engineering-title-header">
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
                  <h6>Electronics Engineering</h6>
                </div>
              }
              className="tree-root"
            >
              <TreeNode
                label={
                  <div className="dep-card">
                    <img src={Tumelo} alt="" />
                    <h5>Tumelo Mabhena</h5>
                  </div>
                }
              >
                <TreeNode
                  label={
                    <div className="pos">
                      <p>Electronics Engineer</p>
                    </div>
                  }
                />
              </TreeNode>
              <TreeNode
                label={
                  <div className="dep-card">
                    <img src={Tito} alt="" />
                    <h5>Tito Barnabas</h5>
                  </div>
                }
              >
                <TreeNode
                  label={
                    <div className="pos">
                      <p>Technician</p>
                    </div>
                  }
                />
              </TreeNode>
              <TreeNode
                label={
                  <div className="dep-card">
                    <img src={shepherd} alt="" />
                    <h5>Shepherd Junior Mabhena</h5>
                  </div>
                }
              >
                <TreeNode
                  label={
                    <div className="pos">
                      <p>Electronics Engineer</p>
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


        <div className="Electronic_Engineering-services">
          {/* <div className="heading">
            <h3>Our Services</h3>
          </div> */}
          <div className="electronic-engineering-title-header">
            <h1>OUR SERVICES</h1>
          </div>
          <div className="Electronic_Engineering-service-container">
            <div className="service-card">
              <img src={smartHome} alt="" />
              <div className="content">
                <h4>Smart Solution Development</h4>
                <p>
                  <li>Home Automation</li>
                  <li>Agricultural Automation</li>
                  <li>IoT Systems</li>
                </p>
              </div>
            </div>
            <div className="service-card">
              <img src={pcb_design} alt="" />
              <div className="content">
                <h4>PCB design and Manufacturing</h4>
                <p>
                  <li>Design Verification</li>
                  <li>Schemattic Capture</li>
                  <li>Document package creation</li>
                  <li>Update an existing PCB design</li>
                  <li>Design PCB layout based on the design schematic the customer developed.</li>
                </p>
              </div>
            </div>

            <div className="service-card">
              <img src={voltageReg} alt="" />
              <div className="content">
                <h4>Voltage Regulators</h4>
                <p>
                  <li>Troubleshootting and Diagnostics</li>
                  <li>Software and Hardware Installation</li>
                  <li>Computer Diagnostics</li>
                  <li>Virus Removal</li>
                  <li>Networking Services</li>
                </p>
              </div>
            </div>
            <div className="service-card">
              <img src={Security} alt="" />
              <div className="content">
                <h4>Security</h4>
                <p>
                  <ul>Installaton of :</ul>
                  <li>CCTV</li>
                  <li>House and business Alarms</li>
                  <li>Intercom</li>
                  <li>Gate automation</li>
                  <li>Access control system installation</li>
                </p>
              </div>
            </div>
            <div className="service-card">
              <img src={laptop_repair} alt="" />
              <div className="content">
                <h4>Electronics repair and Maintenance</h4>
                <p>
                  {/* <li>Troubleshootting and Diagnostics</li>
                <li>Software and Hardware Installation</li>
                <li>Computer/Cellphone Diagnostics</li> */}
                  <li>Virus Removal</li>
                  <li>Networking Services</li>
                  <li>LCD Replacement</li>
                  <li>Troubleshooting</li>
                  <li>Google Account and iCloud Removal</li>
                  <li>Password Removal</li>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  );
}

export default Electronic_Engineering;
