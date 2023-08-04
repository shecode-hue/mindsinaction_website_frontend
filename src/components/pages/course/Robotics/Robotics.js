import React from "react";
import "./Robotics.css";
import { NavLink } from "react-router-dom";
import scratchProgramming from "../../../images/course-images/scratchProgramming.jpg";
import introRobotics from "../../../images/course-images/introRobotics.jpg"
import steamEducationImage from "../../../images/course-images/steam-education-works.png";
//import tinkerCadImage from "../../../images/course-images/tinkercad.jpg";

export default function Robotics() {
  const roboticsCourses = [
    {
      courseImage: introRobotics,
      courseName: "Introduction to Robotics and Programming",
      courseDescription:
        "In this course, learners are introduced to problem identification and ...",
      courseLink: "/introduction-to-robotics-and-programming",
    },
    {
      courseImage: scratchProgramming,
      courseName: "Scratch Programmong",
      courseDescription:"In this course, learners are introduced to scratch which is the world’s largest coding community for children and ...",
      courseLink: "/"
    },
    {
      courseImage: steamEducationImage,
      courseName: "Dash Robot for Children",
      courseDescription:
        "This course provide an authentic learning experience to cultivate practical competencies in STEAM.",
      courseLink: "/STEAM-Education-Works",
    },
    
  ];

  return (
    <div>
      <div className="robotics-main-page">
        <div className="robotics-page">
          <h1>Robotics</h1>
        </div>
        <div className="robotics-cards">
          {roboticsCourses.map((x, i) => {
            return (
              <div key={i} className="robotics-card">
                <NavLink to={x.courseLink}>
                  <div className="robotics-hr">
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

                  <div className="robotics-content">
                    <h3>{x.courseName}</h3>
                    <p>{x.courseDescription}</p>
                  </div>

                  <div className="robotics-border"></div>
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
