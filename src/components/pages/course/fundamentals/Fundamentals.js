import React from "react";
import "./Fundamentals.css";
import { NavLink } from "react-router-dom";
import kiboImage from "../../../images/course-images/kibo.jpg";
import artsWithKibo from "../../../images/course-images/artsWithKibo.jpg";
import creativityWithKibo from "../../../images/course-images/creativity-kibo.jpg";

export default function Fundamentals() {
  const fundamentalCourses = [
    {
      courseImage: kiboImage,
      courseName: "Introduction to Kibo",
      courseDescription:
        "In this introduction course, learners are exposed to arts and robotics.",
      courseLink: "/Introduction-to-kibo",
    },
    {
      courseImage: artsWithKibo,
      courseName: "Arts and Technology with Kibo",
      courseDescription:
        "This course advances from the preceding courses with Kibo. ",
      courseLink: "/Arts-and-Technology-with-Kibo",
    },
    {
      courseImage: creativityWithKibo,
      courseName: "Creativity with Kibo",
      courseDescription:
        "In this course learners explore their creativity and develop a culture of ...",
      courseLink: "/Creativity-with-Kibo",
    },
  ];

  return (
    <div>
      <div className="fundamental-main-page">
        <div className="fundamental-page">
          <h1>Fundamentals of STEAM</h1>
        </div>
        <div className="fundamental-cards">
          {fundamentalCourses.map((x, i) => {
            return (
              <div key={i} className="fundamental-card">
                <NavLink to={x.courseLink}>
                  <div className="fundamental-hr">
                    <button>View course</button>
                  </div>
                </NavLink>
                <div className="image"
                  style={{
                    backgroundImage: `linear-gradient(rgba(12, 80, 163, 0.30),rgba(12, 80, 163, 0.30)),url(${x.courseImage})`,
                    width: "100%",
                    height: "200px",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                ></div>

                <div className="fundamental-content">
                  <h3>{x.courseName}</h3>
                  <p>{x.courseDescription}</p>
                </div>

                <div className="fundamental-border"></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
