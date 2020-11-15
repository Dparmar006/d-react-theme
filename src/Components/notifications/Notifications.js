import React from "react";
import "./Notifications.css";
import PrimaryNotification from "./PrimaryNotification";
const Notifications = () => {
  const showNotification = (event) => {
    event.preventDefault();
    const notifications = document.getElementById("notification__active");
    notifications.appendChild = (
      <li>
        <PrimaryNotification />
      </li>
    );
  };
  return (
    <div>
      <section>
        <button
          className="primary-button"
          onClick={(event) => showNotification(event)}
        >
          PRIMARY
        </button>
      </section>
      <ul className="notification__active" id="notification__active"></ul>
    </div>
  );
};

export default Notifications;
