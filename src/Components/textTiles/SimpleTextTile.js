import React from "react";

const SimpleTextTile = ({ title = "excepteur labore", content }) => {
  return (
    <div className="section__texttile">
      {title && <p className="title">{title || ""}</p>}
      <p className="text">{content}</p>
    </div>
  );
};

export default SimpleTextTile;
