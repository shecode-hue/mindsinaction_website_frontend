import React from 'react';
import {
  AiTwotonePhone,
  ImLocation2,
  MdEmail,
} from 'react-icons/all';
import './Footer.css';
import Facebook from "../../icons/Social_Facebook.svg";
import Insagram from "../../icons/Social_Instagram.svg";
import LinkedIn from "../../icons/Social_LinkedIn.svg";
import TikTok from "../../icons/Social_TikTok.svg";
import { NavLink } from 'react-router-dom';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      {/**Footer main container */}
      <div className="footer-content-main">

        {/**Copyright container */}
        <div className="footer-left-side">
          <h4>Stay updated on STEAM education updates & ICT/Engineering services!</h4>
          <div className="input-container">
            <input type="text" className="curved-input" placeholder="Your Email" />
              <button className="subscribe-button" >Subscribe</button>
          </div>
          <diV className="footer-social-mediaIcons">
            <a href="https://example.com">
              <img src={Facebook} alt="Facebook" />
            </a>
            <a href="https://example.com">
              <img src={LinkedIn} alt="LinkedIn" />
            </a>
            <a href="https://example.com">
              <img src={TikTok} alt="TikTok" />
            </a>
            <a href="https://example.com">
              <img src={Insagram} alt="Insagram" />
            </a></diV>
        </div>
        <div className="fotter-right-side">
          <div className="footer-details">
            <div className="footer-details-about-section">
              <h4>About</h4>
              <div className="footer-link">
                <NavLink
                  exact
                  to="/profile"
                  activeClassName="active"
                  className="footer-links"
                >
                  Our Story
                </NavLink>
              </div>
              <div className="footer-link">
                <NavLink
                  exact
                  to="/profile"
                  activeClassName="active"
                  className="footer-links"
                >
                  Modules
                </NavLink>
              </div>
              <div className="footer-link">
                <NavLink
                  exact
                  to="/profile"
                  activeClassName="active"
                  className="footer-links"
                >
                  Blog
                </NavLink>
              </div>
              <div className="footer-link">
                <NavLink
                  exact
                  to="/profile"
                  activeClassName="active"
                  className="footer-links"
                >
                  FAQs
                </NavLink>
              </div>
            </div>
            <div className="footer-details-services-section">
              <h4>Services</h4>
              <div className="footer-link">
                <NavLink
                  exact
                  to="/profile"
                  activeClassName="active"
                  className="footer-links"
                >
                  ICT Services
                </NavLink>
              </div>
              <div className="footer-link">
                <NavLink
                  exact
                  to="/profile"
                  activeClassName="active"
                  className="footer-links"
                >
                  Engineering Services
                </NavLink>
              </div>
              <div className="footer-link">
                <NavLink
                  exact
                  to="/profile"
                  activeClassName="active"
                  className="footer-links"
                >
                  Electronics Shop
                </NavLink>
              </div>
            </div>
            <div className="footer-details-contact-section">
              <div className="cont-info">
                <span><MdEmail size='1.5rem' color={'#94c93d'} /><p>admin@mindsinaction.com.na</p></span>
              </div>
              <div className="cont-info">
                <span> <AiTwotonePhone size='1.5rem' color={'#94c93d'} /><p>Tel: +264 81 363 0529</p></span>
              </div>
              <div className="cont-info">
                <span> <ImLocation2 size='70px' color={'#94c93d'} /><p>6 Andimba Toivo-ya-Toivo No.6, Suiderhof,Windhoek, Huster Machinetool building, First Floor</p></span>
              </div>
            </div>
          </div>
          <div className="copyright">
            <hr />
            <p>
              &copy;{year} Mindsinaction – All rights reserved.{' '}
              <span>Developed by Mindsinaction</span>
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
