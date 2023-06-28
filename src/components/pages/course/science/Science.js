
import React from "react";
import "./Science.css"
import { NavLink } from "react-router-dom";
import enviromentalTechnologyImage from "../../../images/course-images/science.jpg";
import Physical_1_Image from "../../../images/course-images/physical-1.jpg";
import BiologyImage from "../../../images/course-images/biology-1.jpg";

export default function Science() {
  const scienceCourses = [
    {
      courseImage: enviromentalTechnologyImage,
      courseName: "Chemistry",
      courseDescription:
        "The Science Lab offer learners short and easy to follow experiments in physical ...",
      courseLink: "/science-engineers",
    },
    {
      courseImage: Physical_1_Image,
      courseName: "Physical science",
      courseDescription:
        "In this course, learners study effects of natural elements such as light, ...",
      courseLink: "/Botany",
    },
    {
      courseImage: BiologyImage,
      courseName: "Biology",
      courseDescription:
        "In this course, learners will take on the role of plastic product designers.",
      courseLink: "/Plastic",
    },
  ];

  return (
    <div>
      <div className="science-main-page">
        <div className="science-page">
          <h1>Science Lab</h1>
        </div>
        <div className="science-cards">
          {scienceCourses.map((x, i) => {
            return (
              <div key={i} className="science-card">
                <NavLink to={x.courseLink}>
                  <div className="science-hr">
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

                <div className="science-content">
                  <h3>{x.courseName}</h3>
                  <p>{x.courseDescription}</p>
                </div>

                <div className="science-border"></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
