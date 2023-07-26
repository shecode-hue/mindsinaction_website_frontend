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
  RiTwitterFill,
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
    <div id='body'>
      <footer>
        <div className='row'>
          {/* <div className='col'>
            <img src={logo} className="logo" alt="logo" />
            <p style={{ color: "#fff" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div> */}
          <div className='col'>
            {/* <h3>Office</h3> */}
            <h2>Office</h2>
            <div>
              <MdEmail style={{ fontSize: "16px", color: "#94C93D", marginRight: "10px" }} /><p style={{ color: "#fff", display: "inline-block" }}>admin@mindsinaction.com.na</p>
            </div>
            <div>
              <AiTwotonePhone style={{ fontSize: "16px", color: "#94C93D", marginRight: "10px" }} /><p style={{ color: "#fff", display: "inline-block" }}>+264 81 363 0529</p>
            </div>
            <ImLocation2 style={{ fontSize: "16px", color: "#94C93D", marginRight: "10px", marginBottom: "35px" }} /><p style={{ color: "#fff", display: "inline-block" }}>Toivo ya Toivo No.6. Suiderhof,<br />Windhoek, Huster Machinetool<br />building First Floor</p>
          </div>
          <div className='col'>
            {/* <h3>About</h3> */}
            <h2>About</h2>
            <ul className='footer-list'>
              <li><NavLink to='/profile'>Our Story</NavLink></li>
              <li><NavLink to='/modules'>Modules</NavLink></li>
              <li><NavLink to='/blog'>Blog</NavLink></li>
              {/* <li><NavLink to='/'>F.A.Qs</NavLink></li> */}
            </ul>
          </div>
          <div className='col'>
            {/* <h3>Services</h3> */}
            <h2>Services</h2>
            <ul className='footer-list'>
              <li><NavLink to='/ict'>ICT Services</NavLink></li>
              <li><NavLink to='/'>Engineering Services</NavLink></li>
              <li><NavLink to='/Shop'>Electronic Shop</NavLink></li>
            </ul>
          </div>
          <div className='col'>
            <h2>Follow us on</h2>
            {/* <h2 id='newsletter-header' className='desktop'>Stay updated on STEAM education updates <br />& ICT / Engineering services!</h2>
            <h2 id='newsletter-header' className='mobile'>Stay updated on STEAM education updates & ICT / Engineering services!</h2>
            <form id='newsletter-form'>
              <input type='email' placeholder='Your email' required />
              <button type='submit'>Subscribe!</button>
            </form> */}
            <div className='social-icons'>
              <a href='https://www.facebook.com/search/top?q=mindsinaction' target='_blank'>
                <RiFacebookBoxFill className="fab" />
              </a>
              <a href='https://twitter.com/Minds_In_Action' target='_blank'>
                <RiTwitterFill className="fab" />
              </a>
              {/* <a href='https://www.facebook.com/search/top?q=mindsinaction' target='_blank'>
                <RiLinkedinBoxFill className="fab" />
              </a> */}
              <a href='https://www.tiktok.com/@mindsinaction?_t=8co12SVnpHp&_r=1' target='_blank'>
                <SiTiktok className="fab" />
              </a>
              <a href='https://www.instagram.com/minds_in_action/' target='_blank'>
                <RiInstagramLine className="fab" />
              </a>
            </div>
          </div>
        </div>
        <hr />
        <p className='copyright'>&copy;{year} Mindsinaction - All rights reserved. Developed by Mindsinaction</p>
      </footer>
    </div>

  );
}
