import React from "react";
import "./Energy.css";
import { NavLink } from "react-router-dom";
import mecha from "../../../images/course-images/mechatronics/mecha.jpg";
import cnc from "../../../images/course-images/cnc/cnc.jpg";
import dprinting from "../../../images/course-images/dprinting.jpg"


export default function Energy() {
  const environmentalCourses = [
    {
      courseImage: mecha,
      courseName: "Mechatronics",
      courseDescription:
        "In this course learners will create & customize their very own WiFi-controlled robot... ",
      courseLink: "/exploring-mechatronics",
    },
    {
      courseImage: cnc,
      courseName: "CNC Programming with SolidWorks CAM",
      courseDescription:
        "Learners in this course are introduced to CNC Programming with SolidWorks CAM through a series of fun filled programmes..",
      courseLink: "/",
    },
    {
      courseImage: dprinting,
      courseName: "3D Printing",
      courseDescription:
        "Learners are introduced to 3D printing which is the construction of a three-dimensional object using...",
      courseLink: "/",
    },
  ];

  return (
    <div>
      <div className="energy-main-page">
        <div className="energy-page">
          <h1>Mechatronics</h1>
        </div>
        <div className="energy-cards">
          {environmentalCourses.map((x, i) => {
            return (
              <div key={i} className="energy-card">
                <NavLink to={x.courseLink}>
                  <div className="energy-hr">
                    <button>View course</button>
                  </div>

                  <div
                    style={{
                      backgroundImage: `linear-gradient(rgba(12, 80, 163, 0.30),rgba(12, 80, 163, 0.30)),url(${x.courseImage})`,
                      width: "100%",
                      height: "200px",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                  ></div>
                </NavLink>

                <div className="energy-content">
                  <h3>{x.courseName}</h3>
                  <p>{x.courseDescription}</p>
                </div>

                <div className="energy-border"></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
