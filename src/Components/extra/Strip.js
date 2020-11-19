import React from "react";
import "./Strip.css";
const Strip = () => {
  return (
    <div className="strip">
      <div className="strip__container">
        <div className="strip__photo">
          <div className="icon">
            <div className="material-icons">person</div>
          </div>
        </div>
        <div className="strip__info">
          <div className="strip__title">Hitesh Umesh</div>
          <div className="strip__noti-type">Friend request</div>
        </div>
        <div className="strip__button">
          <button>
            <div className="icon">
              <div className="material-icons">check</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Strip;
