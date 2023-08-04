import React, { Component, useState } from "react";
import axios from "axios";
import "react-phone-number-input/style.css";
import Select from "react-select";
import PhoneInput from "react-phone-number-input";
import "./Registration.css";

class Registration extends Component {
  //creating a state
  state = {
    course: "",
    first_name: "",
    last_name: "",
    age: "",
    physical_address: "",
    school: "",
    grade: "",
    parent_name: "",
    email_address: "",
    phone_number: "",
    proof: "",
  };

  //getting the file data
  onChange = (e) => {
    this.setState({
      proof: e.target.files[0],
    });
  };

//   constructor(props) {
//     super(props);
//     this.submitForm = this.submitForm.bind(this);
//   }

  submitForm(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("course", this.state.course);
    formData.append("first_name", this.state.first_name);
    formData.append("last_name", this.state.last_name);
    formData.append("age", this.state.age);
    formData.append("physical_address", this.physical_address);
    formData.append("grade", this.state.grade);
    formData.append("parent_name", this.state.parent_name);
    formData.append("email_address", this.state.email_address);
    formData.append("phone_number", this.state.phone_number);
    formData.append("proof", this.state.proof);

    // var headers = {
    //   "Content-Type": "application/json",
    //   "Access-Control-Allow-Origin": "*",
    // };

    axios
      .post("http://localhost/minds_api/registration.php", formData)
      .then(function (response) {
        //handle success
        console.log(response);
        alert("success");
      })
      .catch(function (response) {
        //handle error
        console.log(response);
        alert("sorry");
      });
  }

