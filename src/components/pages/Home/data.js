import { GiMaterialsScience } from "react-icons/gi";
import { AiOutlineRobot } from "react-icons/ai";
import { VscCircuitBoard } from "react-icons/vsc";
import { BsCode } from "react-icons/bs";
import { RiMicroscopeLine } from "react-icons/ri";

import Slider1 from "../../images/Homepage Slider Images/Image-1.jpg";
import Slider2 from "../../images/Homepage Slider Images/Image-2.jpg";
import Slider3 from "../../images/Homepage Slider Images/Image-3.jpg";
import Slider4 from "../../images/Homepage Slider Images/Image-4.jpg";
import Slider5 from "../../images/Homepage Slider Images/Image-5.jpg";
import Slider6 from "../../images/Homepage Slider Images/Image-6.jpg";

import legoImage1 from "../../images/Home_images/LegoGallery/lego1.jpg";
import legoImage2 from "../../images/Home_images/LegoGallery/lego2.jpg";
import legoImage3 from "../../images/Home_images/LegoGallery/lego3.jpg";

import WhySteam1 from "../../images/Home_images/why-steam-images/why-steam (1).png";
import WhySteam2 from "../../images/Home_images/why-steam-images/why-steam (2).png";
import WhySteam3 from "../../images/Home_images/why-steam-images/why-steam (3).png";
import WhySteam4 from "../../images/Home_images/why-steam-images/why-steam (4).png";
import WhySteam5 from "../../images/Home_images/why-steam-images/why-steam (5).png";
import WhySteam6 from "../../images/Home_images/why-steam-images/why-steam (6).png";
import WhySteam7 from "../../images/Home_images/why-steam-images/why-steam (7).png";
import WhySteam8 from "../../images/Home_images/why-steam-images/why-steam (8).png";

import services1 from "../../images/Home_images/Home-services/icon_Mobile App Dev.svg";
import services2 from "../../images/Home_images/Home-services/icon_Web Dev.svg";
import services3 from "../../images/Home_images/Home-services/icon_Data Center Solutions.svg";
import services4 from "../../images/Home_images/Home-services/icon_3D Printing.svg";

import dundee from "../../images/Home_images/partners/logo_Dundee.png";
import exxon from "../../images/Home_images/partners/logo_Exxon.png";
import goethe from "../../images/Home_images/partners/logo_Goethe.png";
import konrad from "../../images/Home_images/partners/logo_Kronrad.png";
import namSience from "../../images/Home_images/partners/logo_Nam Science.png";
import NCRST from "../../images/Home_images/partners/logo_NCRST.png";
import UNESCO from "../../images/Logo_UNESCO.svg";

import Science from "../../images/Home_images/Home-modules-images/Science.svg";
import Software from "../../images/Home_images/Home-modules-images/Software.svg";
import Mechatronics from "../../images/Home_images/Home-modules-images/Mechatronics.svg";
import Electronics from "../../images/Home_images/Home-modules-images/Electronics.svg";
import Robotics from "../../images/Home_images/Home-modules-images/Robotics.svg";

import sliderArrow from "../../icons/Home-Sider-right.png";


const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
  <img id="slider-arrow-left" src={sliderArrow} alt="prevArrow" {...props} />
);

const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
  <img id="slider-arrow-right" src={sliderArrow} alt="nextArrow" {...props} />
);

//home page top slider

const imageSlide = [
  {
    title: "MINDSINACTION STEAM CENTRE",
    description:
      "A space where students explore Science, Technology, Engineering, Arts and Mathematics through exciting hands-on activities. Additionally, we take pride in offering quality ICT and Engineering Services.",
    button: "View Modules",
    image: Slider1,
  },
  {
    title: "MINDSINACTION STEAM CENTRE",
    description:
      "A space where students explore Science, Technology, Engineering, Arts and Mathematics through exciting hands-on activities. Additionally, we take pride in offering quality ICT and Engineering Services.",
    button: "View Modules",
    image: Slider2,
  },
  {
    title: "MINDSINACTION STEAM CENTRE",
    description:
      "A space where students explore Science, Technology, Engineering, Arts and Mathematics through exciting hands-on activities. Additionally, we take pride in offering quality ICT and Engineering Services.",
    button: "View Modules",
    image: Slider3,
  },
  {
    title: "MINDSINACTION STEAM CENTRE",
    description:
      "A space where students explore Science, Technology, Engineering, Arts and Mathematics through exciting hands-on activities. Additionally, we take pride in offering quality ICT and Engineering Services.",
    button: "View Modules",
    image: Slider4,
  },
  {
    title: "MINDSINACTION STEAM CENTRE",
    description:
      "A space where students explore Science, Technology, Engineering, Arts and Mathematics through exciting hands-on activities. Additionally, we take pride in offering quality ICT and Engineering Services.",
    button: "View Modules",
    image: Slider5,
  },
  {
    title: "MINDSINACTION STEAM CENTRE",
    description:
      "A space where students explore Science, Technology, Engineering, Arts and Mathematics through exciting hands-on activities. Additionally, we take pride in offering quality ICT and Engineering Services.",
    button: "View Modules",
    image: Slider6,
  },
];

