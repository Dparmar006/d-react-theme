import React from "react";
import Base from "../../Base";
import "./FormElements.css";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
const FormElements = () => {
  return (
    // <Base>
    <section>
      <h2>Form</h2>
      <div className="section__container">
        <form className="form">
          <div className="form__title">
            <h2>Elements</h2>
          </div>
          <div className="form-elemetnts">
            <div>
              <input
                type="text"
                placeholder="Something here"
                className="form__element"
              />
            </div>
            <div className="form__element-container">
              <input
                type="password"
                placeholder="Password"
                className="form__element"
              />
            </div>
            <div className="form__element-container">
              <input type="text" className="form__element" />
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
              <input
                type="checkbox"
                value="policy1"
                name="policy"
                checked
                className="form__element"
              />
              I accept Privacy & Policy
            </div>
            <div className="form__element-container">
              <button type="submit" className="primary-button">
                SUBMIT
              </button>
            </div>
          </div>
        </form>
        <LoginForm />
        <SignupForm />
      </div>
    </section>
    // </Base>
  );
};

export default FormElements;
