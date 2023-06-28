import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./module.css";
import "../courses/RoboticsProgramming/RoboticsProgramming.css";
import "../courses/SteamEducationWorks/SteamEducationWorks.css";
import scratchProgramming from "../../../images/course-images/scratchProgramming.jpg";
import introRobotics from "../../../images/course-images/introRobotics.jpg"
import steamEducationImage from "../../../images/course-images/steam-education-works.png";
import tinkerCadImage from "../../../images/course-images/tinkercad.jpg";

//tabs 

// import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
// import "react-tabs/style/react-tabs.css";

// electronics

import raspberry from "../../../images/course-images/raspberry.jpg";

import breadBoardImage from "../../../images/course-images/bread-board.jpg";

import VeroBoardImage from "../../../images/course-images/vero-board.jpg";


// energy 

import mecha from "../../../images/course-images/mechatronics/mecha.jpg";

import cnc from "../../../images/course-images/cnc/cnc.jpg";

// import dprinting from "../../../images/course-images/dprinting.jpg"

// software 
// import WebDevelopment from "../courses/WebDevelopment/WebDevelopment";
import dev from "../../../images/course-images/dev.jpg";

import mobileAppDevelopment from "../../../images/course-images/mobileAppDevelopment.jpg";

import graphics from "../../../images/course-images/graphics.jpg";

// science 

import enviromentalTechnologyImage from "../../../images/course-images/science.jpg";
import Physical_1_Image from "../../../images/course-images/physical-1.jpg";
import BiologyImage from "../../../images/course-images/biology-1.jpg";



