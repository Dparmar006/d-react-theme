import React from "react";
import "./Navbar.css";

const Navbar = () => {
  const toggleMobileNavigation = () => {
    const icon = document.getElementById("menu-icon");
    const menu = document.getElementById("mobile-nav-links");
    menu.classList.toggle("mobile-nav-links-show");
    icon.innerHTML = icon.innerHTML == "menu" ? "close" : "menu";
  };

  return (
    <header>
      <nav className="header__container">
        <div className="header__logo">BookOn</div>
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
          <button
            className="icon-button menu-button"
            id="menu-button"
            onClick={(event) => {
              toggleMobileNavigation();
            }}
          >
            <div className="icon">
              <i className="material-icons" id="menu-icon">
                menu
              </i>
            </div>
          </button>
        </div>
      </nav>
      <div className="mobile-menu" id="mobile-menu">
        <ul className="mobile-nav-links" id="mobile-nav-links">
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
