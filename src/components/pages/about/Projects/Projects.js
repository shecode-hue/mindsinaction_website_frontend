import React from "react";
import "./Projects.css";
import "react-toastify/dist/ReactToastify.css";
// import "aos/dist/aos.css";
// import "antd/dist/antd.css";
import { Tabs, Space } from "antd";
import STEAM_Partnership from "../../../MIA projects/STEAM Partnership Project.zip";
import Virtual_Gear_Challange from "../../../MIA projects/Virtual Gear Challange.zip";

export default function Projects() {
  
  return (
    <div className="projects-main-container">
      <center>
      <div className="projects-main-section">
        <div className="center-hr" data-aos="fade-up">
          <Space size={30} direction="vertical">
            <div className="tab-nav-list" style={{ direction: "ltr", height: "auto"}}>
              <Tabs defaultActiveKey="tab1" tabPosition="left">
                <Tabs.TabPane tab="Virtual Gear Challange" key="tab1">
                  {/* <div>This is a content of Project4</div> */}
                  
                  <div className="project-each">
                    <div className="projects-title-header" data-aos="fade-up">
                      <h1>Virtual Gear Challange</h1>
                    </div>

                    <div className="project-container">
                      {/* <div className="project-image project-image-1" >
                        {/* <img src={SampleImg1} alt="/" style={{width: "320px" ,height:"100px"}} /> *
                      </div> */}
                      <div className="project-text">
                      <div className="project-image project-image-1" >
                        {/* <img src={SampleImg1} alt="/" style={{width: "320px" ,height:"100px"}} /> */}
                      </div>
                        <p className="title">Date: 12/09/2022 <span>|</span> Location: Windhoek, Namibia</p>
                        <p className="description">
                          Get Excited About Robotics Competition (GEAR), Windhoek, Namibia.
                          GEAR provides an exciting hands-on LEGO robotics challenge to primary and secondary school learners, with the goal of increasing interest in STEAM (science, technology, engineering, arts, and mathematics) disciplines while offering mentoring opportunities to NUST and UNAM engineering students. Mindsinaction teams participated enthusiastically in the 2022 GEAR competition under the theme “It's a Party”.
                        </p>

                        <center>
                          <a href={Virtual_Gear_Challange} download="Virtual_Gear_Challange">
                            <button className="download-btn" type="submit">Download Project</button>
                          </a>
                        </center>

                      </div>
                    </div>

                  </div>
                </Tabs.TabPane>
                <Tabs.TabPane tab="Steam Partnership (Katutura)" key="tab2">
                  {/* <div>This is a content of Project4</div> */}
                  <div className="project-each">
                    <div className="projects-title-header" data-aos="fade-up">
                      <h1>Steam Partnership (Katutura)</h1>
                    </div>

                    <div className="project-text">
                    <div className="project-image project-image-2" >
                      {/* <img src={SampleImg1} alt="/" style={{width: "320px" ,height:"100px"}} /> */}
                    </div>
                      <p className="title">Date: 12/09/2022 <span>|</span> Location: Benhard Nodkamp Center in Katutura </p>
                      <p className="description">
                        This project is a collaboration between Auas Rotary Club, Rotary Club Hamburg International, and Mindsinaction. The partners realized the rapid technological advancements in computing, artificial intelligence (AI), robotics and data science that are transforming economies across the globe, and resolved to expose Namibian learners to Science, Technology, Engineering, Arts, and Mathematics (STEAM) skills while they are still young. The partners believe in lifelong learning, and that STEAM education is essential to help prepare learners for 21st century careers.
                      </p>
                      <center>
                        <a href={STEAM_Partnership} download="STEAM_Partnership"> <button className="download-btn" type="submit">Download Project</button></a>
                      </center>
                    </div>



                  </div>
                </Tabs.TabPane>
                <Tabs.TabPane tab="Steam Partnership (Kunene Region)" key="tab3">
                  {/* <div>This is a content of Project4</div> */}
                  <div className="project-each">
                    <div className="projects-title-header" data-aos="fade-up">
                      <h1>Steam Partnership (Kunene Region)</h1>
                    </div>
                    <div className="project-text">
                    <div className="project-image project-image-3" >
                      {/* <img src={SampleImg1} alt="/" style={{width: "320px" ,height:"100px"}} /> */}
                    </div>
                      <p className="title">Date: 12/09/2022 <span>|</span> Location: STEAM Education Center in Kunene Region</p>
                      <p className="description">
                        This project is a collaboration between Exxonmobil, the Namibia Scientific Society, and Mindsinaction. The project aim to increase interest in science and mathematics outside the classroom through the concept of learning by doing. A pilot of this project has been completed in 2022 at 4 schools in the Kunene Region. The outcome is positive, the objectives have been met, and pilot reports have been shared with all stakeholders. The report indicated that children who engaged hands-on in STEAM activities developed an intuition for creativity, authentic interest in innovation, developed a culture of making prototypes, and some have started to explore entrepreneurship opportunities while still young. STEAM exposes children to the opportunity to explore a wider range of career options that they were not aware of.
                      </p>
                      <center>
                      <a href={STEAM_Partnership} download="STEAM_Partnership"> <button className="download-btn" type="submit">Download Project</button></a>
                      </center>
                    </div>

                  </div>
                </Tabs.TabPane>
              </Tabs>
            </div>
          </Space>
        </div>
      </div>
      </center>


{/* small screens greater than 400px */}
<center>
      <div className="projects-main-section-small d-1">
        <div className="center-hr" data-aos="fade-up">
          <Space size={30} direction="vertical">
            <div className="tab-nav-list" style={{ direction: "ltr", padding: "5px 0px 0px 5px", height: "auto" }}>
              <Tabs defaultActiveKey="tab1" tabPosition="top">
                <Tabs.TabPane tab="Virtual Gear Challange" key="tab1">
                  {/* <div>This is a content of Project4</div> */}
                  <div className="project-each">
                    <div className="projects-title-header" data-aos="fade-up">
                      <h1>Virtual Gear Challange</h1>
                    </div>
                    {/* <div className="project-image project-image-1" >
                    </div> */}
                    <div className="project-text">
                      <center>
                      <div className="project-image project-image-1" >
                    </div>
                    <p className="title">Date: 12/09/2022 <span>|</span> Location: Mindsinaction</p>
                    <p className="description">
                    Get Excited About Robotics Competition (GEAR), Windhoek, Namibia.
                          GEAR provides an exciting hands-on LEGO robotics challenge to primary and secondary school learners, with the goal of increasing interest in STEAM (science, technology, engineering, arts, and mathematics) disciplines while offering mentoring opportunities to NUST and UNAM engineering students. Mindsinaction teams participated enthusiastically in the 2022 GEAR competition under the theme “It's a Party”.
                       </p>
                      <a href={Virtual_Gear_Challange} download="Virtual_Gear_Challange">
                            <button className="download-btn" type="submit">Download Project</button>
                          </a>
                      </center>
                   

                    </div>
                  </div>
                </Tabs.TabPane>
                <Tabs.TabPane tab="Steam Partnership (Katutura)" key="tab2">
                  {/* <div>This is a content of Project4</div> */}
                  <div className="project-each">
                    <div className="projects-title-header" data-aos="fade-up">
                      <h1>Steam Partnership (Katutura)</h1>
                    </div>
                    {/* <div className="project-image project-image-2" >
                    </div> */}
                    <div className="project-text">
                      <center>
                      <div className="project-image project-image-2" >
                    </div>
                      <p className="title">Date: 12/09/2022 <span>|</span> Location: Mindsinaction</p>
                      <p className="description">
                      This project is a collaboration between Auas Rotary Club, Rotary Club Hamburg International, and Mindsinaction. The partners realized the rapid technological advancements in computing, artificial intelligence (AI), robotics and data science that are transforming economies across the globe, and resolved to expose Namibian learners to Science, Technology, Engineering, Arts, and Mathematics (STEAM) skills while they are still young. The partners believe in lifelong learning, and that STEAM education is essential to help prepare learners for 21st century careers.
                       </p>
                      <a href={STEAM_Partnership} download="STEAM_Partnership"> 
                      <button className="download-btn" type="submit">Download Project</button>
                      </a>
                      </center>
                    </div>

                  </div>
                </Tabs.TabPane>
                <Tabs.TabPane tab="Steam Partnership (Kunene)" key="tab3">
                  {/* <div>This is a content of Project4</div> */}
                  <div className="project-each">
                    <div className="projects-title-header" data-aos="fade-up">
                      <h1>Steam Partnership (Kunene)</h1>
                    </div>
                    {/* <div className="project-image project-image-3" >
                    </div> */}
                    <div className="project-text">
                      <center>
                      <div className="project-image project-image-3" >
                    </div>
                      <p className="title">Date: 12/09/2022 <span>|</span> Location: Benhard Nodkamp Center in Katutura</p>
                      <p className="description">
                        This project is a collaboration between Exxonmobil, the Namibia Scientific Society, and Mindsinaction. The project aim to increase interest in science and mathematics outside the classroom through the concept of learning by doing. A pilot of this project has been completed in 2022 at 4 schools in the Kunene Region. The outcome is positive, the objectives have been met, and pilot reports have been shared with all stakeholders. The report indicated that children who engaged hands-on in STEAM activities developed an intuition for creativity, authentic interest in innovation, developed a culture of making prototypes, and some have started to explore entrepreneurship opportunities while still young. STEAM exposes children to the opportunity to explore a wider range of career options that they were not aware of.
                      </p>
                      <a href={STEAM_Partnership} download="STEAM_Partnership"> 
                      <button className="download-btn" type="submit">Download Project</button>
                      </a>
                      </center>
                    </div>

                  </div>
                </Tabs.TabPane>
              </Tabs>
            </div>
          </Space>
        </div>
      </div>
      </center>

{/* small screens less than 400px */}
      <div className="center-hrz-projects d-2">
      <div className="projects-main-section-small">
        <div className="center-hrz-projects" data-aos="fade-up">
          <Space size={30} direction="vertical">
            <div className="tab-nav-list" style={{ direction: "ltr", padding: "5px 0px 0px 5px", height: "auto" }}>
              <Tabs defaultActiveKey="tab1" tabPosition="top">
                {/* <Tabs.TabPane tab="Virtual Gear Challange" key="tab1">
                  {/* <div>This is a content of Project4</div> */}
                  <div className="project-each">
                    <div className="projects-title-header-small" data-aos="fade-up">
                    
                    <h3 style={{margin: "40px 0px", fontSize: "35px"}}>Virtual Gear Challange</h3>
                    </div>
                    {/* <div className="project-image project-image-1" >
                    </div> */}
                    <div className="project-text">
                      <center>
                      <div className="project-image project-image-1" >
                    </div>
                    <p className="title">Date: 12/09/2022 <span>|</span> Location: Mindsinaction</p>
                    <p className="description">
                    Get Excited About Robotics Competition (GEAR), Windhoek, Namibia.
                          GEAR provides an exciting hands-on LEGO robotics challenge to primary and secondary school learners, with the goal of increasing interest in STEAM (science, technology, engineering, arts, and mathematics) disciplines while offering mentoring opportunities to NUST and UNAM engineering students. Mindsinaction teams participated enthusiastically in the 2022 GEAR competition under the theme “It's a Party”.
                       </p>
                      <a href={Virtual_Gear_Challange} download="Virtual_Gear_Challange">
                            <button className="download-btn" type="submit">Download Project</button>
                          </a>
                      </center>
                   

                    </div>
                  </div>
                <Tabs.TabPane tab="Virtual Gear Challange" key="tab1">
                  {/* <div>This is a content of Project4</div> */}
                  <div className="project-each">
                    <div className="projects-title-header-small" data-aos="fade-up">
                    
                    <h3 style={{margin: "40px 0px", fontSize: "35px"}}>Virtual Gear Challange</h3>
                    
                      
                    </div>
                    {/* <div className="project-image project-image-1" >
                    </div> */}
                    <div className="project-text">
                      <center>
                      <div className="project-image project-image-1" >
                    </div>
                    <p className="title">Date: 12/09/2022 <span>|</span> Location: Mindsinaction</p>
                    <p className="description">
                    Get Excited About Robotics Competition (GEAR), Windhoek, Namibia.
                          GEAR provides an exciting hands-on LEGO robotics challenge to primary and secondary school learners, with the goal of increasing interest in STEAM (science, technology, engineering, arts, and mathematics) disciplines while offering mentoring opportunities to NUST and UNAM engineering students. Mindsinaction teams participated enthusiastically in the 2022 GEAR competition under the theme “It's a Party”.
                        </p>
                      <a href={Virtual_Gear_Challange} download="Virtual_Gear_Challange">
                            <button className="download-btn" type="submit">Download Project</button>
                          </a>
                      </center>
                   

                    </div>
                  </div>
                </Tabs.TabPane>
                <Tabs.TabPane tab="Steam Partnership (Katutura)" key="tab2">
                  {/* <div>This is a content of Project4</div> */}
                  <div className="project-each">
                    <div className="projects-title-header-small" data-aos="fade-up">
                    <h2 style={{marginTop: "40px", fontSize: "35px"}}>Steam Partnership</h2>
                    <div className="center-hrz-projects">
                    <h3 style={{marginBottom: "40px", fontSize: "35px"}}>(Katutura)</h3>
                    </div>
                    </div>
                    {/* <div className="project-image project-image-2" >
                    </div> */}
                    <div className="project-text">
                      <center>
                      <div className="project-image project-image-2" >
                    </div>
                      <p className="title">Date: 12/09/2022 <span>|</span> Location: Mindsinaction</p>
                      <p className="description">
                      This project is a collaboration between Auas Rotary Club, Rotary Club Hamburg International, and Mindsinaction. The partners realized the rapid technological advancements in computing, artificial intelligence (AI), robotics and data science that are transforming economies across the globe, and resolved to expose Namibian learners to Science, Technology, Engineering, Arts, and Mathematics (STEAM) skills while they are still young. The partners believe in lifelong learning, and that STEAM education is essential to help prepare learners for 21st century careers.
                      </p>
                      <a href={STEAM_Partnership} download="STEAM_Partnership"> 
                      <button className="download-btn" type="submit">Download Project</button>
                      </a>
                      </center>
                    </div>

                  </div>
                </Tabs.TabPane>
                <Tabs.TabPane tab="Steam Partnership (Kunene)" key="tab3">
                  {/* <div>This is a content of Project4</div> */}
                  <div className="project-each">
                    <div className="projects-title-header-small" data-aos="fade-up">
                      <h2 style={{marginTop: "40px", fontSize: "35px"}}>Steam Partnership</h2>
                      <div className="center-hrz-projects">
                      <h3 style={{marginBottom: "40px", fontSize: "35px"}}>(Kunene)</h3>
                      </div>
                      
                    </div>
                    {/* <div className="project-image project-image-3" >
                    </div> */}
                    <div className="project-text">
                      <center>
                      <div className="project-image project-image-3" >
                    </div>
                      <p className="title">Date: 12/09/2022 <span>|</span> Location: Benhard Nodkamp Center in Katutura</p>
                      <p className="description">
                      This project is a collaboration between Exxonmobil, the Namibia Scientific Society, and Mindsinaction. The project aim to increase interest in science and mathematics outside the classroom through the concept of learning by doing. A pilot of this project has been completed in 2022 at 4 schools in the Kunene Region. The outcome is positive, the objectives have been met, and pilot reports have been shared with all stakeholders. The report indicated that children who engaged hands-on in STEAM activities developed an intuition for creativity, authentic interest in innovation, developed a culture of making prototypes, and some have started to explore entrepreneurship opportunities while still young. STEAM exposes children to the opportunity to explore a wider range of career options that they were not aware of.
                       </p>
                      <a href={STEAM_Partnership} download="STEAM_Partnership"> 
                      <button className="download-btn" type="submit">Download Project</button>
                      </a>
                      </center>
                    </div>

                  </div>
                </Tabs.TabPane>
              </Tabs>
            </div>
          </Space>
        </div>
      </div>
      </div>
    </div>
  );
}
