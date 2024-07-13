import React from "react";
import "./ClientForm.css";

const ClientForm = () => {
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
              <label for="company name" class="form-label" id="formLabel">
                Company Name *
              </label>
              <input
                type="text"
                className="formControl"
                placeholder="Enter your Company name"
                aria-label="company name"
                id="input"
                required
              />
            </div>

            <div className="pt-3">
              <label for="Name" class="form-label" id="formLabel">
                Name *
              </label>
              <input
                type="text"
                className="formControl"
                placeholder="Enter your Name"
                aria-label="name"
                id="input"
                required
              />
            </div>

            <div className="pt-3">
              <label for="email" class="form-label" id="formLabel">
                Email address *
              </label>
              <input
                type="email"
                className="formControl"
                placeholder="Enter working Email"
                aria-label="email"
                id="input"
                required
              />
            </div>

            <div className="pt-3">
              <label for="mobile" class="form-label" id="formLabel">
                Mobile Number *
              </label>
              <input
                type="tel"
                className="formControl"
                placeholder="+91 "
                aria-label="mobile"
                id="input"
                required
              />
            </div>

            <div className="pt-3">
              <label for="timeline" class="form-label" id="formLabel">
                Estimated Timeline *
              </label>
              <input
                type="text"
                className="formControl"
                placeholder="Enter timeline of your project"
                aria-label="timeline"
                id="input"
                required
              />
            </div>

            <div className="pt-3">
              <label for="project name" class="form-label" id="formLabel">
                Project Name *
              </label>
              <input
                type="text"
                className="formControl"
                placeholder="Enter your Project name"
                aria-label="project name"
                id="input"
                required
              />
            </div>

            <div className="pt-3">
              <label for="description" class="form-label" id="formLabel">
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
              />
            </div>

            <div className="pt-3">
              <label for="budget" class="form-label" id="formLabel">
                Budget *
              </label>
              <input
                type="text"
                class="form-control"
                placeholder="₹ 8,000.00"
                aria-label="budget"
                id="budgetinput"
                disabled
              />
            </div>

            <button type="submit" className="button mt-5 mb-4 w-100">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ClientForm;