  render() {
    //courses options array
    const options = [
      { value: "1", label: "Introduction to Kibo" },
      { value: "2", label: "Arts and Technology with Kibo" },
      { value: "3", label: "Creativity with Kibo" },
      { value: "4", label: "Introduction to Robotics and Programming" },
      { value: "5", label: "STEAM Education Works" },
      { value: "6", label: "TinkerCAD and 3D Printing" },
      { value: "7", label: "Basic Electronics and Microcontrollers" },
      { value: "8", label: "Electronics Prototyping with Breadboard" },
      { value: "9", label: "Electronics Prototyping with Vero Board" },
      { value: "10", label: "Alternative energy" },
      { value: "11", label: "Environmental Technology/Water" },
      { value: "12", label: "Botany" },
      { value: "13", label: "Plastics" },
      { value: "14", label: "Physical science" },
      { value: "15", label: "Chemistry" },
      { value: "16", label: "Biology" },
    ];

    //select field styling
    const customStyles = {
      control: (base, state) => ({
        ...base,
        background: "rgba(255, 255, 255, 0.0)",
        borderColor: "rgba(255, 255, 255, 0.2)",
        // match with the menu
        boxShadow: state.isFocused ? null : null,
        fontFamily: "Times New Roman",
        "&:hover": {
          // Overwrittes the different states of border
          borderColor: state.isFocused
            ? "rgba(255, 255, 255, 0.2)"
            : "rgba(255, 255, 255, 0.2)",
        },
      }),
    };

    return (
      <div className="registration-main">
        <div className="form-container">
          <div className="registration-form">
            <div className="form" encType="multipart/form-data">
              <h1>Application Form</h1>
              <p></p>
              <div className="main-input-fields">
                <div className="form-input-fields-p1">
                  <div className="form-input" id="course-select">
                    <Select
                      styles={customStyles}
                      placeholder="Select course"
                      options={options}
                      onChange={(e) => this.setState({ course: e.label })}
                      required
                    />
                  </div>
                  <div className="form-input">
                    <input
                      type="text"
                      name="firstname"
                      id="firstname"
                      placeholder="First name"
                      onChange={(e) =>
                        this.setState({ first_name: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="form-input">
                    <input
                      type="text"
                      name="lastname"
                      id="lastname"
                      placeholder="Last name"
                      onChange={(e) =>
                        this.setState({ last_name: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="form-input">
                    <input
                      type="text"
                      name="age"
                      id="age"
                      placeholder="Age"
                      onChange={(e) => this.setState({ age: e.target.value })}
                      required
                    />
                  </div>
                  <div className="form-input">
                    <input
                      type="text"
                      name="address"
                      id="address"
                      placeholder="Physical address"
                      onChange={(e) =>
                        this.setState({ physical_address: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>
                <div className="form-input-fields-p2">
                  <div className="form-input">
                    <input
                      type="text"
                      name="school"
                      id="school"
                      placeholder="School/Institution"
                      onChange={(e) =>
                        this.setState({ school: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="form-input">
                    <input
                      type="text"
                      name="grage"
                      id="grade"
                      placeholder="Grade"
                      onChange={(e) => this.setState({ grade: e.target.value })}
                      required
                    />
                  </div>
                  <div className="form-input">
                    <input
                      type="text"
                      name="parant-name"
                      id="parent-name"
                      placeholder="Parent full name"
                      onChange={(e) =>
                        this.setState({ parent_name: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="form-input">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email address"
                      onChange={(e) =>
                        this.setState({ email_address: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="form-input">
                    {/* <PhoneInput
                      className="country-code"
                      id="select-code"
                      defaultCountry="NA"
                      placeholder="Phone number"
                      value={this.state.phone_number}
                      onChange={(e) =>
                        this.setState({ phone_number: e. })
                      }
                      required
                    /> */}

                    <input
                      type="text"
                      placeholder="Phone number"
                      onChange={(e) =>
                        this.setState({ phone_number: e.target.value })
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="main-input-second-part">
                <div className="form-input">
                  <div className="agree-bank-details">
                    <div className="agree">
                      <p className="terms-p">
                        Terms and conditions:
                        <span className="terms-conditions">
                          Full payments for all Modules per learner is required
                          prior to their participation,
                          <a href="https://www.mindsinaction.com.na/wp-content/uploads/2020/10/See-Price-List.pdf">
                            See price list
                          </a>
                          . If enrollment in a particular group is insufficient
                          on the starting date. We reserve the right to adjust
                          the course format. Should we not have enough course
                          participants, we reserve the right to cancel a course.
                          No refunds will be paid once the course has started. A
                          cancellation fee of 20% is payable before course
                          commencement. Cancellation must be done in writing.
                          MindsInAction cannot be held liable and accepts no
                          responsibility for any injury, damage and/or loss to
                          course participants and their belongings. By signing
                          above, you agree to have read and understood the terms
                          and conditions
                        </span>
                      </p>
                      <div className="agree-checkbox">
                        <input
                          type="checkbox"
                          id="agree-1"
                          name="agree-1"
                          value="agree"
                          required
                        ></input>
                        <p className="agree-box">
                          <span>I Accept Terms & Conditions</span>
                        </p>
                      </div>
                      <div className="form-file">
                        <p>
                          <span>Upload Proof of Payment</span>
                        </p>
                        <input
                          type="file"
                          id="myFile"
                          name="filename"
                          accept=".jpg, .jpeg, .png,.pdf,.doc"
                          onChange={this.onChange}
                          required
                        ></input>
                      </div>
                    </div>
                    <hr />
                    <div className="bank-details">
                      <p className="bank-title">Bank details</p>
                      <p>
                        <span>Standard bank name:</span> Engenete Investments cc{" "}
                        <br />
                        <span>Account no:</span> 60003322768 <br />
                        <span>Type of account:</span> Business current account{" "}
                        <br />
                        <span> Branch name:</span> Windhoek Branch <br />
                        <span>Branch code:</span> 08 2372
                      </p>
                    </div>
                  </div>
                  <div className="form-input">
                    <input
                      type="submit"
                      value="Submit"
                      onClick={(e) => this.submitForm(e)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Registration;
