import React from "react";
import "./AvatarCard.css";

const AvatarCard = () => {
  return (
    <div className="avatar-card">
      <div className="avatar-card__container">
        <div className="avatar-card__photo">
          <img src="./assets/images/avatar.jpg" alt="avatar" />
        </div>
        <div className="avatar-card__name">Dixit Parmar</div>
        <div className="avatar-card__position">Teacher</div>
      </div>
    </div>
  );
};

export default AvatarCard;
