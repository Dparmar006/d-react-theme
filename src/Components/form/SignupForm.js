import React from "react";
import "./SignupForm.css";
const SignupForm = () => {
  return (
    <form className="form">
      <div className="form__title">
        <h2>Signup</h2>
      </div>
      <div className="form-elemetnts">
        <div>
          <input
            type="text"
            placeholder="First name"
            className="form__element"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Last name"
            className="form__element"
          />
        </div>
        <div>
          <input type="email" placeholder="Email" className="form__element" />
        </div>
        <div className="form__element-container">
          <input
            type="password"
            placeholder="Password"
            className="form__element"
          />
        </div>
        <div className="form__element-container">
          <input
            type="radio"
            value="female"
            name="gender"
            className="form__element"
          />
          Female
          <input
            type="radio"
            value="male"
            name="gender"
            className="form__element"
          />
          Male
          <input
            type="radio"
            value="other"
            name="gender"
            className="form__element"
          />
          Other
        </div>
        <div className="form__element-container">
          <button type="submit" className="primary-button">
            SIGNUP
          </button>
        </div>
      </div>
    </form>
  );
};

export default SignupForm;
