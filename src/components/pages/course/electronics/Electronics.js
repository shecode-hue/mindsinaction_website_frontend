import React from "react";
import "./Electronics.css";
import { NavLink } from "react-router-dom";
import raspberry from "../../../images/course-images/raspberry.jpg";
import breadBoardImage from "../../../images/course-images/bread-board.jpg";
import VeroBoardImage from "../../../images/course-images/vero-board.jpg";


export default function Electronics() {
  const electronicsCourses = [
    {
      courseImage: raspberry,
      courseName: "Raspberry PI",
      courseDescription:
        "In this course, learners are introduced to Raspberry Pi ...",
      courseLink: "/Electronics-with-microcontrollers-programming",
    },
    {
      courseImage: breadBoardImage,
      courseName: "Printed Circuit Board (PCB) design",
      courseDescription:
        "In this course, learners dig deeper into electronics with ease using fun ...",
      courseLink: "/Electronics-Prototyping-with-Breadboard",
    },
    {
      courseImage: VeroBoardImage,
      courseName: "Electronics Circuits and Soldering",
      courseDescription: "In this course, learners are taught how to solder.",
      courseLink: "/Electronics-Prototyping-with-Vero-Board",
    },
  ];

  return (
    <div>
      <div className="electronics-main-page">
        <div className="electronics-page">
          <h1>Electronics</h1>
        </div>
        <div className="electronics-cards">
          {electronicsCourses.map((x, i) => {
            return (
              <div key={i} className="electronics-card">
                <NavLink to={x.courseLink}>
                  <div className="electronics-hr">
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

                  <div className="electronics-content">
                    <h3>{x.courseName}</h3>
                    <p>{x.courseDescription}</p>
                  </div>

                  <div className="electronics-border"></div>
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
