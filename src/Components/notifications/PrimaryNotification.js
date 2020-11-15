import React from "react";
import "./PrimaryNotification.css";
const PrimaryNotification = () => {
  return (
    <div className="notification">
      <div className="notification__container">
        <div className="notification__icon">
          <i className="material-icons">search</i>
        </div>
        <div className="content">
          <div className="notification__title">Hello</div>
          <div className="notification__description">
            Non elit eu nisi ex culpa quis est mollit sunt consectetur et Lorem.
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrimaryNotification;