// config information for the services
const ServicesInfo = [
  {
    image: services1,
    service_name: "MOBILE APP DEVELOPMENT",
    description:
      "We develop mobile applications for both IOS and Android platforms.",
  },
  {
    image: services3,
    service_name: "WEBSITE DEVELOPMENT",
    description:
      "We develop high-performing, user-friendly, fully functional interactive websites.",
  },
  {
    image: services2,
    service_name: "DATA CENTRE SOLUTIONS",
    description:
      "We help data centers become more safe, resilient and efficient.",
  },

  {
    image: services4,
    service_name: "3D PRINTING",
    description:
      // 'We analyse business, financial, IT systems and conduct assessments of new information systems to identify risks and improve IT-enabled business processes. ',
      "We analyse business, financial, IT systems and conduct assessments of new information systems.",
  },
];
// config information for the services
const ParentsFeedback = [
  {
    parent: "Executive Director, MHETI Dr. Alfred van Kent",
    message:
      "The Ministry of Higher Education, Training and Innovation(MHETI) hereby declares its full support for Mindsinaction",
  },
  {
    parent: "Dr Natascha Cheikhyoussef",
    message:
      "My son Malik Cheikhyoussef is attending the classes and participating with the greatest enthusiasm. The learners learn many skills related to STEM.",
  },
  {
    parent: "Dr. Tanja Karp",
    message:
      "Mindsinaction staff and instructors needs to be congratulated for their professionalism and excellence in guiding the teams throughout the Virtual GEAR competition.",
  },
];

// course card information

const partners = [
  {
    link: "https://www.dundeeprecious.com/English/Operating-Regions/Current-Operations/Tsumeb/Overview/default.aspx",
    image: dundee,
  },
  {
    link: "https://corporate.exxonmobil.com/",
    image: exxon,
  },
  {
    link: "https://www.goethe.de/ins/na/en/ver.cfm?event_id=24619907",
    image: goethe,
  },
  {
    link: "https://www.kas.de/en/",
    image: konrad,
  },

  // {
  //   link: "/",
  //   image: NAMIBIA_coa,
  // },
  {
    link: "https://ncrst.na/",
    image: NCRST,
  },
  {
    link: "https://www.namscience.com/",
    image: namSience,
  },
  {
    link: "https://www.unesco.org/en",
    image: UNESCO,
  },
];

// images for the legoslider
const legoimages = [
  // {
  //   image: lego1,
  // },
  // {
  //   image: lego2,
  // },
  // {
  //   image: lego4,
  // },
  {
    image: legoImage1,
  },
  {
    image: legoImage2,
  },
  {
    image: legoImage3,
  },
];
// parralex info
const textSlide = [
  {
    description:
      "STEAM education encourages students to think critically, solve problems, and apply analytical skills to real-world situations",
  },
  {
    description:
      "By incorporating the arts into traditional STEM subjects, STEAM promotes creativity and imagination",
  },
  {
    description:
      "Students are more likely to pursue further education and seek continuous self-improvement",
  },
  {
    description:
      "Empowering students to be makers and agile problem solvers, able to imagine and create the future.",
  },
];
// information for why-steam cards
const WhySteam = [
  {
    id: 1,
    image: WhySteam1,
    title: "Adaptive Curriculum",
  },
  {
    id: 2,
    image: WhySteam2,
    title: "Team Work",
  },
  {
    id: 3,
    image: WhySteam3,
    title: "Hands on Learning",
  },
  {
    id: 4,
    image: WhySteam4,
    title: "Cutting-Edge Resources",
  },
  {
    id: 5,
    image: WhySteam5,
    title: "Prototyping",
  },
  {
    id: 6,
    image: WhySteam6,
    title: "Research",
  },
  {
    id: 7,
    image: WhySteam7,
    title: "Expert Educators",
  },
  {
    id: 8,
    image: WhySteam8,
    title: "Real-World Relevance",
  },
];
//parents feedback slide configuration

const cards = [
  {
    icon: AiOutlineRobot,
    title: "Robotics",
    description:
      "Students are introduced to the basics of robotics, programming, engineering, problem identification and collaboration.",
    image: Robotics,
    color: "33A85B",
  },
  {
    icon: VscCircuitBoard,
    title: "Electronics",
    description:
      "Students learn how to solder, program electronics parts and circuits, and prototype using microcontrollers.",
    image: Electronics,
    color: "F37021",
  },
  {
    icon: RiMicroscopeLine,
    title: "Mechatronics",
    description:
      "Students will learn a design process that includes a combination of mechanical, electrical and computer engineering.",
    image: Mechatronics,
    color: "FFCD05",
  },
  {
    icon: GiMaterialsScience,
    title: "Science",
    description:
      "Students perform experiments in biology, chemistry and physical science based on the school curriculum.",
    image: Science,
    color: "F05023",
  },
  {
    icon: BsCode,
    title: "Software",
    description:
      "Students are introduced to graphics design through UX/UI, mobile app development and web design.",
    image: Software,
    color: "7965AC",
  },
];

// This variable object will include all of the arrays
const data = {
  Science,
  Software,
  Mechatronics,
  Electronics,
  Robotics,
  SlickArrowLeft,
  SlickArrowRight,
  imageSlide,
  ServicesInfo,
  ParentsFeedback,
  partners,
  legoimages,
  textSlide,
  WhySteam,
  cards,
};

// All of the arrays will be exported at the same time within the data object
export default data;
