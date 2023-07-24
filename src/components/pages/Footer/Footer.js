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
  ImFacebook,
  RiFacebookBoxFill,
  RiLinkedinBoxFill,
  IoLogoTiktok,
  RiInstagramLine,
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
    //         <NavLink to="https://example.com">
    //           <img src={Facebook} alt="Facebook" />
    //         </NavLink>
    //         <NavLink to="https://example.com">
    //           <img src={LinkedIn} alt="LinkedIn" />
    //         </NavLink>
    //         <NavLink to="https://example.com">
    //           <img src={TikTok} alt="TikTok" />
    //         </NavLink>
    //         <NavLink to="https://example.com">
    //           <img src={Insagram} alt="Insagram" />
    //         </NavLink></diV>
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
    //             <span> <NavLinkiTwotonePhone size='1.5rem' color={'#94c93d'} /><p>Tel: +264 81 363 0529</p></span>
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
          {/* <div className='col'>
            <img src={logo} className="logo" alt="logo" />
            <p style={{ color: "#fff" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div> */}
          <div className='col'>
            <h2 id='newsletter-header' className='desktop'>Stay updated on STEAM education updates <br />& ICT / Engineering services!</h2>
            <h2 id='newsletter-header' className='mobile'>Stay updated on STEAM education updates & ICT / Engineering services!</h2>
            <form id='newsletter-form'>
              <input type='email' placeholder='Your email' required />
              <button type='submit'>Subscribe!</button>
            </form>
            <div className='social-icons'>
              <RiFacebookBoxFill className="fab" />
              <RiLinkedinBoxFill className="fab" />
              <SiTiktok className="fab" />
              <RiInstagramLine className="fab" />
            </div>
          </div>
          <div className='col'>
            <h3>About</h3>
            <ul>
              <li><NavLink to='#'>Our Story</NavLink></li>
              <li><NavLink to='#'>Modules</NavLink></li>
              <li><NavLink to='#'>Blog</NavLink></li>
              <li><NavLink to='#'>F.A.Qs</NavLink></li>
            </ul>
          </div>
          <div className='col'>
            <h3>Services</h3>
            <ul>
              <li><NavLink to='#'>ICT Services</NavLink></li>
              <li><NavLink to='#'>Engineering Services</NavLink></li>
              <li><NavLink to='#'>Electronic Shop</NavLink></li>
            </ul>
          </div>
          <div className='col'>
            <h3>Office</h3>
            <div>
              <MdEmail style={{ fontSize: "16px", color: "#6fb73f", marginRight: "10px" }} /><p style={{ color: "#fff", display: "inline-block" }}>admin@mindsinaction.com.na</p>
            </div>
            <div>
              <AiTwotonePhone style={{ fontSize: "16px", color: "#6fb73f", marginRight: "10px" }} /><p style={{ color: "#fff", display: "inline-block" }}>+264 81 363 0529</p>
            </div>
            <ImLocation2 style={{ fontSize: "16px", color: "#6fb73f", marginRight: "10px", marginBottom: "35px" }} /><p style={{ color: "#fff", display: "inline-block" }}>Toivo ya Toivo No.6. Suiderhof,<br />Windhoek, Huster Machinetool<br />building First Floor</p>
          </div>
        </div>
        <hr />
        <p className='copyright'>&copy;{year} Mindsinaction - All rights reserved. Developed by Mindsinaction</p>
      </footer>
    </div>

  );
}
