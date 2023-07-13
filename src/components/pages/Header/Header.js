import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.png";
import {
  IoIosArrowDown,
  AiFillHome,
  BsFillInfoSquareFill,
  FaBookReader,
  RiTeamFill,
  FaShoppingCart,
  MdContactPhone,
  VscThreeBars,
  FaTimes,
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

  return (
    <>
      <nav className={navbar ? "navbar active" : "navbar"}>
        {/* <div className="border"></div> */}
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
                  </li> */}
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
            </li> */}
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
            </li> */}
          </ul>
          <div className="header-right-buttons">
            <button className="freedemo-button-outer"><div className="freedemo-button-inner">Free Demo</div></button>
            <button className="header-register">Register</button>
          </div>
          <div className="nav-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <VscThreeBars />}
          </div>
        </div>
      </nav>
    </>
  );
}