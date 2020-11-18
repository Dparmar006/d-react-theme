import React from "react";
import "./LoginForm.css";
const LoginForm = () => {
  return (
    <form className="form">
      <div className="form__title">
        <h2>Login</h2>
      </div>
      <div className="form-elemetnts">
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
          <button type="submit" className="primary-button">
            LOGIN
          </button>
          <p className="help-text">
            Already have an account ? <a href="/signup">Sign up</a>
          </p>
        </div>
      </div>
    </form>
  );
};
export default LoginForm;