export default function Module() {

  // Set selected Module cluster start  
  let location = useLocation();
  let defaultSelect = () => {
    const NavSelected = location.state.modData;

    if (NavSelected == null) {
      return "robotics";
    } else {
      return NavSelected
    };
  }


  const [page, setPage] = useState(defaultSelect());

  // Set selected Module cluster end 

  // var moduleState = {
  //   selectedIndex: 0
  // };

  // function handleModuleSelect(index) {
  //   this.setState({ selectedIndex: index });
  // };

  const handleOnChange = (e) => {

    const selectedCluster = e.target.value;
    setToggleTabState(1);
    setPage(selectedCluster)

  }

  // Tabs useState and variables start 


  const [toggleTabState, setToggleTabState] = useState(1);

  const toggleTab = (tabIndex = 1) => {
    setToggleTabState(tabIndex);
  };

  // Tabs useState and variables end

 

  // const renderResult = () => {
  //   let result;
  //   page === "robotics"
  //     ? (result = "Robotics")
  //     : (result = firstCaps(page));
  //   return result;
  // };


  function pageID() {
    let id = 0;
    switch (page) {
      case "robotics":
        id = 0;
        break;
      case "electronics":
        id = 1;
        break;
      case "mechatronics":
        id = 2;
        break;
      case "software":
        id = 3;
        break;
      case "science":
        id = 4;
        break;
        default:
          id = 1;
          break;

    }
    return id;
  }
  const moduleClusterLinks = [
    {
      clusterName: "Robotics",
      clusterValue: "robotics",
      clusterLink: "/robotics",
    },
    {
      clusterName: "Electronics",
      clusterValue: "electronics",
      clusterLink: "/electronics",
    },
    {
      clusterName: "Mechatronics",
      clusterValue: "mechatronics",
      clusterLink: "/energy",
    },
    {
      clusterName: "Software",
      clusterValue: "software",
      clusterLink: "/environment",
    },
    {
      clusterName: "Science",
      clusterValue: "science",
      clusterLink: "/science",
    },

  ];


  const roboticsModules = [
    {
      moduleImage: introRobotics,
      moduleName: "Dash Robotics",
      moduleDescription:
        "Dash provides a hands-on learning experience for kids from 6 to 12 years. Kids learn coding skills while playing with Dash to help them develop their critical thinking skills and problem-solving abilities. The Dash robots are accompanied by the Wonder Workshop App, a picture-based coding language which introduces kids to fundamentals of robotics and coding before they can read. ",
      moduleHighlights: ['Explore lights, sounds', 'Concepts of coding', 'Get to know dash sensors', 'Playful movements', 'Imagine and create'],
      moduleCompetenicies: ['Control dash lights and sounds', 'Create logical instructions for Dash to execute', 'Engage dash sensors', 'Code Dash movements at will', 'Do more with Dash Robots'],
      moduleLink: "/introduction-to-robotics-and-programming",
      forId: 1,
      moduleType: "robotics",
      moduleTarget: "Grade 6 – 12",
      modulePeriod: "Trimester – (max. 8 workshops, once a week)",
      moduleTime: "14H00 – 16H30",
      moduleFee: 1500,
      moduleEquipment: "Dash Robot & Tablet",
    },
    {
      moduleImage: scratchProgramming,
      moduleName: "Lego Robotics_ev3",
      moduleDescription:
        "In this module, learners are introduced to scratch which is the world’s largest coding community for children and ...",
      moduleHighlights: ['Explore lights, sounds', 'Concepts of coding', 'Get to know dash sensors', 'Playful movements', 'Imagine and create'],
      moduleCompetenicies: ['Control dash lights and sounds', 'Create logical instructions for Dash to execute', 'Engage dash sensors', 'Code Dash movements at will', 'Do more with Dash Robots'],
      moduleLink: "/",
      forId: 2,
      moduleType: "robotics",
      moduleTarget: "Grade 8+",
      modulePeriod: "Trimester – (max. 8 workshops, once a week)",
      moduleTime: "14H00 – 16H30",
      moduleFee: 1500,
      moduleEquipment: "Lego Robotics Ev3 Mindstorms education Kit & Laptop",
    },
    {
      moduleImage: steamEducationImage,
      moduleName: "Lego Robotics_Sprike Prime",
      moduleDescription:
        "This module provide an authentic learning experience to cultivate practical competencies in STEAM.",
      moduleHighlights: ['Explore lights, sounds', 'Concepts of coding', 'Get to know dash sensors', 'Playful movements', 'Imagine and create'],
      moduleCompetenicies: ['Control dash lights and sounds', 'Create logical instructions for Dash to execute', 'Engage dash sensors', 'Code Dash movements at will', 'Do more with Dash Robots'],
      moduleLink: "/STEAM-Education-Works",
      forId: 3,
      moduleType: "robotics",
      moduleTarget: "Grade 8+",
      modulePeriod: "Trimester – (max. 8 workshops, once a week)",
      moduleTime: "14H00 – 16H30",
      moduleFee: 1500,
      moduleEquipment: "Spike Prime & Laptop",
    }
  ];

  const electronicsModules = [
    {
      moduleImage: raspberry,
      moduleName: "Coding with Kitten",
      moduleDescription:
        "Kitten offer a fun way to engage kids with coding through play. Kids create games, stories, and animations using blocks of code, perfect for kids 6+ years who are just starting to code. Kids learn sequencing, loops, events, and conditions using drag and drop commands. ",
      moduleHighlights: ['Create games, stories, and animations', 'Logical reasoning ', 'Debugging problems ', 'Imagine and Create ', 'Sustain focus and perseverance '],
      moduleCompetenicies: ['Create their own games, stories, and animations', 'Create logical code', 'Search and find bugs', 'Work on a project from start to end'],
      moduleLink: "/Electronics-with-microcontrollers-programming",
      forId: 1,
      moduleType: "electronics",
      moduleTarget: "Grade 6+",
      modulePeriod: "Trimester – (max. 8 workshops, once a week)",
      moduleTime: "14H00 – 16H30",
      moduleFee: 1500,
      moduleEquipment: "Laptop",
    },
    {
      moduleImage: breadBoardImage,
      moduleName: "Electronics & Programming with Arduino ",
      moduleDescription:
        "In this module, students start to tinker with the Arduino micro-controller. Programming with the Arduino IDE for real life applications. ",
      moduleHighlights: ['Programming techniques for micro-controllers', 'Basic electronics circuits', 'Input-output peripherals ', 'Arduino sensor technologies ', 'Motors and other actuators ', 'Do-It-Yourself projects with Arduino '],
      moduleCompetenicies: ['Identify elements on an Arduino micro-controller',
        'Build basic circuits ',
        'Run and control programs using the Arduino IDE ',
        'Use input and output peripherals ',
        'Differentiate between digital and analogue interfaces ',
        'Use sensors, motors and other Arduino products'],
      moduleLink: "/Electronics-Prototyping-with-Breadboard",
      forId: 2,
      moduleType: "electronics",
      moduleTarget: "Grade 8+",
      modulePeriod: "Trimester – (max. 8 workshops, once a week)",
      moduleTime: "14H00 – 16H30",
      moduleFee: 1500,
      moduleEquipment: "Arduino Kit & Laptop",
      modulePrerequisiteHeading: "Prerequisite:",
      modulePrerequisite: "Module 1 – Introduction to Robotics and programming",
    },
    {
      moduleImage: VeroBoardImage,
      moduleName: "Circuits & Soldering ",
      moduleDescription:
        "In this module, learners are taught how to solder. When using electronics to prototype a project idea, knowing how to solder will come in handy. Soldering is an essential skill to be learned if someone is really into electronics and making. Learning to solder is relatively straightforward but it takes a little bit of practice to become a master. ",
      moduleHighlights: ['Soldering vocabulary ',
        'Preparing the soldering iron ',
        'Soldering projects'],
      moduleCompetenicies: ['Handle the soldering bit ',
        'Apply best practices in soldering',
        'Solder their own circuits ',
        'Create their own Printed Circuit Boards (PCBs)'],
      moduleLink: "/Electronics-Prototyping-with-Vero-Board",
      forId: 3,
      moduleType: "electronics",
      moduleTarget: "Grade 8+",
      modulePeriod: "Trimester – (max. 8 workshops, once a week)",
      moduleTime: "14H00 – 16H30",
      moduleFee: 1500,
      moduleEquipment: "Found at Mindsinaction",
    },
    {
      moduleImage: VeroBoardImage,
      moduleName: "PCB Design",
      moduleDescription:
        "In this module, students dig deeper into electronics with ease using fun interactive projects. Learners are tasked to recreate prebuild circuits on bread board to understand electricity flow. They will experience circuit components, such as resistors, diodes, transistors to build basic flip-flop and truth logic circuits to reinforce confidence in electricity logic control.",
      moduleHighlights: ['Recreate circuits on the breadboard ',
        'Electricity flow ',
        'Conductors and Resistors',
        'Light emitting diodes ',
        'Build interactive circuits'],
      moduleCompetenicies: ['Understand conductivity, and resistance ',
        'Classify materials as electricity conductors or nonconductors ',
        'Create interactive circuits with LED’s'],
      moduleLink: "/Electronics-Prototyping-with-Vero-Board",
      forId: 4,
      moduleType: "electronics",
      moduleTarget: "Secondary students, tertiary students and industry professionals",
      modulePeriod: "Trimester – (max. 8 workshops, once a week)",
      moduleTime: "14H00 – 16H30",
      moduleFee: 2000,
      moduleEquipment: "Laptops & Printed Circuit Boards",
    }
  ];

  const mechatronicsModules = [
    {
      moduleImage: mecha,
      moduleName: "Mechatronics",
      moduleDescription:
        "In this module, learners are taught fundamentals of mechatronics and automation technology. Large scale manufacturing is comprised of several tasks, ranging from simple to complex. To ensure these tasks are optimally completed, mechatronic elements which execute the tasks, have to be programmed. This programming requires an understanding  of automation technology.",
      moduleHighlights: ['Problem solving ',
        'Engineering Design ',
        'Algorithm Design '],
      moduleCompetenicies: ['Identify pneumatic components ',
        'Identify various sensors: optical, magnetic and inductive, and their uses ',
        'Create pneumatic and electrical circuits to execute simple manufacturing operations ',
        'Apply logic functions to Programmable Logic Controller (PLC) to execute complex operations ',
        'Use FluidSIM® to simulate circuits '],
      moduleLink: "/",
      forId: 1,
      moduleType: "mechatronics",
      moduleTarget: "Secondary students, tertiary students and industry professionals",
      modulePeriod: "Trimester – (max. 8 workshops, once a week)",
      moduleTime: "14H00 – 16H30",
      moduleFee: 2000,
      moduleEquipment: "MecLab® Mechatronics Training System & Laptop",
    },
    {
      moduleImage: tinkerCadImage,
      moduleName: "TinkerCad & 3D Printing",
      moduleDescription:
        "This course introduces Computer Aided Design and 3D printing. Learners tinker to develop ideas within certain specifications and constraints and apply the easy to use TinkerCAD software and 3D printing tools to transform their ideas into tangible products. ",
      moduleHighlights: ['Computer Aided Design ',
        '3D Printing ',
        'Engineering design process',
        'Materials ',
        'Design Thinking'],
      moduleCompetenicies: ['Identify 2D and 3D modelling concepts ',
        'Navigate CAD software ',
        'Demonstrate the Extruded Base, Boss, and Cut features ',
        'Select the best materials for products ',
        'Create 3D models ',
        'Apply the engineering process'],
      moduleLink: "/",
      forId: 2,
      moduleType: "mechatronics",
      moduleTarget: "Secondary students, tertiary students and industry professionals",
      modulePeriod: "Trimester – (max. 8 workshops, once a week)",
      moduleTime: "14H00 – 16H30",
      moduleFee: 2000,
      moduleEquipment: "3D printer & Laptop",
    },
    {
      moduleImage: cnc,
      moduleName: "CNC Programming with SolidWorks CAM",
      moduleDescription:
        "Learners in this course are introduced to CNC Programming with SolidWorks CAM through a series of fun filled programmes..",
      moduleHighlights: ['Computer Aided Design ',
        '3D Printing ',
        'Engineering design process',
        'Materials ',
        'Design Thinking'],
      moduleCompetenicies: ['Identify 2D and 3D modelling concepts ',
        'Navigate CAD software ',
        'Demonstrate the Extruded Base, Boss, and Cut features ',
        'Select the best materials for products ',
        'Create 3D models ',
        'Apply the engineering process'],
      moduleLink: "/",
      forId: 3,
      moduleType: "mechatronics",
      moduleTarget: "Secondary students, tertiary students and industry professionals",
      modulePeriod: "Trimester – (max. 8 workshops, once a week)",
      moduleTime: "14H00 – 16H30",
      moduleFee: 2000,
      moduleEquipment: "Found at Mindsinaction",
    }
  ];


  const softwareModules = [
    {
      moduleImage: graphics,
      moduleName: "Graphic Design",
      moduleDescription:
        "Graphic design is a form of visual communication that is diverse and constantly reformulating practice that uses a wide range of technical processes to engage with audiences. The graphic design course introduces you to a range of working methods, practices and techniques.",
      moduleHighlights: ['Fundamentals of Design ',
        'Visualisation Techniques ',
        'Craft Design Studies ',
        'Design Process & Thinking',
        'Design & Layout'],
      moduleCompetenicies: ['Edit and process photos and images ',
        'Craft multi-dimensional visuals ',
        'Design and Layout content ',
        'Understand the processes of visual creation ',
        'Think creatively using design methods ',
        'Competent in creating multimedia content'],
      moduleLink: "/",
      forId: 1,
      moduleType: "software",
      moduleTarget: "Secondary students, tertiary students and industry professionals",
      modulePeriod: "Trimester – (max. 8 workshops, once a week)",
      moduleTime: "14H00 – 16H30",
      moduleFee: 2000,
      moduleEquipment: "Laptop",
    },
    {
      moduleImage: dev,
      moduleName: "Web Development",
      moduleDescription:
        "A Web Designing course belongs to the field of Computer Science and IT. It enables students to learn various techniques, tools and programming languages in order to create and maintain web pages. ",
      moduleHighlights: ['Web development fundamentals ',
        'Learn key programming languages for web development ',
        'Build projects to develop you web developer skills ',
        'Foundational knowledge of JavaScript and object-oriented programming ',
        'Understand core concepts around data and learn how to manage databases '],
      moduleCompetenicies: ['Strong computer literacy ',
        'Strong numeracy skill ',
        'Strong creative ability ',
        'Attention to detail ',
        'Strong communication skills ',
        'The ability to explain technical matters clearly '],
      moduleLink: "/",
      forId: 2,
      moduleType: "software",
      moduleTarget: "Secondary students, tertiary students and industry professionals",
      modulePeriod: "Trimester – (max. 8 workshops, once a week)",
      moduleTime: "14H00 – 16H30",
      moduleFee: 2000,
      moduleEquipment: "Laptop",
    },
    {
      moduleImage: mobileAppDevelopment,
      moduleName: "Mobile App Development",
      moduleDescription:
        "This module introduces students to programming technologies, design and development related to mobile applications. Topics include accessing device capabilities, industry standards, operating systems, and programming for mobile applications using an OS Software Development Kit (SDK) ",
      moduleHighlights: ['Develop critical thinking skills ',
        'Introduce concepts on making mobile apps for Android and iOS ',
        'Designing, developing, and maintaining new mobile applications ',
        'Android Session Management',
        'Learn programming languages and frameworks'],
      moduleCompetenicies: ['Produce apps for iOS platform devices (iPhone/iPad/iPod Touch) ',
        'Gain a basic understanding of computer architecture and object-oriented programming ',
        'Develop a working knowledge of Apple’s Xcode app development tool ',
        'Explore the physical properties of water ',
        'Understand mobile design principles ',
        'Identify need and opportunity in app markets'],
      moduleLink: "/",
      forId: 3,
      moduleType: "software",
      moduleTarget: "Secondary students, tertiary students and industry professionals",
      modulePeriod: "Trimester – (max. 8 workshops, once a week)",
      moduleTime: "14H00 – 16H30",
      moduleFee: 2000,
      moduleEquipment: "Laptop",
    },
  ];

  // handleModuleSelect = index => {
  //   this.setState({ selectedIndex: index });
  // };


  const scienceModules = [
    {
      moduleImage: enviromentalTechnologyImage,
      moduleName: "Chemistry",
      moduleDescription:
        "Chemistry is a science that studies matter through experimentations. This includes atoms, compounds, chemical reactions, and chemical bonds.",
      moduleHighlights: ['Study the chemistry of materials from non-biological origins.',
        'Learn structure, properties, composition, reactions, and preparation of carbon-containing compounds.',
        'Apply techniques and theories of physics to the study of chemical systems.',
        'Understand chemical processes within and relating to living organisms.'],
      moduleCompetenicies: ['Ability to conduct risk assessments concerning the use of chemical substances and laboratory procedures.',
        'Demonstrate knowledge and understanding of essential facts, concepts, principles and theories relating to chemistry.',
        'Ability to recognise and implement good measurement science and practice.',
        'Capacity to plan, design and execute research projects.',
        'Basic knowledge on Good Laboratory Practice and Quality Assurance'],
      moduleLink: "/science-engineers",
      forId: 1,
      moduleType: "science",
      moduleTarget: "Grade 8 - 12",
      modulePeriod: "3 months - (max 8 workshops, one per week)",
      moduleTime: "14H00 - 16H30",
      moduleFee: 1500,
      moduleEquipment: "Lab instruments",
    },
    {
      moduleImage: Physical_1_Image,
      moduleName: "Physics",
      moduleDescription:
        "Physics is a branch of science concerned with the nature and properties of matter and energy. The subject matter of physics includes mechanics, heat, light and other radiation, sound, electricity, magnetism, and the structure of atoms.",
      moduleHighlights: ['Study of motion when subjected to forces or displacements, and the subsequent effects of the bodies on their environment.',
        'Experimentations of energy concepts.',
        'Learn the set of physical phenomena associated with the presence and motion of matter that has a property of electric charge.',
        'Study the behaviour and properties of light.'],
      moduleCompetenicies: ['Quantitative Skills',
        'Behaviour of Light',
        'Experimental Design and Theory-Building',
        'Forces and Motion',
        'Work, Power, Momentum, and Energy',
        'Rotational Systems',
        'Wave Phenomena',
        'Electrostatics and Magnetism',
        'Quantum Behaviour',
        'Electrical Circuits'],
      moduleLink: "/Botany",
      forId: 2,
      moduleType: "science",
      moduleTarget: "Grade 8 - 12",
      modulePeriod: "3 months - (max 8 workshops, one per week)",
      moduleTime: "14H00 - 16H30",
      moduleFee: 1500,
      moduleEquipment: "Lab instruments",
    },
    {
      moduleImage: BiologyImage,
      moduleName: "Biology",
      moduleDescription:
        "Study living organisms. Divided into many specialized fields that cover their morphology, physiology, anatomy, behaviour, origin, and distribution.",
      moduleHighlights: ['Lab techniques',
        'Understanding the background in human biology.',
        'Study of plants',
        'Learn the relationship between living organisms and their environment.',
        'Studies the structure, function, and behaviour of cells.'],
      moduleCompetenicies: ['Ability to apply the process of science in real life ',
        'Ability to use qualitative and quantitative analysis ',
        'Ability to use modelling and simulation',
        'Ability to tap into the interdisciplinary nature of science',
        'Ability to communicate and collaborate with others',
        'Pave way to  choosing majors in university'],
      moduleLink: "/Plastic",
      forId: 3,
      moduleType: "science",
      moduleTarget: "Grade 8 - 12",
      modulePeriod: "3 months - (max 8 workshops, one per week)",
      moduleTime: "14H00 - 16H30",
      moduleFee: 1500,
      moduleEquipment: "Lab instruments",
    },
  ];


  const moduleCluster = [roboticsModules, electronicsModules, mechatronicsModules, softwareModules, scienceModules];

  return (
    <div>
      <div className="module-main-page">
        <div className="module-page">

          {/* start of actual code      */}

          {moduleCluster[pageID()].map((x, i) => {
            return (
              <input className="modules-input" type="radio" name={x.moduleType} id={x.forId} />
            );
          })}

          <h1>{page}</h1>

          <div className="module-page-label">
            <div className="module-dropdown">

              {/* select options of different module clusters */}
              <select
                className="modules-select"
                name="modules-select"
                id="the-modules-select"
                value={page}
                onChange={handleOnChange} >

                {moduleClusterLinks.map((x, i) => {
                  return (
                    <option value={x.clusterValue} >{x.clusterName}</option>
                  );
                })}
              </select>
              <span className="select-arrow"></span>
            </div>
            {/* names of individul modules */}
            <ul className="label-container">
              {moduleCluster[pageID()].map((x, i) => {
                return (
                  <li className={toggleTabState === x.forId ? "module-tab tabs active-tabs" : "module-tab tabs"}
                    onClick={() => toggleTab(x.forId)}>{x.moduleName}</li>
                );
              })}
            </ul>
          </div>
          <div className="cluster-page-content">

            {moduleCluster[pageID()].map((x, i) => {
              return (
                <div className="center-hrz-modules">
                  <div
                  className={toggleTabState === x.forId ? "module-container content-modules active-content" : "module-container content-modules"}
                >
                  <div className="module-title" data-aos="fade-up">
                    <h1>{x.moduleName}</h1>
                  </div>
                  <div className="module-info">
                    <div className="module-top">
                      <div className="module-desc" data-aos="fade-up">
                        <h2>Module Description</h2>
                        <p>
                          {x.moduleDescription}
                        </p>
                      </div>
                    </div>

                    <div className="center-hrz-modules">
                    <div className="module-mid">
                      <div className="module-image">
                        {/* <figure> */}
                          <img src={x.moduleImage} alt="" data-aos="fade-right"/>
                        {/* </figure> */}
                      </div>

                      <div className="module-points" data-aos="fade-left">
                        <div className="module-3">
                          <div className="module-icon">
                            {/* <HiOutlineUserGroup /> */}
                          </div>
                          <p>
                            <strong style={{fontSize: "18px", color: "#000000"}}>Target Groups</strong>: {x.moduleTarget}
                          </p>
                        </div>
                        <div className="module-3">
                          <div className="module-icon">
                            {/* <FaRegCalendarTimes /> */}
                          </div>
                          <p>
                            <strong style={{fontSize: "18px", color: "#000000"}}>Period</strong>: {x.modulePeriod}
                          </p>
                        </div>
                        <div className="module-3">
                          <div className="module-icon">
                            {/* <BiTimeFive /> */}
                          </div>
                          <p>
                            <strong style={{fontSize: "18px", color: "#000000"}}>Time</strong>: {x.moduleTime}
                          </p>
                        </div>
                        <div className="module-3">
                          <div className="module-icon">
                            {/* <BsFillStarFill color="#ffc500" />{" "}
                            <BsFillStarFill color="#ffc500" /> <BsStar color="#ffc500" /> */}
                          </div>
                          <p>
                            <strong style={{fontSize: "18px", color: "#000000"}}>Module Fee</strong>: N$ {x.moduleFee}
                          </p>
                        </div>
                        <div className="module-3">
                          <div className="module-icon">
                            {/* <FaToolbox /> */}
                          </div>
                          <p>
                            <strong style={{fontSize: "18px", color: "#000000"}}>Equipment</strong>: {x.moduleEquipment}
                          </p>
                        </div>
                        <div className="module-3">
                          <div className="module-icon">
                            {/* <FaToolbox /> */}
                          </div>
                          <p>
                            <strong style={{fontSize: "18px", color: "#000000"}}>{x.modulePrerequisiteHeading}</strong> {x.modulePrerequisite}
                          </p>
                        </div>
                      </div>
                    </div>
                    </div>
                    
                    <h2 data-aos="fade-up" style={{paddingTop: "30px"}}>Highlights and Competencies</h2>
                    <div className="module-bot">
                      <div className="module-highlights" data-aos="fade-right">
                        <h2 style={{marginBottom: "20px", marginTop: "40px"}}>Module Highlights</h2>
                        <ul>
                          {x.moduleHighlights.map((x, i) => {
                            return (
                              <li style={{fontSize: "18px"}}>{x}</li>
                            )
                          })}
                        </ul>
                      </div>
                      <div className="module-competencies" data-aos="fade-left">
                        <h2 style={{marginBottom: "20px", marginTop: "40px"}}>Module Competencies</h2>
                        <ul>
                          {x.moduleCompetenicies.map((x, i) => {
                            return (
                              <li style={{fontSize: "18px"}}>{x}</li>
                            )
                          })}
                        </ul>
                      </div>
                    </div>
                    <div className="module-important">


                    </div>

                  </div>
                </div>
                </div>
                
              );
            })}

            {/* moduleCluster[pageID()].find(y => y.forId ===moduleCluster[pageID()].forId) */}

          </div>
        </div>

      </div>
    </div>
  );
}


