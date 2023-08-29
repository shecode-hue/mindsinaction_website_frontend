import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { IoCalendarOutline } from "react-icons/io5";
import "./module.css";
import "../courses/RoboticsProgramming/RoboticsProgramming.css";
import "../courses/SteamEducationWorks/SteamEducationWorks.css";
import scratchProgramming from "../../../images/course-images/scratchProgramming.jpg";
import introRobotics from "../../../images/course-images/Module_Robotics.jpg";
// import steamEducationImage from "../../../images/course-images/steam-education-works.png";
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

// import cnc from "../../../images/course-images/cnc/cnc.jpg";

// import dprinting from "../../../images/course-images/dprinting.jpg"

// software
// import WebDevelopment from "../courses/WebDevelopment/WebDevelopment";
import dev from "../../../images/course-images/dev.jpg";

import mobileAppDevelopment from "../../../images/course-images/mobileAppDevelopment.jpg";

import graphics from "../../../images/course-images/graphics.jpg";

// science

import enviromentalTechnologyImage from "../../../images/course-images/science.jpg";
// import Physical_1_Image from "../../../images/course-images/physical-1.jpg";
// import BiologyImage from "../../../images/course-images/biology-1.jpg";

export default function Module() {
  // Set selected Module cluster start
  let location = useLocation();
  let defaultSelect = () => {
    const NavSelected = location.state.modData;

    if (NavSelected == null) {
      return "robotics";
    } else {
      return NavSelected;
    }
  };

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
    setPage(selectedCluster);
  };

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
        "This module is designed to introduce students to the world of robotics using Wonder Workshop’s Dash robot. Students will explore the different functionalities of the Dash, the blockly programming language, and how to command Dash in different settings. By the end of the module, students have a solid understanding of the Dash robot and are able to program it to perform various tasks. ",
      moduleOutlineTitle: "Module Outline",
      moduleHighlights: [
        "Introduction to Dash Drive and Look Commands",
        "Customize Dash eye pattern",
        "Program Dash to make sounds",
        "Animate Dash by using various commands e.g. dance, greet, race and expression",
        "Utilize the ultrasonic sensor on Dash to detect obstacles",
        "Utilize the sound sensor on Dash to start a program",
        "Create delays between commands",
        "Create loops",
        "Use variables to determine driving distances",
        "Use variables to perform logical operations",
        "Use functions to simplify code",
        "Use drive and turn commands to complete the maze",
        "Use variables to complete the maze",
      ],
      moduleCompetenicies: [
        "Understand the functionalities of the Dash robot and how to use it in various settings",
        "Learn basic programming languages for Dash, such as Blockly, WonderApp",
        "Develop problem-solving skills",
        "Develop teamwork and collaboration skills",
      ],
      moduleLink: "https://www.makewonder.com/robots/dash/",
      forId: 1,
      moduleAssesment:
        "Students will demonstrate their understanding of the Dash robot and programming concepts through a series of weekly practical activities, such as navigating mazes, completing challenges, and creating interactive stories using the Blockly programming language. The final lesson will culminate in a project where students showcase their ability to program Dash to perform a complex task or solve a real-world problem.",
      moduleType: "robotics",
      moduleTarget: "Grade 6 – 12",
      modulePeriod: "Trimester – (8 weeks, 2.5 hours per week)",
      moduleTime: "14H00 – 16H30",
      moduleFee: 1600,
      moduleDelivery: "hands-on projects in 8 workshops.",
      moduleColor: "#4EC6E1",
    },
    {
      moduleImage: scratchProgramming,
      moduleName: "Lego Robotics",
      moduleDescription:
        "This module provides an introduction to robotics using the Lego Robotics Kit. Students learn the fundamentals of robotics, including design, construction, programming, and problem-solving, through a hands-on experience. Module 1, cover basic the principles of robot design, programming concepts, incorporating sensors, and motors. ",
        moduleOutlineTitle: "Module Outline",
        moduleHighlights: [
        "Overview of robotics and its applications",
        "Introduction to the Lego Robotics platform",
        "Basics of robot design and construction",
        "Introduction to programming concepts using a block-based programming language",
        "Control structures, loops, and conditionals",
        "Programming robots for basic movements and tasks",
        "Understanding and utilizing various sensors (light, touch, ultrasonic, etc.)",
        "Controlling motors for robot movement and manipulation",
        "Integrating sensors and actuators to create interactive robots",
        "Design principles for efficient and effective robots",
        "Iterative design process for improving robot performance",
        "Strategies for problem-solving and troubleshooting in robotics",
        "Engaging in robot challenges and competitions",
        "Presenting and demonstrating robot projects to the class",
      ],
      moduleCompetenicies: [
        "Understand the principles and components of robotics",
        "Use the Lego Robotics platform to build and program robots",
        "Apply problem-solving skills to design and optimize robot performance",
        "Demonstrate an understanding of basic programming concepts and their application in robotics",
      ],
      moduleLink:
        "https://education.lego.com/en-us/downloads/spike-app/software",
      forId: 2,
      moduleAssesment:
        "Module 1 is assessed through weekly tasks, missions and a final project. Students are required to complete a final project that demonstrates their understanding of the Lego Robotics and its programming capabilities. The project will be evaluated based on creativity, functionality, and complexity.",
      moduleType: "robotics",
      moduleTarget: "Grade 8+",
      modulePeriod: "Trimester – (8 weeks, 2.5 hours per week)",
      moduleTime: "14H00 – 16H30",
      moduleFee: 1600,
      moduleDelivery: "hands-on projects in 8 workshops",
      moduleColor: "#4EC6E1",
    },
    // {
    //   moduleImage: steamEducationImage,
    //   moduleName: "Lego Robotics_Sprike Prime",
    //   moduleDescription:
    //     "This module provide an authentic learning experience to cultivate practical competencies in STEAM.",
    //   moduleHighlights: [
    //     "Explore lights, sounds",
    //     "Concepts of coding",
    //     "Get to know dash sensors",
    //     "Playful movements",
    //     "Imagine and create",
    //   ],
    //   moduleCompetenicies: [
    //     "Control dash lights and sounds",
    //     "Create logical instructions for Dash to execute",
    //     "Engage dash sensors",
    //     "Code Dash movements at will",
    //     "Do more with Dash Robots",
    //   ],
    //   moduleLink: "/STEAM-Education-Works",
    //   forId: 3,
    //   moduleType: "robotics",
    //   moduleTarget: "Grade 8+",
    //   modulePeriod: "Trimester – (max. 8 workshops, once a week)",
    //   moduleTime: "14H00 – 16H30",
    //   moduleFee: 1500,
    //   moduleDelivery: "Spike Prime & Laptop",
    //   moduleColor: "#4EC6E1",
    // },
  ];

  const electronicsModules = [
    {
      moduleImage: raspberry,
      moduleName: "Kitten",
      moduleDescription:
        "This module is designed for students who have completed module 1, with the aim to reinforce their graphical coding skills. Kitten is a beginner-friendly programming language designed for students 8+. Through the use of the Kitten Editor, students learn how to create and manipulate code blocks to develop animations, games, apps, music and solve programming challenges. Students gain a solid understanding of basic programming concepts and be able to create complex programs using the Kitten language.",
        moduleOutlineTitle: "Module Outline",
        moduleHighlights: [
        "Interface: Familiarizing with the Kitten Editor Interface",
        "Coding blocks: Understanding the coding blocks available in Kitten Editor",
        "Sequencing: Learning how to sequence code blocks to create a program",
        "Coordinate system: Understanding how to use the coordinate system to position objects in the program",
        "Angles: Understanding how to use angles to rotate objects in the program",
        "Animate your own characters",
        "Movement: Learning how to create movement for characters by adjusting their speed and direction",
        "Sound: Understanding how to use sounds to enhance the program",
        "Facial expressions: Learning how to use facial expressions to display emotions and expressions for characters",
        "Interaction: Understanding how to create interactions between objects and characters",
        "Personalization: Learning how to personalize characters using different colors, shapes, and accessories.",
        "Pong game",
        "Logic: Understanding how to use logic to create the game rules",
        "Variables: Learning how to use variables to keep track of the game score",
        "Functions: Understanding how to use functions to create reusable code for the game elements",
        "Lunch Order Machine App",
        "Variables: Learning how to use variables to store and retrieve data",
        "User input: Understanding how to get user input using Kitten Editor",
        "Conditional statements: Understanding how to use conditional statements to create the menu selection and display",
        "Data structures: Learning how to use data structures to store questions and answers",
        "Randomization: Understanding how to randomize questions for the quiz",
        "Loops: Understanding how to use loops to iterate through questions and answers",
        "Photo album",
        "Sprites: Understanding how to use sprites to create a photo album",
        "Special effects: Learning how to use special effects like rain and snow",
        "Loops: Understanding how to use loops to display multiple photos in the album",
        "Design a calculator",
        "User interface: Understanding how to design a user interface for the calculator",
        "Arithmetic operations: Learning how to use arithmetic operations like addition, subtraction, multiplication, and division",
        "Program the calculator",
        "Functions: Understanding how to use functions to create reusable code for the calculator operations",
        "User input: Learning how to get user input for the calculator operations",
        "Conditional statements: Understanding how to use conditional statements to perform different operations based on user input.",
      ],
      moduleCompetenicies: [
        "Understand the basic concepts of programming such as sequencing, conditional statements, loops and variables.",
        "Use Kitten Editor to create simple animations, games, quizzes, and other interactive projects.",
        "Understand how to use coding blocks in Kitten Editor to program movement, sound, facial expressions, and interactions.",
        "Develop problem-solving and critical thinking skills by identifying and fixing errors in their programs.",
        "Develop creativity and self-expression by personalizing their projects with different colors, shapes, and accessories",
      ],
      moduleLink: "https://kitten4.codemao.cn/",
      forId: 1,
      moduleAssesment:
        "Module 2 is assessed through weekly tasks, missions and a final project. Students will demonstrate their proficiency in programming concepts and their ability to create interactive projects using the Kitten language through a series of practical activities. They will be assessed based on their ability to apply sequencing, conditional statements, loops, and variables to create animations, games, quizzes, and other interactive projects using the Kitten Editor. Additionally, students will showcase their problem-solving skills by identifying and fixing errors in their programs. The final lesson will involve a project where students showcase their creativity by personalizing their projects with different colors, shapes, and accessories, highlighting their self-expression and mastery of the Kitten programming language.",
      moduleType: "electronics",
      moduleTarget: "Grade 6+",
      modulePeriod: "Trimester – (8 weeks, 2.5 hours per week)",
      moduleTime: "14H00 – 16H30",
      moduleFee: 1600,
      moduleDelivery: "hands-on projects in 8 workshops",
      moduleColor: "#F9A32C",
    },
    {
      moduleImage: VeroBoardImage,
      moduleName: "Twin Science Education ",
      moduleDescription:
        "The Twin Science Education Kit is a comprehensive and modular electronics system that provides an engaging and hands-on learning experience for students aged 9 +. This module offers robotics and coding curriculum, allowing students to explore the principles of science, technology, engineering, arts, and mathematics (STEAM). Throughout the course, students will learn how to code using the block-based coding to bring Twin Science models to life. In addition to learning about STEAM concepts, the Twin Science Education Kit places a strong emphasis on social awareness, responsible decision making, and the collective well-being of society. By the end of the course, students will have gained valuable 21st-century skills and be well-prepared to tackle the challenges of the future.",
        moduleOutlineTitle: "Module Outline",
        moduleHighlights: [
        "Properties of Light",
        "Light travels faster than sound",
        "Difference between transparent, opaque, and translucent objects",
        "Describing Motion ",
        "Relationship between average speed, distance, and time",
        "Representation of a journey on a distance-time graph",
        "Concept of relative motion",
        "Resultant Forces",
        "Observation of different forces acting on an object",
        "Drawing force diagrams",
        "Maximum and minimum resultant force applied",
        "Electricity",
        "Basic electrical circuit symbols",
        "Relationship between voltage, current, and resistance",
        "Programming Basics – inputs & outputs",
        "Understanding input and output modules in the Twin Science Kit",
        "Using input and output modules to control output modules",
        "Developing physical products to solve problems",
        "Conditions",
        "Using conditional statements to solve problems that require logic",
        "Designing machines using 'if then els' statements",
        "Understanding simple Boolean logic and its uses in circuits and programming",
        "While Loop & For Loop",
        "Building loop structures using logic",
        "Understanding the different types of loops and their uses",
        "Creating programs that include sequences, events, loops, and conditionals",
        "Data Types & Variables",
        "Understanding the difference between data types",
        "Storing values in computational devices and using variables to hold information",
        "Creating programs that use variables to store and modify data",
      ],
      moduleCompetenicies: [
        "Demonstrate an understanding of the properties of light, including its speed and direction of travel, and the differences between transparent, opaque, and translucent objects.",
        "Calculate and interpret average speed, distance, and time using relevant formulas, and represent journeys on a distance-time graph.",
        "Explain the concept of relative motion and apply it to different scenarios involving moving objects.",
        "Observe and identify the different forces acting on an object and draw force diagrams to represent them.",
        "Understand the relationship between the direction and magnitude of forces and their resultant force on an object.",
        "Use basic electrical circuit symbols to draw electrical schematics and demonstrate an understanding of the relationship between voltage, current, and resistance.",
        "Decompose (break down) problems into smaller, manageable sub-problems to facilitate the program development process",
        "Create programs that include sequences, events, loops, and conditionals",
        "Choose appropriate inputs and outputs based on the models",
        "Generate and compare multiple possible solutions to a problem based on each is likely to meet the criteria and constraints of the problem",
        "Define a simple design problem reflecting a need or want that includes specified criteria for success and constraints on materials, time or cost",
        "Understand how physical changes are represented as numerical values",
      ],
      moduleLink: "https://www.twinscience.com/en/",
      forId: 4,
      moduleAssesment:
        "Through weekly tasks, missions and a final project, students will demonstrate their understanding of STEAM concepts and their ability to apply them in real-world scenarios using the Twin Science Education Kit. The final lesson will involve a project where students define a simple design problem, apply their knowledge and skills to develop a solution, and present their findings, reflecting their comprehension of both STEAM concepts and the use of numerical values to represent physical changes.",
      moduleType: "electronics",
      moduleTarget: "Grade 8 to Professionals",
      modulePeriod: "Trimester – (8 weeks, 2.5 hours per week)",
      moduleTime: "14H00 – 16H30",
      moduleFee: 1600,
      moduleDelivery: "hands-on projects in 8 workshops",
      moduleColor: "#F9A32C",
    },
    {
      moduleImage: breadBoardImage,
      moduleName: "Introduction to Electronics & Arduino Programming ",
      moduleDescription:
        "This course is designed to introduce learners to the world of Arduino programming. The course will cover the basics of programming, electronics, and how to use the Arduino software and hardware to create fun projects. The course will be hands-on, with lots of opportunities for students to experiment and create their own projects.",
        moduleOutlineTitle: "Module Outline",
        moduleHighlights: [
        "Introduction to Arduino",
        "Introduction to electrical properties and concepts",
        "Introduction to Arduino hardware and software",
        "Setting up the Arduino software",
        "Blinking an LED ",
        "Ohm’s Law, Potentiometer, and Conditional statements",
        "Understand the relationship between voltage, current, and resistance.",
        "Learn how to calculate voltage, current, and resistance using Ohm's Law",
        "Understand how a potentiometer works and how to use it.",
        "Learn how to write conditional statements in programming.",
        "If-Else Statements, For Loops, and Push Buttons",
        "Understand the basic structure of if-else statements and how they can be used in programming.",
        "Learn how for loops work and how they can be used to repeat code.",
        "Understand how to use push buttons to control circuits.",
        "Ultrasonic Sensor, If/Else Statements, Serial Monitor, Analog & Digital Inputs",
        "Understand the basic working of Ultrasonic Sensor and how it can be used in distance measurement.",
        "Learn how If/Else Statements work and how to use them to make decisions in programming.",
        "Understand how to use Serial Monitor to debug code and display data.",
        "Servo Motor, Libraries, and Functions",
        "Understand the basic working of Servo Motor and how it can be used in controlling movement.",
        "Learn how Libraries work and how to use them to access pre-written code.",
        "Understand how to create and use Functions to simplify and organize code.",
        "Temperature & Humidity Sensor, and LCD Display",
        "Understand the basic working of Temperature & Humidity Sensor and how it can be used in environmental monitoring.",
        "Learn how to use LCD Display to display data.",
        "RFID Module, Security Access using MFRC522 RFID Reader",
        "Understand the basic working of RFID technology and how it can be used in security access systems.",
        "Learn how to use MFRC522 RFID Reader to read RFID tags.",
        "Understand how to use RFID Module and MFRC522 RFID Reader together to create a security access system.",
        "Relay Module",
        "Understand the basic working of Relay Module and how it can be used to control high-voltage electrical devices.",
        "Learn how to connect Relay Module with Arduino and control it using code.",
        "Understand how to add other sensors, such as a temperature or humidity sensor, to the circuit.",
        "Learn how to use the sensors to control the light bulb in a project.",
      ],
      moduleCompetenicies: [
        "Proficiency in programming microcontrollers through the utilization of Arduino software and writing code in the C++ programming language.",
        "Understanding of fundamental electronic circuits and the capability to design and construct simple circuits employing breadboards, resistors, capacitors, and LEDs.",
        "Familiarity with diverse input-output peripherals, including buttons, switches, potentiometers, and sensors, and the ability to incorporate them into projects effectively.",
        "Comprehension of various sensor technologies such as ultrasonic, temperature, humidity, and motion sensors, and the ability to employ them for data collection and analysis purposes.",
        "Knowledge about different types of motors and actuators like servo motors, DC motors, and stepper motors, and the skill to control them using Arduino.",
        "Proficiency in conceptualizing and constructing DIY (do-it-yourself) projects utilizing Arduino, integrating multiple components and sensors into a coherent project.",
        "Aptitude for troubleshooting programming and electronic circuit issues, as well as identifying and resolving bugs in both code and hardware.",
      ],
      moduleLink: "https://www.arduino.cc/",
      forId: 2,
      moduleAssesment:
        "Learners will demonstrate their proficiency in Arduino programming and electronics through practical hands-on activities and project-based assessments. They will be assessed on their ability to write and debug C++ code using the Arduino software, design and construct electronic circuits using breadboards and components, integrate input-output peripherals and sensors into their projects effectively, employ sensor technologies for data collection and analysis, control motors and actuators using Arduino, and conceptualize and construct DIY projects by integrating multiple components and sensors. The final assessment will involve the presentation of a self-designed Arduino project, showcasing the learner's ability to apply their knowledge and skills in a practical and creative manner.",
      moduleType: "electronics",
      moduleTarget: "Grade 8+",
      modulePeriod: "Trimester – (8 weeks, 2.5 hours per week)",
      moduleTime: "14H00 – 16H30",
      moduleFee: 1600,
      moduleDelivery: "hands-on projects in 8 workshops.",
      modulePrerequisiteHeading: "Prerequisite:",
      modulePrerequisite: "Module 1 – Introduction to Robotics and programming",
      moduleColor: "#F9A32C",
    },
    {
      moduleImage: VeroBoardImage,
      moduleName: "Circuits & Soldering ",
      moduleDescription:
        "The Circuits and soldering module is designed to provide students who completed module and are at least 12+ years of age, with the fundamental knowledge and practical skills required for soldering in the field of electronics. Soldering is an essential skill for anyone interested in prototyping project ideas and working with electronic components. This course will guide students through the process of soldering, from basic techniques to advanced applications, while emphasizing the importance of practice to achieve mastery.",
        moduleOutlineTitle: "Module Outline",
        moduleHighlights: [
        "Soldering vocabulary ",
        "Preparing the soldering iron ",
        "Soldering projects",
        "Introduction to Circuits & Soldering",
        "Course Overview and objectives",
        "Importance of circuits and soldering in various machines ",
        "Basic concepts electricity and circuits",
        "Introduction soldering and its applications",
        "Tools equipment overview",
        "Practical – Simple flashing LED circuit using transistors",
        "Soldering Techniques & Equipment",
        "Understanding soldering irons, solder and flux",
        "Proper solder joint preparation",
        "Soldering through-hole components",
        "Inspecting and evaluation soldered joints",
        "Practical -  Model traffic light using 555 timer IC",
        "Circuit Diagram Interpretation and Analysis",
        "Understanding circuit diagrams and symbols",
        "Identifying different types of circuits (series, parallel, combination)",
        "Analyzing circuit components and their functions",
        "Troubleshooting common circuit issues",
        "Using multi-meters for circuit testing and measurement",
        "Practical – Light sensor and darkness sensor using LDR  and transistor",
        "Circuit Interpretation and Soldering",
        "Reading and understanding circuit diagrams",
        "Identifying and soldering electronic components based on circuit diagrams",
        "Practice projects involving circuit interpretation and soldering",
        "Practical - Police Lights Themed Flashing LED Circuit Using 555 IC",
        "Desoldering and Component Replacements",
        "Techniques for removing soldered components",
        "Desoldering tools and their usage",
        "Replacing faulty components",
        "Ensuring proper connections after component replacement",
        "Developing Soldering Skills",
        "Importance of practice in soldering mastery",
        "Efficient soldering techniques and tips",
        "Practicing soldering exercises and projects",
        "Feedback and improvement strategies",
        "Practical – DC Voltage Doubler using 555 timer IC",
        "Advanced Soldering Techniques and Troubleshooting",
        "Advanced soldering techniques",
        "Troubleshooting soldering issues",
        "Techniques for rework and repair",
        "Hands-on practice and troubleshooting exercises",
        "Practical – Door Bell",
        "Project-based Application of Soldering Skills",
        "Project overview and requirements",
        "Components selection and preparation",
        "Circuit assembly and soldering",
        "Testing and troubleshooting",
        "Documentation and presentation",
      ],
      moduleCompetenicies: [
        "Understand the principles of soldering and its importance in electronics.",
        "Identify and select appropriate soldering tools and equipment.",
        "Demonstrate proper soldering techniques for through-hole components.",
        "Practice safe soldering practices to prevent damage to components and personal injury.",
        "Troubleshoot common soldering issues and make necessary repairs.",
        "Apply soldering techniques for surface-mount components.",
        "Interpret circuit diagrams and solder electronic components accordingly.",
        "Utilize de-soldering techniques to remove and replace components when necessary.",
        "Employ good workmanship and attention to detail while soldering.",
        "Develop efficient soldering skills through continuous practice and improvement",
      ],
      moduleLink: "",
      forId: 3,
      moduleAssesment:
        "Learners will demonstrate their understanding and practical skills in soldering through a combination of theoretical and hands-on assessments. Assessments will include practical soldering exercises where learners showcase their soldering proficiency by successfully completing soldering tasks and producing high-quality solder joints. The final assessment will evaluate the learner's overall soldering skills, efficiency, and attention to detail through a complex soldering project that incorporates multiple components and requires precision soldering techniques.",
      moduleType: "electronics",
      moduleTarget: "Grade 8+",
      modulePeriod: "Trimester – (8 weeks, 2.5 hours per week)",
      moduleTime: "14H00 – 16H30",
      moduleFee: 2500,
      moduleDelivery: "hands-on projects in 8 workshops",
      moduleColor: "#F9A32C",
    },
  ];

  const mechatronicsModules = [
    {
      moduleImage: tinkerCadImage,
      moduleName: "3D Printing",
      moduleDescription:
        "This course is designed for students who are interested in learning the basics of 3D printing. Students will learn about the various types of 3D printers, how they work, and how to design and create 3D models using basic software tools. By the end of the course, students will have the knowledge and skills to create simple 3D printed objects.",
        moduleOutlineTitle: "Module Outline",
        moduleHighlights: [
        "3D Printing Basics",
        "Define what 3D printing is. ",
        "4 steps of 3D printing",
        "How to complete the first step",
        "Design on TinkerCAD",
        "Slicing",
        "Learn the Parameters that comes with slicing.",
        "Slice and Print Preview the Keychain",
        "Print the Keychain on Printer",
        "Functional Whistle",
        "Processing ",
        "Designing a functional Whistle",
        "Designing with a Purpose",
        "o	Designing a Balloon Powered Dragster",
        "Newtons 3rd Law",
        "Factors that stop the Dragster from moving",
        "Parameters to consider when designing your dragster.",
        "Lego Piece Onshape",
        "Using Onshape to design",
        "Understand what dimensions are in depth.",
        "Learning how to draw a Lego piece.",
        "Functional Wrench",
        "Learn what Nuts and bolts are and what they do.",
        "Learn how they work.",
        "Learn they are used.",
        "Learn what tool is used to loosen and tighten them.",
        "Self - Expression ",
        "Learn the need for 3D Printing. ",
        "Learn what 3D printing cannot do.",
        "Use what you have learned so far to make your own prototype.",
      ],
      moduleCompetenicies: [
        "Confidently describe the 3D Printing process in detail ",
        "Administer the 3D printing process by themselves.",
        "Understand that core principles behind designing.Demonstrate the Extruded Base, Boss, and Cut features ",
        "Use TinkerCad or Onshape to design 3D printed parts.",
        "Should be able to operate the 3D printers by themselves.",
      ],
      moduleLink: "https://www.onshape.com/en/",
      forId: 1,
      moduleAssesment:
        "Learners will demonstrate their understanding and practical skills in 3D printing through a combination of theoretical knowledge assessments and hands-on activities. Assessments will include theoretical quizzes to evaluate their knowledge of the 3D printing process, as well as practical exercises where learners showcase their ability to design and create simple 3D printed objects. The final assessment will involve the successful completion of a complex 3D printing project that incorporates advanced design techniques and demonstrates the learner's proficiency in operating the 3D printers.",
      moduleType: "mechatronics",
      moduleTarget: "grade 8 to professionals",
      modulePeriod: "Trimester – (8 weeks, 2.5 hours per week)",
      moduleTime: "14H00 – 16H30",
      moduleFee: 2500,
      moduleDelivery: "hands-on projects in 8 workshops",
      moduleColor: "#32B069",
    },
    {
      moduleImage: mecha,
      moduleName: "Machine Tooling",
      moduleDescription:
        "The Machine Tooling- Woodworking course is designed for students aged 12+, it provides students with the opportunity to assemble and operate various machines, including wood turning, sawing, and sanding machines. Through this hands-on experience, students can develop specialized skills and explore potential career paths in areas such as carpentry, furniture making, and cabinetry. Additionally, this course allows students to express their creativity by creating.",
        moduleOutlineTitle: "Module Outline",
        moduleHighlights: [
        "-	Principles of Wood Turning",
        "•	Learn what Wood turning means",
        "•	Learn what the 2 kinds of wood turning used",
        "•	Learn the maintenance of the wood lathe machine",
        "•	Learn the safety measures when working with the lathe machine",
        "•	Learn the Major parts of a wood lathe machine",
        "-	Creating your own Keychain",
        "•	Complete the assembly of the wood lathe machine",
        "•	Understand the different Parts of the wood lathe Machines in detail",
        "•	Create your own Keychain using the wood lathe machine",
        "-	The Candle Holder",
        "•	Learn what a candle holder is",
        "•	Learn why candle holders are important ",
        "•	Learn the types of candle holders",
        "•	Learn different types of wood and which are suitable for the class",
        "-	The Spinning Top",
        "•	Learn what a spinning top is",
        "•	Learn the most important parts of a spinning top",
        "•	Learn the parameters one has to consider when making a spinning top",
        "-	Principles of the Jig Saw",
        "•	Learn what sawing means",
        "•	Learn the safety measures when working with the Jig Saw",
        "•	Learn how the workplace should look like",
        "•	Learn the types of saws that can be used",
        "•	Learn what the materials can be used for sawing ",
        "•	Learn the maintenance of the wood lathe machine",
        "•	Learn the Major parts of a wood lathe machine",
        "-	Creating A Rhino",
        "•	Complete the assembly of the jig saw machine",
        "•	Understand the different Parts of the jig saw machine in detail",
        "•	Create the rhino using the jig saw machine",
        "-	The Sanding Machine",
        "•	Understand what sanding is",
        "•	Complete the assembly of the jig saw machine",
        "•	Understand the different Parts of the Sanding Machine in detail",
        "•	Sand the Rhino down",
        "-	Self-Expression",
        "•	Create/make an object using the skills you learned that can solve a problem in your community",
      ],
      moduleCompetenicies: [
        "Confidently assemble the 3 machines without the help of the coach",
        "Administer the woodworking by themselves, under the supervision of the coachify various sensors: optical, magnetic and inductive, and their uses ",
        "Understand that core principles behind machine tooling",
        "Create aesthetically pleasing and operational designs using the machines",
      ],
      moduleLink: "https://edu.thecooltool.com/technical-education",
      forId: 2,
      moduleAssesment:
        "Learners will demonstrate their proficiency in machine tooling and woodworking through a combination of practical assessments and project-based activities. Assessments will include practical exercises where learners showcase their skills in operating the machines safely and effectively, as well as project-based assessments where they design and create woodworking projects that demonstrate their understanding of machine tooling principles and their ability to create functional and visually appealing designs. The final assessment will involve the presentation and evaluation of a complex woodworking project, which highlights the learner's mastery of machine tooling skills, creativity, and attention to detail.",
      moduleType: "mechatronics",
      moduleTarget: "grade 8 to professionals",
      modulePeriod: "Trimester – (8 weeks, 2.5 hours per week)",
      moduleTime: "14H00 – 16H30",
      moduleFee: 2500,
      moduleDelivery: "hands-on projects in 8 workshops",
      moduleColor: "#32B069",
    },
    // {
    //   moduleImage: cnc,
    //   moduleName: "CNC Programming with SolidWorks CAM",
    //   moduleDescription:
    //     "Learners in this course are introduced to CNC Programming with SolidWorks CAM through a series of fun filled programmes..",
    //   moduleHighlights: [
    //     "Computer Aided Design ",
    //     "3D Printing ",
    //     "Engineering design process",
    //     "Materials ",
    //     "Design Thinking",
    //   ],
    //   moduleCompetenicies: [
    //     "Identify 2D and 3D modelling concepts ",
    //     "Navigate CAD software ",
    //     "Demonstrate the Extruded Base, Boss, and Cut features ",
    //     "Select the best materials for products ",
    //     "Create 3D models ",
    //     "Apply the engineering process",
    //   ],
    //   moduleLink: "/",
    //   forId: 3,
    //   moduleType: "mechatronics",
    //   moduleTarget:
    //     "Secondary students, tertiary students and industry professionals",
    //   modulePeriod: "Trimester – (max. 8 workshops, once a week)",
    //   moduleTime: "14H00 – 16H30",
    //   moduleFee: 2000,
    //   moduleDelivery: "Found at Mindsinaction",
    //   moduleColor: "#32B069",
    // },
  ];

  const softwareModules = [
    {
      moduleImage: graphics,
      moduleName: "Graphic Design",
      moduleDescription:
        "Graphic design is a form of visual communication that is diverse and constantly reformulating practice that uses a wide range of technical processes to engage with audiences. The graphic design course introduces you to a range of working methods, practices and techniques.",
        moduleOutlineTitle: "Module Outline",
        moduleHighlights: [
        "Fundamentals of Design ",
        "Visualisation Techniques ",
        "Craft Design Studies ",
        "Design Process & Thinking",
        "Design & Layout",
      ],
      moduleCompetenicies: [
        "Edit and process photos and images ",
        "Craft multi-dimensional visuals ",
        "Design and Layout content ",
        "Understand the processes of visual creation ",
        "Think creatively using design methods ",
        "Competent in creating multimedia content",
      ],
      moduleLink: "/",
      forId: 1,
      moduleType: "software",
      moduleTarget:
        "Secondary students, tertiary students and industry professionals",
      modulePeriod: "Trimester – (max. 8 workshops, once a week)",
      moduleTime: "14H00 – 16H30",
      moduleFee: 2000,
      moduleDelivery: "hands-on projects in 8 workshops",
      moduleColor: "#8fd81e",
    },
    {
      moduleImage: dev,
      moduleName: "Web Development",
      moduleDescription:
        "A Web Designing course belongs to the field of Computer Science and IT. It enables students to learn various techniques, tools and programming languages in order to create and maintain web pages. ",
      moduleHighlights: [
        "Web development fundamentals ",
        "Learn key programming languages for web development ",
        "Build projects to develop you web developer skills ",
        "Foundational knowledge of JavaScript and object-oriented programming ",
        "Understand core concepts around data and learn how to manage databases ",
      ],
      moduleCompetenicies: [
        "Strong computer literacy ",
        "Strong numeracy skill ",
        "Strong creative ability ",
        "Attention to detail ",
        "Strong communication skills ",
        "The ability to explain technical matters clearly ",
      ],
      moduleLink: "/",
      forId: 2,
      moduleType: "software",
      moduleTarget:
        "Secondary students, tertiary students and industry professionals",
      modulePeriod: "Trimester – (max. 8 workshops, once a week)",
      moduleTime: "14H00 – 16H30",
      moduleFee: 2000,
      moduleDelivery: "hands-on projects in 8 workshops. ",
      moduleColor: "#8fd81e",
    },
    {
      moduleImage: mobileAppDevelopment,
      moduleName: "Mobile App Development",
      moduleDescription:
        "This module introduces students to programming technologies, design and development related to mobile applications. Topics include accessing device capabilities, industry standards, operating systems, and programming for mobile applications using an OS Software Development Kit (SDK) ",
      moduleHighlights: [
        "Develop critical thinking skills ",
        "Introduce concepts on making mobile apps for Android and iOS ",
        "Designing, developing, and maintaining new mobile applications ",
        "Android Session Management",
        "Learn programming languages and frameworks",
      ],
      moduleCompetenicies: [
        "Produce apps for iOS platform devices (iPhone/iPad/iPod Touch) ",
        "Gain a basic understanding of computer architecture and object-oriented programming ",
        "Develop a working knowledge of Apple’s Xcode app development tool ",
        "Explore the physical properties of water ",
        "Understand mobile design principles ",
        "Identify need and opportunity in app markets",
      ],
      moduleLink: "/",
      forId: 3,
      moduleType: "software",
      moduleTarget:
        "Secondary students, tertiary students and industry professionals",
      modulePeriod: "Trimester – (max. 8 workshops, once a week)",
      moduleTime: "14H00 – 16H30",
      moduleFee: 2000,
      moduleDelivery: "hands-on projects in 8 workshops. ",
      moduleColor: "#8fd81e",
    },
  ];

  // handleModuleSelect = index => {
  //   this.setState({ selectedIndex: index });
  // };

  const scienceModules = [
    {
      moduleImage: enviromentalTechnologyImage,
      moduleName: "Natural Science",
      moduleDescription:
        "The Natural Science module is designed to ignite curiosity and foster and deep appreciation for the marvels of the natural world among students in grades 4-7.  Through hands on exploration, scientific inquiry, and engaging activities, students will embark on a captivating journey to discover the principles, phenomena and interconnections that shape our environment and contribute to our understanding of the natural sciences.",
        moduleOutlineTitle: "",
        moduleHighlights: [],
      moduleCompetenicies: [
        "Scientific Literacy: Demonstrate an understanding of key scientific concepts, principles, and vocabulary related to various STEAM disciplines, enabling effective communication and comprehension of scientific information.",
        "Problem-Solving Skills: Apply critical thinking and problem-solving strategies to investigate and analyze STEAM-related challenges, employing scientific methods and creative thinking to propose innovative solutions.",
        "Experimental Design and Data Analysis: Design and conduct experiments using appropriate scientific methods, collect and interpret data accurately, and employ various tools and techniques to analyze experimental results.",
        "Interdisciplinary Connections: Recognize and articulate the interconnectedness between scientific knowledge and other fields of study, integrating cross-disciplinary approaches to address complex real-world issues.",
        "Collaboration and Communication: Engage in effective teamwork, demonstrating the ability to collaborate with peers, exchange ideas, and communicate scientific concepts and findings using appropriate terminology and multimedia tools.",
      ],
      // moduleLink: "/science-engineers",
      forId: 1,
      moduleAssesment:
        "Learners will demonstrate their understanding and proficiency in natural science through a combination of assessments that emphasize scientific literacy, problem-solving skills, experimental design, data analysis, interdisciplinary connections, collaboration, and communication. Assessments may include written assignments, experimental reports, presentations, and group projects that require learners to apply their knowledge and skills to address real-world issues and showcase their scientific literacy and abilities. The final assessment will encompass a comprehensive project where learners demonstrate their interdisciplinary understanding, problem-solving skills, and effective communication in exploring and presenting a topic related to the natural sciences.",
      moduleType: "science",
      moduleTarget: "Grade 8 - 12",
      modulePeriod: "3 months - (8 weeks, 2.5 hours per week)",
      moduleTime: "14H00 - 16H30",
      moduleFee: 2500,
      moduleDelivery: "hands-on projects in 8 workshops",
      moduleColor: "#716CAF",
    },
    // {
    //   moduleImage: Physical_1_Image,
    //   moduleName: "Physics",
    //   moduleDescription:
    //     "Physics is a branch of science concerned with the nature and properties of matter and energy. The subject matter of physics includes mechanics, heat, light and other radiation, sound, electricity, magnetism, and the structure of atoms.",
    //   moduleHighlights: [
    //     "Study of motion when subjected to forces or displacements, and the subsequent effects of the bodies on their environment.",
    //     "Experimentations of energy concepts.",
    //     "Learn the set of physical phenomena associated with the presence and motion of matter that has a property of electric charge.",
    //     "Study the behaviour and properties of light.",
    //   ],
    //   moduleCompetenicies: [
    //     "Quantitative Skills",
    //     "Behaviour of Light",
    //     "Experimental Design and Theory-Building",
    //     "Forces and Motion",
    //     "Work, Power, Momentum, and Energy",
    //     "Rotational Systems",
    //     "Wave Phenomena",
    //     "Electrostatics and Magnetism",
    //     "Quantum Behaviour",
    //     "Electrical Circuits",
    //   ],
    //   moduleLink: "/Botany",
    //   forId: 2,
    //   moduleType: "science",
    //   moduleTarget: "Grade 8 - 12",
    //   modulePeriod: "3 months - (max 8 workshops, one per week)",
    //   moduleTime: "14H00 - 16H30",
    //   moduleFee: 1500,
    //   moduleDelivery: "Lab instruments",
    //   moduleColor: "#716CAF",
    // },
    // {
    //   moduleImage: BiologyImage,
    //   moduleName: "Biology",
    //   moduleDescription:
    //     "Study living organisms. Divided into many specialized fields that cover their morphology, physiology, anatomy, behaviour, origin, and distribution.",
    //   moduleHighlights: [
    //     "Lab techniques",
    //     "Understanding the background in human biology.",
    //     "Study of plants",
    //     "Learn the relationship between living organisms and their environment.",
    //     "Studies the structure, function, and behaviour of cells.",
    //   ],
    //   moduleCompetenicies: [
    //     "Ability to apply the process of science in real life ",
    //     "Ability to use qualitative and quantitative analysis ",
    //     "Ability to use modelling and simulation",
    //     "Ability to tap into the interdisciplinary nature of science",
    //     "Ability to communicate and collaborate with others",
    //     "Pave way to  choosing majors in university",
    //   ],
    //   moduleLink: "/Plastic",
    //   forId: 3,
    //   moduleType: "science",
    //   moduleTarget: "Grade 8 - 12",
    //   modulePeriod: "3 months - (max 8 workshops, one per week)",
    //   moduleTime: "14H00 - 16H30",
    //   moduleFee: 1500,
    //   moduleDelivery: "Lab instruments",
    //   moduleColor: "#716CAF",
    // },
  ];

  const moduleCluster = [
    roboticsModules,
    electronicsModules,
    mechatronicsModules,
    softwareModules,
    scienceModules,
  ];

  return (
    <div>
      <div className="module-main-page">
        <div className="module-page">
          {/* start of actual code      */}

          {moduleCluster[pageID()].map((x, i) => {
            return (
              <input
                className="modules-input"
                type="radio"
                name={x.moduleType}
                id={x.forId}
              />
            );
          })}

          <h1 className="pageTitle">{page}</h1>

          <div className="module-page-label">
            <div className="module-dropdown">
              {/* select options of different module clusters */}
              <select
                className="modules-select"
                name="modules-select"
                id="the-modules-select"
                value={page}
                onChange={handleOnChange}
                style={{
                  backgroundColor:
                    moduleCluster[pageID()].find(
                      (x) => x.forId === toggleTabState
                    )?.moduleColor || "#8fd81e",
                }}
              >
                {moduleClusterLinks.map((x, i) => {
                  return (
                    <option
                      value={x.clusterValue}
                      style={{ color: x.moduleColor }}
                    >
                      {x.clusterName}
                    </option>
                  );
                })}
              </select>
              <span
                className="select-arrow"
                style={{
                  backgroundColor:
                    moduleCluster[pageID()].find(
                      (x) => x.forId === toggleTabState
                    )?.moduleColor || "#8fd81e",
                }}
              ></span>
            </div>
            {/* names of individul modules */}
            <ul className="label-container">
              {moduleCluster[pageID()].map((x, i) => {
                return (
                  <li
                    className={
                      toggleTabState === x.forId
                        ? "module-tab tabs active-tabs"
                        : "module-tab tabs"
                    }
                    onClick={() => toggleTab(x.forId)}
                  >
                    {x.moduleName}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="cluster-page-content">
            {moduleCluster[pageID()].map((x, i) => {
              return (
                <div className="center-hrz-modules">
                  <div
                    className={
                      toggleTabState === x.forId
                        ? "module-container content-modules active-content"
                        : "module-container content-modules"
                    }
                  >
                    <div className="Modules-Intro-Card">
                      <div
                        className="module-image"
                        style={{
                          height: "350px !important",
                          // border: "3px dotted red",
                          // borderRadius:"50px 0px 0px 50px",
                          backgroundImage: `url(${x.moduleImage})`,
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "center",
                          backgroundSize: "cover",
                          // zIndex:"1000",
                        }}
                      >
                        {/* <img src={x.moduleImage} alt="" data-aos="fade-right"/> */}
                      </div>
                      <div className="Modules-Intro-Card-right">
                        <div className="module-title">
                          <h1 style={{ color: x.moduleColor }}>
                            {x.moduleName}
                          </h1>
                        </div>
                        <div
                          className="udertitle_div"
                          style={{
                            backgroundColor: x.moduleColor,
                          }}
                        >
                          <div className="undertitle_div_left">
                            <div className="module-icon">
                              <BiUserCircle
                                style={{
                                  fontSize: "35px",
                                  color: "#ffffff",
                                  marginTop: "15%",
                                  marginRight: "10px",
                                }}
                              />
                            </div>
                            <div className="module-3">
                              <p>
                                <div>Target Groups</div>
                                <div>
                                  {" "}
                                  <strong
                                    style={{
                                      fontSize: "18px",
                                      color: "#ffffff",
                                    }}
                                  >
                                    {x.moduleTarget}{" "}
                                  </strong>
                                </div>
                              </p>
                            </div>
                          </div>
                          <div className="undertitle_div_left">
                            <div className="module-icon">
                              <IoCalendarOutline
                                style={{
                                  fontSize: "35px",
                                  marginTop: "15%",
                                  color: "#ffffff",
                                  marginRight: "10px",
                                }}
                              />
                            </div>
                            <div className="module-3">
                              <p>
                                <div>Period Trimester</div>
                                <div>
                                  {" "}
                                  <strong
                                    style={{
                                      fontSize: "18px",
                                      color: "#ffffff",
                                    }}
                                  >
                                    {x.modulePeriod}{" "}
                                  </strong>
                                </div>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="module-desc" data-aos="fade-up">
                          <h2>About this Module</h2>
                          <p>{x.moduleDescription}</p>
                        </div>
                        <div className="intro-bottom">
                          <div className="module-3 ">
                            <div className="module-icon">
                              {/* <BiTimeFive /> */}
                            </div>
                            <p>
                              <strong
                                style={{
                                  fontSize: "18px",
                                  color: x.moduleColor,
                                }}
                              >
                                Time
                              </strong>
                              {x.moduleTime}
                            </p>
                          </div>
                          <div class="vl"></div>
                          <div className="module-3">
                            <div className="module-icon">
                              {/* <BsFillStarFill color="#ffc500" />{" "}
                            <BsFillStarFill color="#ffc500" /> <BsStar color="#ffc500" /> */}
                            </div>
                            <p>
                              <strong
                                style={{
                                  fontSize: "18px",
                                  color: x.moduleColor,
                                }}
                              >
                                Module Fee
                              </strong>
                              N$ {x.moduleFee}
                            </p>
                          </div>
                          <div class="vl"></div>
                          <div className="module-3">
                            <div className="module-icon">
                              {/* <FaToolbox /> */}
                            </div>
                            <p>
                              <strong
                                style={{
                                  fontSize: "18px",
                                  color: x.moduleColor,
                                }}
                              >
                                Module Delivery:
                              </strong>
                              {x.moduleDelivery}
                            </p>
                          </div>
                          <div class="vl"></div>
                        </div>
                      </div>
                    </div>

                    <div className="module-info">
                      <div className="module-top"></div>

                      <div className="center-hrz-modules">
                        <div className="module-mid">
                          <div className="module-points" data-aos="fade-left">
                            <div className="module-3">
                              <div className="module-icon">
                                {/* <FaToolbox /> */}
                              </div>
                              <p>
                                <strong
                                  style={{ fontSize: "18px", color: "#000000" }}
                                >
                                  {x.modulePrerequisiteHeading}
                                </strong>{" "}
                                {x.modulePrerequisite}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <h2
                        className="module-highlights-and-competencies"
                        data-aos="fade-up"
                        style={{ paddingTop: "30px" }}
                      >
                        Outline and Competencies
                      </h2>
                      <div className="module-bot">
                      <div
                          className="module-competencies"
                          data-aos="fade-left"
                        >
                          <h2
                            style={{ marginBottom: "20px", marginTop: "40px" }}
                          >
                            Module Competencies
                          </h2>
                          <ul>
                            {x.moduleCompetenicies.map((x, i) => {
                              return <li style={{ fontSize: "18px" }}>{x}</li>;
                            })}
                          </ul>
                        </div>
                        <div
                          className="module-highlights"
                          data-aos="fade-right"
                        >
                          <h2
                            style={{ marginBottom: "20px", marginTop: "40px" }}
                          >
                            {x.moduleOutlineTitle}
                          </h2>
                          <ul>
                            {x.moduleHighlights.map((x, i) => {
                              return <li style={{ fontSize: "18px" }}>{x}</li>;
                            })}
                          </ul>
                        </div>
                      </div>
                      <div className="module-desc" data-aos="fade-up">
                        <h2>Assessment</h2>
                        <p id="moduleAssesment">{x.moduleAssesment}</p>
                      </div>
                      <div className="module-desc" data-aos="fade-up">
                        <h2>Additional resources</h2>
                        <p id="moduleAssessment">
                          <a id="moduleAssessment" href={x.moduleLink}>
                            {x.moduleLink}
                          </a>
                        </p>
                      </div>
                      <div className="Bottom_register_button">
                        <NavLink exact to="/register">
                          <button
                            style={{
                              backgroundColor: x.moduleColor,
                            }}
                          >
                            Register Now
                          </button>
                        </NavLink>
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
