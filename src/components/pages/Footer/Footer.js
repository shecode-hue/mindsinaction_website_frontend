import React from 'react';
import {
  AiTwotonePhone,
  ImLocation2,
  MdEmail,
  BiArrowToRight,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  SiTiktok,
} from 'react-icons/all';
import './Footer.css';
// import Facebook from "../../icons/Social_Facebook.svg";
// import Insagram from "../../icons/Social_Instagram.svg";
// import LinkedIn from "../../icons/Social_LinkedIn.svg";
// import TikTok from "../../icons/Social_TikTok.svg";
import { NavLink } from 'react-router-dom';
import logo from "../../images/logo.png";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    // <footer>
    //   {/**Footer main container */}
    //   <div className="footer-content-main">

    //     {/**Copyright container */}
    //     <div className="footer-left-side">
    //       <h4>Stay updated on STEAM education updates & ICT/Engineering services!</h4>
    //       <div className="input-container">
    //         <input type="text" className="curved-input" placeholder="Your Email" />
    //           <button className="subscribe-button" >Subscribe</button>
    //       </div>
    //       <diV className="footer-social-mediaIcons">
    //         <a href="https://example.com">
    //           <img src={Facebook} alt="Facebook" />
    //         </a>
    //         <a href="https://example.com">
    //           <img src={LinkedIn} alt="LinkedIn" />
    //         </a>
    //         <a href="https://example.com">
    //           <img src={TikTok} alt="TikTok" />
    //         </a>
    //         <a href="https://example.com">
    //           <img src={Insagram} alt="Insagram" />
    //         </a></diV>
    //     </div>
    //     <div className="fotter-right-side">
    //       <div className="footer-details">
    //         <div className="footer-details-about-section">
    //           <h4>About</h4>
    //           <div className="footer-link">
    //             <NavLink
    //               exact
    //               to="/profile"
    //               activeClassName="active"
    //               className="footer-links"
    //             >
    //               Our Story
    //             </NavLink>
    //           </div>
    //           <div className="footer-link">
    //             <NavLink
    //               exact
    //               to="/profile"
    //               activeClassName="active"
    //               className="footer-links"
    //             >
    //               Modules
    //             </NavLink>
    //           </div>
    //           <div className="footer-link">
    //             <NavLink
    //               exact
    //               to="/profile"
    //               activeClassName="active"
    //               className="footer-links"
    //             >
    //               Blog
    //             </NavLink>
    //           </div>
    //           <div className="footer-link">
    //             <NavLink
    //               exact
    //               to="/profile"
    //               activeClassName="active"
    //               className="footer-links"
    //             >
    //               FAQs
    //             </NavLink>
    //           </div>
    //         </div>
    //         <div className="footer-details-services-section">
    //           <h4>Services</h4>
    //           <div className="footer-link">
    //             <NavLink
    //               exact
    //               to="/profile"
    //               activeClassName="active"
    //               className="footer-links"
    //             >
    //               ICT Services
    //             </NavLink>
    //           </div>
    //           <div className="footer-link">
    //             <NavLink
    //               exact
    //               to="/profile"
    //               activeClassName="active"
    //               className="footer-links"
    //             >
    //               Engineering Services
    //             </NavLink>
    //           </div>
    //           <div className="footer-link">
    //             <NavLink
    //               exact
    //               to="/profile"
    //               activeClassName="active"
    //               className="footer-links"
    //             >
    //               Electronics Shop
    //             </NavLink>
    //           </div>
    //         </div>
    //         <div className="footer-details-contact-section">
    //           <div className="cont-info">
    //             <span><MdEmail size='1.5rem' color={'#94c93d'} /><p>admin@mindsinaction.com.na</p></span>
    //           </div>
    //           <div className="cont-info">
    //             <span> <AiTwotonePhone size='1.5rem' color={'#94c93d'} /><p>Tel: +264 81 363 0529</p></span>
    //           </div>
    //           <div className="cont-info">
    //             <span> <ImLocation2 size='70px' color={'#94c93d'} /><p>6 Andimba Toivo-ya-Toivo No.6, Suiderhof,Windhoek, Huster Machinetool building, First Floor</p></span>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="copyright">
    //         <hr />
    //         <p>
    //           &copy;{year} Mindsinaction – All rights reserved.{' '}
    //           <span>Developed by Mindsinaction</span>
    //         </p>
    //       </div>
    //     </div>

    //   </div>
    // </footer>

    <div id='body'>
      <footer>
        <div className='row'>
          <div className='col'>
            <img src={logo} className="logo" alt="logo" />
            <p style={{ color: "#fff" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div className='col'>
            <h3>Office <div className='underline'><span></span></div></h3>
            <p style={{ color: "#fff" }}>ITPL Road</p>
            <p style={{ color: "#fff" }}>Whitefield, Bangalore</p>
            <p style={{ color: "#fff" }}>Karnataka, PIN 560066, India</p>
            <p className='email-id'>avinashdm@outlook.com</p>
            <h4 style={{ color: "#fff" }}>+264 - 812648975</h4>
          </div>
          <div className='col'>
            <h3>Links <div className='underline'><span></span></div></h3>
            <ul>
              <li><a href='#'>Home</a></li>
              <li><a href='#'>Services</a></li>
              <li><a href='#'>About Us</a></li>
              <li><a href='#'>Features</a></li>
              <li><a href='#'>Contacts</a></li>
            </ul>
          </div>
          <div className='col'>
            <h3>Newsletter <div className='underline'><span></span></div></h3>
            <form>
              <MdEmail />
              <input type='email' placeholder='Enter your email id' required />
              <button type='submit'><BiArrowToRight /></button>
            </form>
            <div className='social-icons'>
              <FaFacebook className="fab"/>
              <FaInstagram className="fab"/>
              <FaLinkedin className="fab"/>
              <SiTiktok className="fab"/>
            </div>
          </div>
        </div>
        <hr />
        <p className='copyright'>&copy;{year} Mindsinaction - All rights reserved.{' '}
          {/* <span>Developed by Mindsinaction</span> */}
        </p>
      </footer>
    </div>

  );
}
