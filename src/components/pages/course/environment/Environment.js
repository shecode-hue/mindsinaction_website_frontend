import React from "react";
import "./Environment.css";
import { NavLink } from "react-router-dom";
import dev from "../../../images/course-images/dev.jpg";
import mobileAppDevelopment from "../../../images/course-images/mobileAppDevelopment.jpg";
import graphics from "../../../images/course-images/graphics.jpg";

export default function Environment() {
  const environmentalCourses = [
    {
      courseImage: dev,
      courseName: "Web Development",
      courseDescription:
        "Learners will create their own websites while learning the basic technologies like HTML/CSS through fun web projects,",
      courseLink: "/mobile-development",
    },
    {
      courseImage: mobileAppDevelopment,
      courseName: "Mobile App Development",
      courseDescription:
        "Learners will get to know the learning environment and learn the foundations of coding Apps and games for smartphones.",
      courseLink: "/mobile-development",
    },
    {
      courseImage: graphics,
      courseName: "Graphic Design",
      courseDescription:
        "In this course, learners will design and build their own extraordinary creative projects, learning ...",
      courseLink: "/Plastic",
    },
  ];

  return (
    <div>
      <div className="environmental-main-page">
        <div className="environmental-page">
          <h1>Software</h1>
        </div>
        <div className="environmental-cards">
          {environmentalCourses.map((x, i) => {
            return (
              <div key={i} className="environmental-card">
                <NavLink to={x.courseLink}>
                  <div className="environmental-hr">
                    <button>View course</button>
                  </div>
                </NavLink>
                <div
                  style={{
                    backgroundImage: `linear-gradient(rgba(12, 80, 163, 0.30),rgba(12, 80, 163, 0.30)),url(${x.courseImage})`,
                    width: "100%",
                    height: "200px",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                ></div>

                <div className="environmental-content">
                  <h3>{x.courseName}</h3>
                  <p>{x.courseDescription}</p>
                </div>

                <div className="environmental-border"></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
