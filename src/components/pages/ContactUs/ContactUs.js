import React from "react";
import "./ContactUs.css";
import 'aos/dist/aos.css';
import validator from "validator";
import Axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import facebook from "../../images/contact-images/facebook.png";
import twitter from "../../images/contact-images/twitter.png";
import instagram from "../../images/contact-images/instagram.png";
import youtube from "../../images/contact-images/youtube.png";
import location from "../../images/contact-images/location.png";
import email from "../../images/contact-images/email.png";
import mobile from "../../images/contact-images/mobile.png";
import clock from "../../images/contact-images/clock-modified.png";


//initializing the toast notification
toast.configure();

class ContactUs extends React.Component {
  //creating the form state
  state = {
    name: "",
    email: "",
    subject: "",
    message: "",
    name_validate: "",
    email_validate: "",
    subject_validate: "",
    message_validate: "",
  };

  notify(msg) {
    toast.success(msg, {
      position: toast.POSITION.TOP_CENTER,
    });
  }

  errorNotify(msg) {
    toast.error(msg, {
      position: toast.POSITION.TOP_CENTER,
    });
  }

  //form submit function
  submitContactForm(e) {
    e.preventDefault();
    if (
      validator.isEmpty(this.state.name) ||
      validator.isEmpty(this.state.email) ||
      validator.isEmpty(this.state.subject) ||
      validator.isEmpty(this.state.message)
    ) {
      this.errorNotify(
        "Please make sure you have provided the required information!"
      );

      if (validator.isEmpty(this.state.name)) {
        this.setState({ name_validate: "Name is required!" });
      }
      if (validator.isEmpty(this.state.email)) {
        this.setState({ email_validate: "Email is required!" });
      }
      if (validator.isEmpty(this.state.subject)) {
        this.setState({ subject_validate: "Subject is required!" });
      }
      if (validator.isEmpty(this.state.message)) {
        this.setState({ message_validate: "Message is required!" });
      }
    } else {
      if (!validator.isEmail(this.state.email)) {
        this.errorNotify("Please provide a valid email!");
      } else {
        const formData = new FormData();
        formData.append("name", this.state.name);
        formData.append("email", this.state.email);
        formData.append("subject", this.state.subject);
        formData.append("message", this.state.message);

        Axios.post("https://mindsinaction.com.na/api/contact.php", formData)
          .then((res) => {
            for (var pair of formData.entries()) {
              console.log(pair[0] + ": " + pair[1]);
            }

            this.notify("Message sent successfully!");
            setTimeout(() => {
              window.location.reload(true);
            }, 1500);
          })
          .catch((error) => {
            this.errorNotify(error.message);
          });
      }
    }
  }

