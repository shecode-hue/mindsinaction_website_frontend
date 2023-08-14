import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.png";
import {
  VscThreeBars,
  FaTimes,
  IoIosArrowDown,
} from "react-icons/all";
import "./Header.css";

export default function Header() {



  const elementRef = useRef();
  const elementRef2 = useRef();
  const elementRef3 = useRef();

  const dropdown = (event) => {
    event.preventDefault();
    if (elementRef.current) {
      const element1 = elementRef.current;
      const element2 = elementRef2.current;
      const element3 = elementRef3.current;
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
      element3.classList.remove("show");
      element3.classList.add("dontShow");
    }
  };

  const dropdown2 = (event) => {
    event.preventDefault();
    if (elementRef2.current) {
      const element3 = elementRef3.current
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
      element3.classList.remove("show");
      element3.classList.add("dontShow");
    }
  };

  const dropdown3 = (event) => {
    event.preventDefault();
    if (elementRef3.current) {
      const element3 = elementRef3.current;
      const element2 = elementRef2.current;
      const element1 = elementRef.current;

      // const className = initialClass.trim();

      // Check if the class exists on the element
      if (element3.classList.contains("dontShow")) {
        // If the class exists, remove it
        element3.classList.remove("dontShow");
        element3.classList.add("show");
      } else {
        // If the class doesn't exist, add it
        element3.classList.remove("show");
        element3.classList.add("dontShow");
      }
      element1.classList.remove("show");
      element1.classList.add("dontShow");
      element2.classList.remove("show");
      element2.classList.add("dontShow");
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    elementRef.current.classList.remove("show");
    elementRef.current.classList.add("dontShow");
    elementRef2.current.classList.remove("show");
    elementRef2.current.classList.add("dontShow");
    elementRef3.current.classList.remove("show");
    elementRef3.current.classList.add("dontShow");
  };

  const mobileNavigate = () => {
    setIsOpen(!isOpen);
    elementRef.current.classList.remove("show");
    elementRef.current.classList.add("dontShow");
    elementRef2.current.classList.remove("show");
    elementRef2.current.classList.add("dontShow");
    elementRef3.current.classList.remove("show");
    elementRef3.current.classList.add("dontShow");
  }

  return (
    <>
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
              <NavLink exact to="/profile" activeClassName="active">Who we are <IoIosArrowDown style={{fontSize: "12px"}}/></NavLink>
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
                {/* <NavLink to="/projects"><li>
                  Projects
                </li></NavLink> */}
                <NavLink to="/blog"><li className="last-navlink">
                  Blog
                </li></NavLink>
              </ul>
            </li>
            <li>
              <NavLink
                to={{ pathname: "/module", state: { modData: "robotics" } }}
                activeClassName="active"
              >
                Modules <IoIosArrowDown style={{ fontSize: "12px" }} />
              </NavLink>
              <ul
                ref={elementRef3}
                className="dropdown"
              >
                <NavLink
                  to={{ pathname: "/module", state: { modData: "robotics" } }}
                >
                  <li>Robotics</li>
                </NavLink>
                <NavLink
                  to={{
                    pathname: "/module",
                    state: { modData: "electronics" },
                  }}
                >
                  <li>Electronics</li>
                </NavLink>
                <NavLink
                  to={{
                    pathname: "/module",
                    state: { modData: "mechatronics" },
                  }}
                >
                  <li>Mechatronics</li>
                </NavLink>
                <NavLink
                  to={{ pathname: "/module", state: { modData: "software" } }}
                >
                  <li>Software</li>
                </NavLink>
                <NavLink
                  to={{ pathname: "/module", state: { modData: "science" } }}
                >
                  <li className="last-navlink">Science</li>
                </NavLink>
              </ul>
            </li>
            <li>
              <NavLink exact to="/services" activeClassName="active">Services <IoIosArrowDown style={{fontSize: "12px"}}/></NavLink>
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
                <NavLink to="/electronic-engineering"><li className="last-navlink">
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
            {/* <NavLink exact to="/free-demo">
              <button className="freedemo-button-outer"><div className="freedemo-button-inner">Free Demo</div></button>
            </NavLink> */}
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
              <NavLink onClick={mobileNavigate} exact to="/" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink onClick={dropdown} exact to="/profile" activeClassName="active">
                Who We Are <IoIosArrowDown style={{ fontSize: "12px" }} />
              </NavLink>
              <ul ref={elementRef} onClick={mobileNavigate} className='dropdown-who-we-are dontShow'>
                <NavLink to="/profile"> <li>
                  About Us
                </li></NavLink>
                <NavLink to="/founders"><li>
                  Founders
                </li></NavLink>
                <NavLink to="/Coaches"><li>
                  Coaches
                </li></NavLink>
                {/* <NavLink to="/projects"><li>
                  Projects
                </li></NavLink> */}
                <NavLink to="/blog"><li className="last-navlink">
                  Blog
                </li></NavLink>
              </ul>
            </li>
            <li>
              <NavLink
                onClick={dropdown3}
                to={{ pathname: "/module", state: { modData: "robotics" } }}
                activeClassName="active"
              >
                Modules <IoIosArrowDown style={{ fontSize: "12px" }} />
              </NavLink>
              <ul
                ref={elementRef3}
                onClick={mobileNavigate}
                className="dropdown-modules dontShow"
              >
                <NavLink
                  to={{ pathname: "/module", state: { modData: "robotics" } }}
                >
                  <li>Robotics</li>
                </NavLink>
                <NavLink
                  to={{
                    pathname: "/module",
                    state: { modData: "electronics" },
                  }}
                >
                  <li>Electronics</li>
                </NavLink>
                <NavLink
                  to={{
                    pathname: "/module",
                    state: { modData: "mechatronics" },
                  }}
                >
                  <li>Mechatronics</li>
                </NavLink>
                <NavLink
                  to={{ pathname: "/module", state: { modData: "software" } }}
                >
                  <li>Software</li>
                </NavLink>
                <NavLink
                  to={{ pathname: "/module", state: { modData: "science" } }}
                >
                  <li className="last-navlink">Science</li>
                </NavLink>
              </ul>
            </li>
            <li>
              <NavLink onClick={dropdown2} exact to="/services" activeClassName="active">
                Services <IoIosArrowDown style={{ fontSize: "12px" }} />
              </NavLink>
              <ul ref={elementRef2} onClick={mobileNavigate} className='dropdown-services dontShow'>
                <NavLink to="/ict"><li>
                  ICT
                </li></NavLink>
                <NavLink to="/mechanical-engineering"><li>
                  Mechanical Engineering
                </li></NavLink>
                <NavLink to="/electrical-engineering"><li>
                  Electrical Engineering
                </li></NavLink>
                <NavLink to="/electronic-engineering"><li className="last-navlink">
                  Electronics Engineering
                </li></NavLink>
              </ul>
            </li>
            <li>
              <NavLink onClick={mobileNavigate} exact to="/shop" activeClassName="active">
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink onClick={mobileNavigate} exact to="/Contact-us" activeClassName="active">
                Contact Us
              </NavLink>
            </li>
            {/* <li><a href="#" className="action_btn">Free Demo</a></li> */}
            {/* <span style={{marginRight: "20px"}}></span> */}
            {/* <li><a href="#" className="action_btn">Register</a></li> */}
            {/* <li style={{ display: "block" }}>
              <NavLink exact to="/free-demo">
              <button className="freedemo-button-outer"><div className="freedemo-button-inner">Free Demo</div></button>
            </NavLink></li> */}
            <li style={{ display: "block" }}><NavLink onClick={mobileNavigate} exact to="/register">
              <button className="header-register">Register</button>
            </NavLink></li>
          </ul>
        </div>
      </nav>
    </>
  );
}
