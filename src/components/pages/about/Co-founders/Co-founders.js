import React from "react";
import "aos/dist/aos.css";
import "./Co-founders.css";
import Dika from "../../../images/founders-images/Ndaudika.jpg";
import Andre from "../../../images/founders-images/Leonard.jpg";
// import Andre from "../../../images/founders-images/Leonard compressed.webp";

export default function founders() {
    
      return (
        <div id="founders-body">
        <div className="founders-main">
          <div className="founders-title-header" data-aos="fade-up">
          <h1> Founders</h1>
          </div>
        
        {/* <div className="founders-cards"> */}
        <div className="flex-card" data-aos="fade-up">
        <div className="founder">
          <div className ="founders-left">
            <div className="founders-image" >
              <img src={Dika} alt="founder"></img>
            </div>
            <div className="founders-info">
              <h2>Ndaudika Mulundileni</h2>
              {/* <h2>Mulundileni</h2> */}
              <h4 style={{color: "gray"}}>CEO / Co-founder-Engenete Investments cc (Mindsinaction)</h4>
            </div>
            <div style={{marginTop: "10px"}}>
              <h2 style={{color: "#000", fontWeight: "bold"}}>Call: <br></br><span style={{color: "gray"}}>+264 81 363 0529</span></h2>
              <h2 style={{color: "#000", fontWeight: "bold"}}>Email: <br></br><span style={{color: "gray", fontSize: "12px"}}>ndaudika@mindsinaction.com.na</span></h2>
            </div>
            <div className="founders-Quote" id="founder-quote">
            <h3>Drive Quote</h3>
             <p style={{color: "gray"}}>"It is in the mist of decisions that a man's destiny is shaped"</p>
             <h6 id="founders-quote"><em><span> ~ </span>Anonymous</em></h6>
            </div>
          </div>
          <div className ="founders-middle">
            <div className="founders-passion">
        <h3 id="passion">Passion</h3>
           <ul>
             <li>Social Impact</li>
             <li>Life</li>
             <li>STEAM Education</li>
             <li>Digital Fabrication</li>
            </ul>
          </div>
          
            <div className="founders-knowledge">
            <h3>Areas of Knowledge</h3>
            <ul>
             <li>STEAM Education</li>
             <li>Social Entrepreneurship</li>
             <li>Design Thinking</li>
             <li>Digital Fabrication</li>
             <li>Robotics</li>
            </ul>
            </div>
            <div className="founders-values">
            <h3>Values</h3>
            <ul>
             <li>Wisdom and Foresight</li>
             <li>Creativity and Diversity</li>
             <li>Common Purpose</li>
             <li>Patriotism</li>
            </ul>
            </div>
            <div className="founders-Focus">  
            <h3>Areas Of Focus</h3>
            <ul>
             <li>Engineering</li>
             <li>STEAM education</li>
             <li>Social</li>
             <li>Digital Fabrication</li>
             <li>Social Development</li>
             <li>Children and Youth</li>
            </ul>
            </div>
          </div>
        </div>
        <div className="founder">
          <div className ="founders-left">
            <div className="founders-image" >
              <img src={Andre} alt="founder"></img>
            </div>
            <div className="founders-info">
              <h2>Andreas Leonard</h2>
              {/* <h2>Leonard</h2> */}
              <h4 style={{color: "gray"}}>COO / Co-founder-Engenete Investments cc (Mindsinaction)</h4>
            </div>
            <div style={{marginTop: "10px"}}>
              <h2 style={{color: "#000", fontWeight: "bold"}}>Call: <br></br><span style={{color: "gray"}}>+264 81 380 4069</span></h2>
              <h2 style={{color: "#000", fontWeight: "bold"}}>Email: <br></br><span style={{color: "gray", fontSize: "12px"}}>andreas@mindsinaction.com.na</span></h2>
            </div>
            <div className="founders-Quote" id="founder-quote" >
            <h3>Drive Quote</h3>
             <p style={{color: "gray"}}>"Thought is the link between body and soul, it must be used for the improvenment of both"</p>
             <h6 id="founders-quote"><em><span> ~ </span>Anonymous</em></h6>
            </div>
          </div>
          <div className ="founders-middle">
            <div className="founders-passion">
        <h3>Passion</h3>
           <ul>
             <li>Innovation</li>
             <li>Social Entrepreneurship</li>
             <li>STEAM Education</li>
            </ul>
          </div>
          
            <div className="founders-knowledge">
            <h3>Areas of Knowledge</h3>
            <ul>
             <li>Computer Systems</li>
             <li>Social Entrepreneurship</li>
             <li>STEAM Education</li>
             <li>Managenment</li>
            </ul>
            </div>
            <div className="founders-values">
            <h3>Values</h3>
            <ul>
             <li>Honesty and Good Will</li>
             <li>Creativity</li>
             <li>Action</li>
             <li>Love of Country</li>
            </ul>
            </div>
            <div className="founders-Focus">  
            <h3>Areas Of Focus</h3>
            <ul>
             <li>Computer Systems</li>
             <li>STEAM education</li>
             <li>Social</li>
             <li>Education</li>
             <li>Social Development</li>
             <li>Technology</li>
             <li>Children and Youth</li>
            </ul>
            </div>
          </div>
        </div>
        </div>
        </div>
        </div>
      );
    }