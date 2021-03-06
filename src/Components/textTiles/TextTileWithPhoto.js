import React from "react";

const TextTileWithPhoto = ({ title, content }) => {
  return (
    <div className="section__texttile">
      <img
        src="./assets/images/sample.jpg"
        alt="shop photo"
        className="shop-photo"
      />
      <p className="title">{title}</p>

      <p className="content">{content}</p>
    </div>
  );
};

export default TextTileWithPhoto;
