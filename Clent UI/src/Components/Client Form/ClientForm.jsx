import React, { useState } from "react";
import "./ClientForm.css";
import axios from "axios";
import ThankYou from "./ThankYou";

const ClientForm = () => {
  const [company, setCompany] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState(0);
  const [time, setTime] = useState("");
  const [project, setProject] = useState("");
  const [description, setDescription] = useState("");
  const [flag, setFlag] = useState(false);

  const [errors, setErrors] = useState({});
  const [emailError, setEmailError] = useState("");
  const [numberError, setNumberError] = useState("");

  // email validation function
  function emailValid(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    return regex.test(email);
  }

  // mobile number validation function
  function numberValid(number) {
    var regex = /^\d{10}$/;
    return regex.test(number);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    let formErrors = {};

    // Check if fields are empty
    if (!company) formErrors.company = "Company is required";
    if (!name) formErrors.name = "Name is required";
    if (!time) formErrors.time = "Time is required";
    if (!project) formErrors.project = "Project is required";
    if (!description) formErrors.description = "Description is required";

    // email validation
    let isEmailValid = emailValid(email);
    if (!email) {
      setEmailError("Email is required");
    } else if (isEmailValid) {
      setEmailError(" ");
    } else {
      setEmailError("Enter a Valid Email");
    }

    // mobile number validation
    let isNumberValid = numberValid(number);
    if (!number) {
      setNumberError("Mobile Number is required");
    } else if (isNumberValid) {
      setNumberError("");
    } else {
      setNumberError("Enter a Valid Mobile Number");
    }

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      //const apiUrl = "http://localhost:3001/data";
      const CompanyName = company;
      const Name = name;
      const Email = email;
      const Mobile = number;
      const Time = time;
      const ProjectName = project;
      const Description = description;

      axios
        .post("http://localhost:3001/data", {
          CompanyName,
          Name,
          Email,
          Mobile,
          Time,
          ProjectName,
          Description,
        })
        .then((response) => {
          // Update the employees state with the data from the API response
          console.log(response);
          if (response.statusText === "Created") {
            setFlag(true);
          }
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  };
  return (
    <div className="container mt-3 pt-2 mb-3" id="clientform">
      <div className="justify-content-center">
        <div className="mt-2 pt-2 mb-2">
          <div className="formHeadTitle mt-3">Welcome back 👋</div>
          <div className="formHeadTagline mt-2">
            Fill the required details to move forward...
          </div>
        </div>

        <div>
          <form className="mt-2 mb-2 pt-2 w-75">
            <div className="pt-2">
              <label
                htmlFor="company name"
                className="form-label"
                id="formLabel"
              >
                Company Name *
              </label>
              <input
                type="text"
                className="formControl"
                placeholder="Enter your Company name"
                aria-label="company name"
                id="input"
                required
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>
            <div className="text-danger">{errors.company}</div>

            <div className="pt-3">
              <label htmlFor="Name" className="form-label" id="formLabel">
                Name *
              </label>
              <input
                type="text"
                className="formControl"
                placeholder="Enter your Name"
                aria-label="name"
                id="input"
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="text-danger">{errors.name}</div>

            <div className="pt-3">
              <label htmlFor="email" className="form-label" id="formLabel">
                Email address *
              </label>
              <input
                type="email"
                className="formControl"
                placeholder="Enter working Email"
                aria-label="email"
                id="input"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="text-danger">{emailError}</div>

            <div className="pt-3">
              <label htmlFor="mobile" className="form-label" id="formLabel">
                Mobile Number *
              </label>
              <input
                type="tel"
                className="formControl"
                placeholder="+91 "
                aria-label="mobile"
                id="input"
                required
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            <div className="text-danger">{numberError}</div>

            <div className="pt-3">
              <label htmlFor="timeline" className="form-label" id="formLabel">
                Estimated Timeline *
              </label>
              <input
                type="text"
                className="formControl"
                placeholder="Enter timeline of your project"
                aria-label="timeline"
                id="input"
                required
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
            <div className="text-danger">{errors.time}</div>

            <div className="pt-3">
              <label
                htmlFor="project name"
                className="form-label"
                id="formLabel"
              >
                Project Name *
              </label>
              <input
                type="text"
                className="formControl"
                placeholder="Enter your Project name"
                aria-label="project name"
                id="input"
                required
                onChange={(e) => setProject(e.target.value)}
              />
            </div>
            <div className="text-danger">{errors.project}</div>

            <div className="pt-3">
              <label
                htmlFor="description"
                className="form-label"
                id="formLabel"
              >
                Project Description *
              </label>
              <textarea
                type="textarea"
                className="formControl"
                placeholder="Project description..."
                aria-label="description"
                id="textarea"
                rows="3"
                required
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="text-danger">{errors.description}</div>

            <div className="pt-3">
              <label htmlFor="budget" className="form-label" id="formLabel">
                Budget *
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="₹ 8,000.00"
                aria-label="budget"
                id="budgetinput"
                disabled
              />
            </div>

            <button
              type="submit"
              className="button mt-5 mb-4 w-100"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {flag ? (
        <div
          style={{
            backgroundColor: "white",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            marginTop: -18,
            paddingTop: "40%",
          }}
        >
          <ThankYou />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default ClientForm;
