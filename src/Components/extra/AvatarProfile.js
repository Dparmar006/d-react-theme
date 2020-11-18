import React from "react";
import "./AvatarProfile.css";
const AvatarProfile = () => {
  return (
    <div className="avatar-profile">
      <div className="avatar-card__container">
        <div className="avatar-profile__photo">
          <img src="./assets/images/avatar.jpg" alt="avatar" />
        </div>
        <div className="avatar-profile__name">Dixit Parmar</div>
        <div className="avatar-profile__username">@yesss_finally_he</div>
        <div className="avatar-profile__info">
          <div className="follows">
            <span> Follows</span> 423
          </div>
          <div className="following">
            <span> Following</span> 123
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvatarProfile;
