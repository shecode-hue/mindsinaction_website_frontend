import React, { useState } from "react";
import "./Registration.css";
import "react-phone-number-input/style.css";
import Select from "react-select";
import PhoneInput from "react-phone-number-input";
import Axios from "axios";
import validator from "validator";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

toast.configure();

//Read more function
function ReadMore({ children, maxCharacterCount = 83 }) {
  const [isTrancated, setTrancated] = useState(true);

  const text = children;
  const resultString = isTrancated ? text.slice(0, 83) : text;

  function toggleIsTrancated() {
    setTrancated(!isTrancated);
  }

  return (
    <p className="read-more-text">
      {resultString}
      <br />
      <br />
      <span onClick={toggleIsTrancated} className="read-more-span">
        Read more
      </span>
    </p>
  );
}

export default function Registration(props) {
  //Creating student's details states
  const [course, setCourse] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [age, setAge] = useState(0);
  const [address, setAddress] = useState("");
  const [school, setSchool] = useState("");
  const [grade, setGrade] = useState("");
  const [parentName, setParentName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [proof, setProof] = useState([]);

  //Form validation
  const [couresValidation, setCourseValidation] = useState("");
  const [firstnameValidation, setFirstnameValidation] = useState("");
  const [lastnameValidation, setLastNameValidation] = useState("");
  const [ageValidation, setAgeValidation] = useState("");
  const [addressValidation, ] = useState("");
  const [schoolValidation, ] = useState("");
  const [gradeValidation, ] = useState("");
  const [parent_nameValidation, ] = useState("");
  const [emailValidation, setEmailValidation] = useState("");
  const [phone_numberValidation, setPhone_numberValidation] = useState("");
  const [agreeValidation, setAgreeValidation] = useState(false);
  const [proofValidation, setProofValidation] = useState("");
  const [agreeMessage, setAgreeMessage] = useState("");

  //notification
  const notify = (msg) =>
    toast.success(msg, {
      position: toast.POSITION.TOP_CENTER,
    });
  const errerNotify = (msg) =>
    toast.error(msg, {
      position: toast.POSITION.TOP_CENTER,
    });

  const clear = () => {
    document.getElementById("student-form").reset();
  };

  //Student's registration backend api
  const registerStudent = (e) => {
    e.preventDefault();
    var data = new FormData();
    data.append("course", course);
    data.append("firstname", firstname);
    data.append("lastname", lastname);
    data.append("age", age);
    data.append("address", address);
    data.append("school", school);
    data.append("grade", grade);
    data.append("parentName", parentName);
    data.append("emailAddress", emailAddress);
    data.append("phoneNumber", phoneNumber);
    data.append("proof", proof);

    if (
      validator.isEmpty(course) ||
      validator.isEmpty(firstname) ||
      validator.isEmpty(lastname) ||
      age === 0 ||
      // validator.isEmpty(address) ||
      // validator.isEmpty(school) ||
      // validator.isEmpty(grade) ||
      // validator.isEmpty(parentName) ||
      validator.isEmpty(emailAddress) ||
      validator.isEmpty(phoneNumber)
      // proof.length === 0
    ) {
      errerNotify(
        "Please make sure you have entered the correct information and accept terms and conditions!"
      );
      if (validator.isEmpty(course)) {
        setCourseValidation("Please, select a course!");
      }
      if (validator.isEmpty(firstname)) {
        setFirstnameValidation("First name is required!");
      }
      if (validator.isEmpty(lastname)) {
        setLastNameValidation("Last name is required!");
      }
      if (age === 0) {
        setAgeValidation("Age is required!");
      }
      // if (validator.isEmpty(address)) {
      //   setAddressValidation("Address is required!");
      // }
      // if (validator.isEmpty(school)) {
      //   setSchoolValidation("School is required!");
      // }
      // if (validator.isEmpty(grade)) {
      //   setGradeValidation("Grade is required!");
      // }
      // if (validator.isEmpty(parentName)) {
      //   setParent_nameValidation("Parent name is required!");
      // }
      if (validator.isEmpty(emailAddress)) {
        setEmailValidation("Email is required!");
      }

      if (proof.length === 0) {
        setProofValidation("Proof of payment is required");
      }

      if (!agreeValidation) {
        setAgreeMessage("Please accept the terms and conditions!");
      }
      if (validator.isEmpty(phoneNumber)) {
        setPhone_numberValidation("Phone number is required");
      }
    } else {
      if (
        !validator.isEmail(emailAddress) ||
        phoneNumber.length < 12 ||
        phoneNumber.length > 13
      ) {
        if (!validator.isEmail(emailAddress)) {
          errerNotify("Please enter a valid email!");
        }

        if (phoneNumber.length < 12) {
          setPhone_numberValidation("Please enter a valid phone number");
        }
      } else {
        Axios.post("https://mindsinaction.com.na/api/student.php", data)
          .then((res) => {
            //notifying the user after sucessfull submision
            switch (res.data.message) {
              case "success":
                notify("Successfully registered student!");
                clear();
                break;
              case "file_size_err":
                errerNotify("Only images images less than 50MB are allowed!");
                break;
              case "file_type_err":
                errerNotify("Only images of this type are allowed!");
                break;
              case "student_exist":
                errerNotify("Student already registered for that course!");
                break;
              case "reg_err":
                errerNotify("Error registering student");
                break;
              default:
                break;
            }
          })
          .catch((error) => {
            errerNotify(error.message);
          });
      }
    }
  };

  //select field styling
  const customStyles = {
    control: (base, state) => ({
      ...base,
      background: "rgba(255, 255, 255, 0.0)",
      borderColor: "rgba(255, 255, 255, 0)",
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

  //courses options array
  const options = [
    { value: "1", label: "Module 0: Dash robot for children" },
    { value: "2", label: "Module 1: Introduction to robotics and programming" },
    { value: "3", label: "Module 2: Scratch programming" },
    {
      value: "4",
      label: "Module 3: Basic electronics, microcontrollers and programming",
    },
    { value: "5", label: "Module 4: Electronic circuits and soldering" },
    { value: "6", label: "Module 5: Printed Circuit board (PCB) design" },
    { value: "7", label: "Module 6: 3D printing" },
    { value: "8", label: "Module 7: Solidworks and CNC" },
    { value: "9", label: "Module 8: Mechatronics" },
    { value: "10", label: "Web Development" },
    { value: "11", label: "Mobile app development" },
    { value: "12", label: "Graphic Design" },
    { value: "13", label: "Raspberry Pi" },
  ];

  return (
    // deleted the class => main container
    <div className="main-container">
      <div className="registration-main" data-aos="fade-up">
        <div className="center-hrz-registration">
        <div className="form-container">
          <div className="registration-title-header">
          <h1>Application Form</h1>
          </div>
          
          <div className="registration-form">
            <form
              className="form"
              id="student-form"
              encType="multipart/form-data"
            >
              <div className="main-input-fields">
                <div className="form-input-fields-p1">
                  {/* form input */}
                  <div className="form-input" style={{height: "50px", paddingTop: "3px"}}>
                    {validator.isEmpty(course) ? (
                      <p className="error">{couresValidation}</p>
                    ) : null}
                    <>
                      <div className="course-select">
                        <Select
                          styles={customStyles}
                          placeholder="Select course"
                          options={options}
                          onChange={(e) => {
                            setCourse(e.label);
                          }}
                          // backgroundImage={registerBackground}
                          required
                        />
                      </div>
                    </>
                  </div>
                  {/* form input */}
                  <div className="form-input">
                    {validator.isEmpty(firstname) ? (
                      <p className="error">{firstnameValidation}</p>
                    ) : null}
                    <>
                      {/* <div className="input-icon">
                        <BsFillPersonFill />
                      </div> */}
                      <input
                        type="text"
                        name="firstname"
                        id="firstname"
                        placeholder="First name"
                        onChange={(e) => {
                          setFirstName(e.target.value);
                        }}
                        required
                      />
                    </>
                  </div>
                  {/* form input field */}
                  <div className="form-input">
                    {validator.isEmpty(lastname) ? (
                      <p className="error">{lastnameValidation}</p>
                    ) : null}
                    <>
                      {/* <div className="input-icon">
                        <BsFillPersonCheckFill />
                      </div> */}
                      <input
                        type="text"
                        name="lastname"
                        id="lastname"
                        placeholder="Last name"
                        onChange={(e) => {
                          setLastName(e.target.value);
                        }}
                        required
                      />
                    </>
                  </div>
                  {/* form input field */}
                  <div className="form-input">
                    {age === 0 ? (
                      <p className="error">{ageValidation}</p>
                    ) : null}
                    <>
                      {/* <div className="input-icon">
                        <BsPersonLinesFill />
                      </div> */}
                      <input
                        type="number"
                        name="age"
                        id="age"
                        max="100"
                        min="5"
                        placeholder="Age"
                        onChange={(e) => {
                          setAge(e.target.value);
                        }}
                        required
                      />
                    </>
                  </div>
                  {/* form input field */}
                  <div className="form-input">
                    {validator.isEmpty(address) ? (
                      <p className="error">{addressValidation}</p>
                    ) : null}
                    <>
                      {/* <div className="input-icon">
                        <ImLocation2 />
                      </div> */}
                      <input
                        type="text"
                        name="address"
                        id="address"
                        placeholder="Physical address"
                        onChange={(e) => {
                          setAddress(e.target.value);
                        }}
                        required
                      />
                    </>
                  </div>
                </div>
              </div>
              {/* second part of the form */}
              <div className="main-input-second-part">
                <div className="form-input-fields-p2">
                  {/* form input */}
                  <div className="form-input">
                    {validator.isEmpty(school) ? (
                      <p className="error">{schoolValidation}</p>
                    ) : null}
                    <>
                      {/* <div className="input-icon">
                        <IoIosSchool />
                      </div> */}
                      <input
                        type="text"
                        name="school"
                        id="school"
                        placeholder="School/Institution"
                        onChange={(e) => {
                          setSchool(e.target.value);
                        }}
                        required
                      />
                    </>
                  </div>
                  {/* form input */}
                  <div className="form-input">
                    {validator.isEmpty(grade) ? (
                      <p className="error">{gradeValidation}</p>
                    ) : null}
                    <>
                      {/* <div className="input-icon">
                        <AiFillIdcard />
                      </div> */}
                      <input
                        type="text"
                        name="grage"
                        id="grade"
                        onChange={(e) => {
                          setGrade(e.target.value);
                        }}
                        placeholder="Grade"
                        required
                      />
                    </>
                  </div>
                  {/* form input */}
                  <div className="form-input">
                    {validator.isEmpty(parentName) ? (
                      <p className="error">{parent_nameValidation}</p>
                    ) : null}
                    <>
                      {/* <div className="input-icon">
                        <RiParentFill />
                      </div> */}
                      <input
                        type="text"
                        name="parant-name"
                        id="parent-name"
                        placeholder="Parent full name"
                        onChange={(e) => {
                          setParentName(e.target.value);
                        }}
                        required
                      />
                    </>
                  </div>
                  {/* form input */}
                  <div className="form-input">
                    {validator.isEmpty(emailAddress) ? (
                      <p className="error">{emailValidation}</p>
                    ) : null}
                    <>
                      {/* <div className="input-icon">
                        <AiTwotoneMail />
                      </div> */}
                      <input
                        type="email"
                        name="email"
                        id="email"
                        onChange={(e) => {
                          setEmailAddress(e.target.value);
                        }}
                        placeholder="Email address"
                        required
                      />
                    </>
                  </div>
                  {/* form input */}
                  <div className="form-input">
                    {phoneNumber === undefined ? (
                      <p className="error">{phone_numberValidation}</p>
                    ) : null}
                    <PhoneInput
                      className="country-code"
                      id="select-code"
                      defaultCountry="NA"
                      placeholder="Phone number"
                      value={phoneNumber}
                      onChange={setPhoneNumber}
                      required
                    />
                  </div>
                </div>
              </div>
            </form>
            <div className="agree">
              {/* changed the paragraph element to a div element */}
              <div className="terms-p">
                <span className="bold">Terms and conditions:</span>
                <ReadMore style={{color: 'black'}}>
                  Full payments for all Modules per learner is required prior to
                  their participation. If enrollment in a particular group is
                  insufficient on the starting date. We reserve the right to
                  adjust the course format. Should we not have enough course
                  participants, we reserve the right to cancel a course. No
                  refunds will be paid once the course has started. A
                  cancellation fee of 20% is payable before course commencement.
                  Cancellation must be done in writing. MindsInAction cannot be
                  held liable and accepts no responsibility for any injury,
                  damage and/or loss to course participants and their
                  belongings. By signing above, you agree to have read and
                  understood the terms and conditions
                </ReadMore>
                <br />
                {/* <a href="https://www.mindsinaction.com.na/wp-content/uploads/2020/10/See-Price-List.pdf">
                          See price list
                        </a> */}
              </div>
              <div className="popUp">
                <Popup
                  trigger={
                    <button className="read-more-span"> See Prices </button>
                  }
                  position={"right center"}
                  modal
                >
                  <div>
                    <table>
                      <tr>
                        <th>Module</th>
                        <th>Prices</th>
                      </tr>
                      <tr>
                        <td>Module 1-5</td>
                        <td>N$1500</td>
                      </tr>
                      <tr>
                        <td>Module 6-8</td>
                        <td>N$2000</td>
                      </tr>
                      <tr>
                        <td>Other</td>
                        <td>N$2000</td>
                      </tr>
                    </table>
                  </div>
                </Popup>
                <Popup
                  trigger={
                    <button className="read-more-span">
                      {" "}
                      Banking Details{" "}
                    </button>
                  }
                  position={"right center"}
                  modal
                >
                  <div>
                    <table>
                      <tr>
                        <th>Standard bank name:</th>
                        <th>Engenete Investments cc</th>
                      </tr>
                      <tr>
                        <td>Account no:</td>
                        <td>60003322768</td>
                      </tr>
                      <tr>
                        <td>Type of account:</td>
                        <td>Business current account</td>
                      </tr>
                      <tr>
                        <td>Branch name:</td>
                        <td>Windhoek</td>
                      </tr>
                      <tr>
                        <td>Branch code:</td>
                        <td>08 2372</td>
                      </tr>
                    </table>
                  </div>
                </Popup>
              </div>
            </div>
            {/* bank details and shiii */}
            <>
              {/* <div id="bank" className="bank-details">
                <h1 className="bank-title">Bank details</h1>
                <ul className="bank-information">
                  <li>
                    <span className="bold">Standard bank name:</span> Engenete
                    Investments cc
                  </li>
                  <br />
                  <li>
                    <span className="bold">Account no:</span> 60003322768{" "}
                  </li>
                  <br />
                  <li>
                    <span className="bold">Type of account:</span> Business
                    current account
                  </li>
                  <br />
                  <li>
                    <span className="bold"> Branch name:</span> Windhoek Branch{" "}
                  </li>
                  <br />
                  <li>
                    <span className="bold">Branch code:</span> 08 2372
                  </li>
                </ul>
              </div> */}
              {/* <div id="bank" className="bank-details">
                <h1 className="bank-title">Contact details</h1>
                <ul className="bank-information">
                  <li>
                    <span className="bold">CellPhone:</span> +26481 380 4069
                  </li>
                  <br />
                  <li>
                    <span className="bold">Email:</span> admin@mindsinaction.com.na{" "}
                  </li>
                  <br />
                  <li>
                    <span className="bold">website:</span> mindsinaction.com.na
                  </li>
      
                </ul>
              </div> */}
            </>
            {/* accept tick box container + the validation of it being manditory */}
            {!agreeValidation ? <p className="error">{agreeMessage}</p> : null}
            <div className="agree-checkbox">
              <input
                type="checkbox"
                id="agree-1"
                onChange={(e) => {
                  setAgreeValidation(e.target.checked);
                }}
              ></input>
              <p className="agree-box">
                <span className="bold">I Accept Terms & Conditions</span>
              </p>
            </div>
            <div className="form-file">
              <p className="proof-pay">
                <span className="bold">Upload Proof of Payment</span>
              </p>
              <input
                type="file"
                id="myFile"
                name="filename"
                accept=".jpg, .jpeg, .png,.pdf,.doc"
                required
                onChange={(e) => {
                  setProof(e.target.files[0]);
                }}
              ></input>
              {proof.length === 0 ? (
                <p className="error">{proofValidation}</p>
              ) : null}
            </div>
            {/* form input button */}
            <>
              {/* <input className="Submitbtn" type="submit" value="Submit" onClick={registerStudent} /> */}
              <button className="submitBtn" onClick={registerStudent}>
                Submit
              </button>
            </>
          </div>
        </div>
        </div>
        
      </div>
    </div>
  );
}
