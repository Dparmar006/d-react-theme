import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header>
      <nav className="header__container">
        <div className="header__logo">D-Theme</div>
        <div className="header__menu">
          <ul className="nav-links">
            <li>
              <a href="" className="nav-link">
                Home
              </a>
            </li>
            <li>
              <a href="" className="nav-link">
                Instagram
              </a>
            </li>
            <li>
              <a href="" className="nav-link">
                Twitter
              </a>
            </li>
            <li>
              <a href="" className="nav-link">
                Github
              </a>
            </li>
          </ul>
          <div className="menu-button">
            <div className="icon">
              <i className="material-icons">menu</i>
            </div>
          </div>
        </div>
      </nav>
      <div className="mobile-menu">
        <ul className="mobile-nav-links">
          <li>
            <a href="" className="nav-link">
              Home
            </a>
          </li>
          <li>
            <a href="" className="nav-link">
              Instagram
            </a>
          </li>
          <li>
            <a href="" className="nav-link">
              Twitter
            </a>
          </li>
          <li>
            <a href="" className="nav-link">
              Github
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
