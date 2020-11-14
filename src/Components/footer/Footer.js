import React from "react";

import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="blocks">
          <div className="block">
            <ul className="footer__links">
              <li>
                <a href="/form-components" className="footer__link active">
                  Form components
                </a>
              </li>
              <li>
                <a href="/login" className="footer__link">
                  Login form
                </a>
              </li>
              <li>
                <a href="/signup" className="footer__link">
                  SignUp form
                </a>
              </li>
            </ul>
          </div>
          <div className="block">
            <ul className="footer__links">
              <li>
                <a href="/form-components" className="footer__link active">
                  Notifications
                </a>
              </li>
              <li>
                <a href="/login" className="footer__link">
                  Primary notification
                </a>
              </li>
              <li>
                <a href="/signup" className="footer__link">
                  Accent notification
                </a>
              </li>
            </ul>
          </div>
          <div className="block">
            <ul className="footer__links">
              <li>
                <a href="/form-components" className="footer__link active">
                  Notifications
                </a>
              </li>
              <li>
                <a href="/login" className="footer__link">
                  Primary notification
                </a>
              </li>
              <li>
                <a href="/signup" className="footer__link">
                  Accent notification
                </a>
              </li>
            </ul>
          </div>
          <div className="block">
            <ul className="footer__links">
              <li>
                <a href="/form-components" className="footer__link active">
                  Notifications
                </a>
              </li>
              <li>
                <a href="/login" className="footer__link">
                  Primary notification
                </a>
              </li>
              <li>
                <a href="/signup" className="footer__link">
                  Accent notification
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
