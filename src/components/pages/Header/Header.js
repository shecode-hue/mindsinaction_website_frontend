import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.png";
import {
  AiFillHome,
  BsFillInfoSquareFill,
  FaBookReader,
  RiTeamFill,
  FaShoppingCart,
  MdContactPhone,
  VscThreeBars,
  FaTimes,
  FaArrowDown,
  // IoIosArrowDown,
  MdArrowDownward,
  IoIosArrowDown,
} from "react-icons/all";
import "./Header.css";

export default function Header() {
  const [click, setClick] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const handleClick = () => setClick(!click);

  const changeBackground = () => {
    if (window.scrollY >= 60) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const show = useRef(0);
  // const dropdown = () => {
  //   if (classList.contains("none")) {

  //   }
  // }

  const elementRef = useRef();
  const elementRef2 = useRef();

  const dropdown = (event) => {
    event.preventDefault();
    if (elementRef.current) {
      const element1 = elementRef.current;
      const element2 = elementRef2.current;
      // const className = initialClass.trim();

      // Check if the class exists on the element
      if (element1.classList.contains("dontShow")) {
        // If the class exists, remove it
        element1.classList.remove("dontShow");
        element1.classList.add("show");
      } else {
        // If the class doesn't exist, add it
        element1.classList.remove("show");
        element1.classList.add("dontShow");
      }
      element2.classList.remove("show");
      element2.classList.add("dontShow");
    }
  };

  const dropdown2 = (event) => {
    event.preventDefault();
    if (elementRef2.current) {
      const element2 = elementRef2.current;
      const element1 = elementRef.current;

      // const className = initialClass.trim();

      // Check if the class exists on the element
      if (element2.classList.contains("dontShow")) {
        // If the class exists, remove it
        element2.classList.remove("dontShow");
        element2.classList.add("show");
      } else {
        // If the class doesn't exist, add it
        element2.classList.remove("show");
        element2.classList.add("dontShow");
      }
      element1.classList.remove("show");
      element1.classList.add("dontShow");
    }
  };

  return (
    <>
      {/* <nav className={navbar ? "navbar active" : "navbar"}>
        {/* <div className="border"></div> *
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <img src={logo} alt=""></img>
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                <div className="nav-icons">
                  <AiFillHome />
                </div>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/profile"
                // style={{pointerEvents: 'none'}}
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                <div className="nav-icons">
                  <BsFillInfoSquareFill />
                </div>
                Who We Are
                <IoIosArrowDown className="drop-down-nav"/>
                <ul className="about-drop">
                  <li>
                    <NavLink
                      exact
                      to="/profile"
                      activeClassName="active"
                      className="nav-links"
                      onClick={handleClick}
                    >
                      About us
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      exact
                      to="/founders"
                      activeClassName="active"
                      className="nav-links"
                      onClick={handleClick}
                    >
                      Founders
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      exact
                      to="/Coaches"
                      activeClassName="active"
                      className="nav-links"
                      onClick={handleClick}
                    >
                      Coaches
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      exact
                      to="/projects"
                      activeClassName="active"
                      className="nav-links"
                      onClick={handleClick}
                    >
                      projects
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      exact
                      to="/blog"
                      activeClassName="active"
                      className="nav-links"
                      onClick={handleClick}
                    >
                      Blog
                    </NavLink>
                  </li>
                </ul>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/modules"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                <div className="nav-icons">
                  <FaBookReader />
                </div>
                Modules
                <IoIosArrowDown className="drop-down-nav" />
                <ul>
                 
                  <li>
                    <NavLink
                      exact
                      to={{
                        pathname: "/module",
                        state: {modData: "robotics"}  
                      }}
                      activeClassName="active"
                      className="nav-links"
                      onClick={handleClick}
                    >
                      Robotics
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      exact
                      to={{
                        pathname: "/module",
                        state: {modData: "electronics"}  
                      }}
                      activeClassName="active"
                      className="nav-links"
                      onClick={handleClick}
                    >
                      Electronics
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      exact
                      to={{
                        pathname: "/module",
                        state: {modData: "mechatronics"}  
                      }}
                      activeClassName="active"
                      className="nav-links"
                      onClick={handleClick}
                    >
                      Mechatronics
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      exact
                      to={{
                        pathname: "/module",
                        state: {modData: "software"}  
                      }}
                      activeClassName="active"
                      className="nav-links"
                      onClick={handleClick}
                    >
                      Software
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      exact
                      to={{
                        pathname: "/module",
                        state: {modData: "science"}  
                      }}
                      activeClassName="active"
                      className="nav-links"
                      onClick={handleClick}
                    >
                      Science Lab
                    </NavLink>
                  </li>
                </ul>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/services"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                <div className="nav-icons">
                  <RiTeamFill />
                </div>
                Services
                <IoIosArrowDown className="drop-down-nav"/>
                <ul className="about-drop">
                  <li>
                    <NavLink
                      exact
                      to="/ict"
                      activeClassName="active"
                      className="nav-links"
                      onClick={handleClick}
                    >
                      ICT
                    </NavLink>
                  </li>

                  {/* <li>
                    <NavLink
                      exact
                      to="/engineering"
                      activeClassName="active"
                      className="nav-links"
                      onClick={handleClick}
                    >
                      Engineering
                    </NavLink>
                  </li> *
                  <li>
                    <NavLink
                      exact
                      to="/mechanical-engineering"
                      activeClassName="active"
                      className="nav-links"
                      onClick={handleClick}
                    >
                      Mechanical Engineering
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      exact
                      to="/electrical-engineering"
                      activeClassName="active"
                      className="nav-links"
                      onClick={handleClick}
                    >
                      Electrical Engineering
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      exact
                      to="/electronic-engineering"
                      activeClassName="active"
                      className="nav-links"
                      onClick={handleClick}
                    >
                      Electronics Engineering
                    </NavLink>
                  </li>
                </ul>
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink
                exact
                to="/Register"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                <div className="nav-icons">
                  <FaRegIdCard />
                </div>
                Register
              </NavLink>
            </li> *
            <li className="nav-item">
              <NavLink
                exact
                to="/Shop"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                <div className="nav-icons">
                  <FaShoppingCart />
                </div>
                Shop
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Contact-us"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                <div className="nav-icons">
                  <MdContactPhone />
                </div>
                Contact Us
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink
                exact
                to="/search"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                <BsSearch />
                <div className="header-search">Search</div>
              </NavLink>
            </li> *
          </ul>
          <div className="header-right-buttons">
            <button className="freedemo-button-outer"><div className="freedemo-button-inner">Free Demo</div></button>
            <button className="header-register">Register</button>
          </div>
          <div className="nav-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <VscThreeBars />}
          </div>
        </div>
      </nav> */}
      <nav>
        <div className="navbar">
          {/* <div className="logo"><a href="#">Web Dev Creative</a></div> */}
          <NavLink exact to="/" className="nav-logo">
            <img src={logo} alt=""></img>
          </NavLink>
          <ul className={`links ${isOpen ? 'open' : ''}`}>

            <li>
              <NavLink exact to="/" activeClassName="active">Home</NavLink>
            </li>

            <li>
              <NavLink exact to="/about" activeClassName="active">Who we are <IoIosArrowDown /></NavLink> 
              <ul className='dropdown'>
                <NavLink to="/profile"><li>
                  About Us
                </li></NavLink>
                <NavLink to="/founders"><li>
                  Founders
                </li></NavLink>
                <NavLink to="/Coaches"><li>
                  Coaches
                </li></NavLink>
                <NavLink to="/projects"><li>
                  Projects
                </li></NavLink>
                <NavLink to="/blog"><li>
                  Blog
                </li></NavLink>
              </ul>
            </li>

            <li>
              <NavLink exact to="/modules" activeClassName="active">Modules</NavLink>
            </li>
            <li>
              <NavLink exact to="/services" activeClassName="active">Services <IoIosArrowDown /></NavLink>
              <ul className='dropdown'>
                <NavLink to="/ict"><li>
                  ICT
                </li></NavLink>
                <NavLink to="/mechanical-engineering"><li>
                  Mechanical Engineering
                </li></NavLink>
                <NavLink to="/electrical-engineering"><li>
                  Electrical Engineering
                </li></NavLink>
                <NavLink to="/electronic-engineering"><li>
                  Electronics Engineering
                </li></NavLink>
              </ul>
            </li>

            <li>
              <NavLink exact to="/Shop" activeClassName="active">
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/Contact-us" activeClassName="active">
                Contact Us
              </NavLink>
            </li>
          </ul>

          {/* <div> */}
          {/* <a href="#" className="action_btn1">Free Demo</a>
            <span style={{ marginRight: "20px" }}></span>
            <a href="#" className="action_btn2">Register</a> */}
          <div className="header-right-buttons">
            <NavLink exact to="/free-demo">
              <button className="freedemo-button-outer"><div className="freedemo-button-inner">Free Demo</div></button>
            </NavLink>
            <NavLink exact to="/register">
              <button className="header-register">Register</button>
            </NavLink>

          </div>
          {/* </div> */}

          <div className="toggle_btn" onClick={toggleMenu}>
            {isOpen ? <FaTimes id="icon" /> : <VscThreeBars id="icon" />}
          </div>
        </div>
        <div
          className={`${isOpen ? 'mobile-navbar' : 'none'}`}
        // className="mobile-navbar open"
        >
          <ul>
            <li>
              <NavLink exact to="/" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink onClick={dropdown} exact to="/profile" activeClassName="active">
                Who We Are <IoIosArrowDown />
              </NavLink>
              <ul ref={elementRef} className='dropdown-who-we-are dontShow'>
                <NavLink to="/profile"> <li>
                  About Us
                </li></NavLink>
                <NavLink to="/founders"><li>
                  Founders
                </li></NavLink>
                <NavLink to="/Coaches"><li>
                  Coaches
                </li></NavLink>
                <NavLink to="/projects"><li>
                  Projects
                </li></NavLink>
                <NavLink to="/blog"><li>
                  Blog
                </li></NavLink>
              </ul>
            </li>
            <li>
              <NavLink exact to="/modules" activeClassName="active">
                Modules
              </NavLink>
            </li>
            <li>
              <NavLink onClick={dropdown2} exact to="/services" activeClassName="active">
                Services <IoIosArrowDown />
              </NavLink>
              <ul ref={elementRef2} className='dropdown-services dontShow'>
                <NavLink to="/ict"><li>
                  ICT
                </li></NavLink>
                <NavLink to="/mechanical-engineering"><li>
                  Mechanical Engineering
                </li></NavLink>
                <NavLink to="/electrical-engineering"><li>
                  Electrical Engineering
                </li></NavLink>
                <NavLink to="/electronic-engineering"><li>
                  Electronics Engineering
                </li></NavLink>
              </ul>
            </li>
            <li>
              <NavLink exact to="/shop" activeClassName="active">
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/contact" activeClassName="active">
                Contact Us
              </NavLink>
            </li>
            {/* <li><a href="#" className="action_btn">Free Demo</a></li> */}
            {/* <span style={{marginRight: "20px"}}></span> */}
            {/* <li><a href="#" className="action_btn">Register</a></li> */}
            <li style={{ display: "block" }}><NavLink exact to="/free-demo">
              <button className="freedemo-button-outer"><div className="freedemo-button-inner">Free Demo</div></button>
            </NavLink></li>
            <li style={{ display: "block" }}><NavLink exact to="/register">
              <button className="header-register">Register</button>
            </NavLink></li>
          </ul>
        </div>
      </nav>
    </>
  );
}
