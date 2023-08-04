import React from "react";
import "./Blog.css";
import { NavLink } from "react-router-dom";
import SARFAI from "../../../images/blog-images/IMG_5848.jpg";

export default function Blogs() {
  //clusters' array
  const blogs = [

    {
      bgImage: SARFAI,
      bgTitle: "UNESCO-SOUTHERN AFRICA SUB-REGIONAL FORUM ON ARTIFICIAL INTELLIGENCE",
      bgAuthur:"Nonhlanhla Lupahla",
      bgDate: "23/09/2022",
      // bgDescription:"Lorem ipsum dolor sit amet. Aut ducimus culpa ad delectus fugit in enim internos quo ipsum quibusdam non dolor laudantium. Et numquam galisum ex optio dolorem ad voluptates pariatur cum consequatur unde ut explicabo blanditiis.In voluptatem quia vel eius veniam qui similique pariatur At veritatis ducimus. Sit ipsa eaque ad internos quam ab magnam soluta aut commodi recusandae!",
      bgDescription: "Namibia hosted the first Southern Africa sub-Regional Forum on Artificial Intelligence. The event which was co-organized by UNESCO and Namibia's Ministry of Higher Education, Technology, and Innovation, took place in Windhoek, Namibia, from September 7th to 9th, 2022, with the theme Towards a development-oriented sustainable and ethical use of artificial intelligence...",
      bgLink:"/blogs",
    },
  ];

  return (
    <div id="blog-body">
      <div className="main-blog-page">
        <div className="blog-title-header" data-aos="fade-up">
        <h1>Our Blog</h1>
</div>
      <div className="blog-cards">
        {blogs.map((x, i) => {
          return (
            <div className="blog-center-hrz">
            <div key={i} className="blog-card"  data-aos="fade-up">
              
              <div className="blog-items">
              <div  id="blog-image"style={{
              backgroundImage: `linear-gradient(rgba(76, 143, 93, 0.5),rgba(76, 143, 93, 0.5)),url(${x.bgImage})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat"
            }}></div>
             
              <div className="blog-content">
                <h2>{x.bgTitle}</h2>
                <p style={{color: "black"}}>{x.bgAuthur} <span>|</span>{x.bgDate}</p>
                <p style={{color: "gray"}}>{x.bgDescription}</p>
                
                <div className="blog-button" >
                <NavLink to={x.bgLink}>
                  <button >Read blog</button>
                  </NavLink>
                </div>
              </div>
              </div>
              <div className="blog-border"></div>
            </div>
            </div>
          );
        })}
      </div>
      {/* <div className="clearfix"></div> */}
      </div>
    </div>
  );
}
