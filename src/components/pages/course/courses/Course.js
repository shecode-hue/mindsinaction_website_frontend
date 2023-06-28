import React from "react";
import "./Course.css";
import { NavLink } from "react-router-dom";
import roboticsImage from "../../../images/course-images/robotics.jpg";
import electronicsImage from "../../../images/course-images/electronics.jpg";
import mecha from "../../../images/course-images/mechatronics/mecha.jpg"
import software from "../../../images/course-images/software.jpg";
import scienceImage from "../../../images/course-images/science.jpg";

export default function Course() {
  //clusters' array
  const clusters = [

    {
      clImage: roboticsImage,
      clName: "Robotics",
      noOfModules:"3",
      clLink: "/module",
      clTag: "robotics",
    },
    {
      clImage: electronicsImage,
      clName: "Electronics",
      noOfModules:"4",
      clLink: "/module",
      clTag: "electronics",
    },
    {
      clImage: mecha,
      clName: "Mechatronics",
      noOfModules:"2",
      clLink: "/module",
      clTag: "mechatronics",
    },
    {
      clImage: software,
      clName: "Software",
      noOfModules:"3",
      clLink: "/module",
      clTag: "software",
    },
    {
      clImage: scienceImage,
      clName: "Science Lab",
      noOfModules:"4",
      clLink: "/module",
      clTag: "science",
    },
  ];

  return (
    <>
      <div
        className="main-course-page"
        // style={{
        //   backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.95) 3%,rgba(17, 16, 16, 0.3) 30%)`,
        //   background:'linear-gradient(360deg, rgba(2,0,36,1) 0%, rgba(8,180,118,1) 0%, rgba(0,120,190,1) 100%)',
        //   width: "100%",
        //   height: "auto",
        //   backgroundPosition: "center",
        //   backgroundSize: "cover",
        //   // position: "relative",
        // }}
      >
        <h1>Modules</h1>
        <div className="cluster-cards">
        {clusters.map((x, i) => {
          return (
            <div key={i} className="cluster-card">
              <NavLink to={{
                      pathname: x.clLink,
                      state: {modData:x.clTag}  
                    }}>
                <div className="hr">
                  <button>View Modules</button>
                </div>
              </NavLink>
              <div  style={{
              backgroundImage: `linear-gradient(rgba(12, 80, 163, 0.30),rgba(12, 80, 163, 0.30)),url(${x.clImage})`,
              width: "100%",
              height: "200px",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}></div>
             
              <div className="cluster-content">
                <p>{x.clName} <span>|</span>{x.noOfModules} Modules</p>
              </div>

              <div className="cluster-border"></div>
            </div>
          );
        })}
      </div>
      </div>
      
      {/* <div className="clearfix"></div> */}
    </>
  );
}