  render() {
    return (
      <div className="body">
        <section className="section">
          <div className="contact-title-header" data-aos="fade-up">
            <h1>Contact Us</h1>
            <p>We are located in Suiderhof, No. 6, Andimba Toivo-ya-Toivo street. In Huster Machinetools building first floor, opposite CTM.<br></br>
              Please contact us before your visit.</p>
          </div>
          <div className="center-hrz-contact">
            <div className="contactContainer" data-aos="fade-up">
              <div className="contactInfo">
                <div>
                  <h2>Contact Info</h2>
                  <div className="center-hrz-contactInfo">
                    <ul className="info">
                      <li>
                        <span style={{ marginRight: "10px" }}>
                          <img style={{
                            position: "absolute",
                            top: "50%",
                            transform: "translateY(-50%)"
                          }} src={location} alt="" />
                        </span>
                        <div>
                          <p>Location:</p>
                          <span>6 Andimba Toivo-ya-Toivo Street,
                            <br></br>Suiderhof, Windhoek</span>
                        </div>
                      </li>
                      <li>
                        <span style={{ marginRight: "10px" }}>
                          <img
                            style={{
                              position: "absolute",
                              top: "50%",
                              transform: "translateY(-50%)"
                            }}
                            src={email} alt="" />
                        </span>
                        <div>
                          <p>Email:</p>
                          <span>
                            admin@mindsinaction.com.na
                          </span>
                        </div>
                      </li>
                      <li>
                        <span style={{ marginRight: "10px" }}>
                          <img
                            style={{
                              position: "absolute",
                              top: "50%",
                              transform: "translateY(-50%)"
                            }}
                            src={mobile} alt="" />
                        </span>
                        <div>
                          <p>Call:</p>
                          <span>
                            <span style={{marginRight: "10px", color: "#fff"}}>Nonhlanhla:</span>
                            {/* <br></br> */}
                             +264 81 243 7216
                          </span>
                          <br></br>
                          <span style={{color: "#fff", fontWeight: "300"}}>
                            <span style={{marginRight: "35px", color: "#fff", fontWeight: "300"}}>Andreas:</span>
                            {/* <br></br> */}
                             +264 81 380 4069
                          </span>
                          <br></br>
                          <span style={{color: "#fff", fontWeight: "300"}}>
                            <span style={{marginRight: "24px", color: "#fff", fontWeight: "300"}}>Ndaudika:</span>
                            {/* <br></br> */}
                           +264 81 363 0529
                          </span>
                        </div>
                      </li>
                      <li>
                        <span style={{ marginRight: "10px" }}>
                          <img
                            style={{
                              position: "absolute",
                              top: "50%",
                              transform: "translateY(-50%)"
                            }}
                            src={clock} alt="" />
                        </span>
                        <div>
                          <p>Hours:</p>
                          <span>
                          Mon to Fri: 8:00 AM - 5:00 PM
                          <br></br>
                          Sat to Sun: Closed
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="center-hrz-contactInfo">
                  <ul className="sci">
                    <li>
                      <a href="https://www.facebook.com/search/top?q=mindsinaction" target="_blank" rel="noreferrer">
                        <img src={facebook} alt="" />
                      </a>
                    </li>
                    <li><a href="https://twitter.com/Minds_In_Action" target="_blank" rel="noreferrer">
                      <img src={twitter} alt="" />
                    </a></li>
                    <li><a href="https://www.instagram.com/minds_in_action/" target="_blank" rel="noreferrer">
                      <img src={instagram} alt="" />
                    </a></li>
                    <li><a href="https://www.youtube.com/channel/UCUEbN3NmiC5GEaMZi01z6WQ" target="_blank" rel="noreferrer">
                      <img src={youtube} alt="" />
                    </a></li>
                  </ul>
                </div>
              </div>
              <div className="contactForm">
                <h2>Send a message</h2>
                <div className="formBox">
                  <div className="inputBox w100">
                    <p className="error-msg">{this.state.name_validate}</p>
                    <input
                      className="input"
                      type="text"
                      name="name"
                      id=""
                      ref={(ref) => (this.name_input = ref)}
                      onChange={(e) => this.setState({ name: e.target.value })}
                      required />
                    <span>Name</span>
                  </div>
                  {/* <div className="inputBox w50">
                  <input className="input" type="text" name="" required />
                  <span>Last Name</span>
                </div> */}
                  <div className="inputBox w100">
                    <p className="error-msg">{this.state.email_validate}</p>
                    <input
                      className="input"
                      type="text"
                      name="email"
                      ref={(ref) => (this.email_input = ref)}
                      id=""
                      onChange={(e) => this.setState({ email: e.target.value })}
                      required />
                    <span>Email Address</span>
                  </div>
                  {/* <div className="inputBox w50">
                  <input className="input" type="text" name="" required />
                  <span>Mobile Number</span>
                </div> */}
                  <div className="inputBox w100">
                    <p className="error-msg">{this.state.subject_validate}</p>
                    <input
                      className="input"
                      type="text"
                      name="subject"
                      ref={(ref) => (this.subject_input = ref)}
                      id=""
                      onChange={(e) => this.setState({ subject: e.target.value })}
                      required />
                    <span>Subject</span>
                  </div>
                  <div className="inputBox w100">
                    <p className="error-msg">{this.state.message_validate}</p>
                    <textarea
                      className="textarea"
                      name="message"
                      ref={(ref) => (this.message_input = ref)}
                      onChange={(e) => this.setState({ message: e.target.value })}
                      required></textarea>
                    <span>Write your message here...</span>
                  </div>
                  <div className="inputBox w100">
                    <center>
                      <input
                        className="input"
                        type="submit"
                        onClick={(e) => this.submitContactForm(e)}
                        value="Send" />
                    </center>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="center-hrz" data-aos="fade-up">
            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.7229000612087!2d17.08013601415516!3d-22.589464932302022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1c0b1b2136c5902f%3A0x374b6b5d20afdbd4!2s6%20Andimba%20Toivo-ya-Toivo%20Street%2C%20Windhoek!5e0!3m2!1sen!2sna!4v1624442749382!5m2!1sen!2sna"
                width="100%"
                height="100%"
                title="Google map"
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ContactUs;
