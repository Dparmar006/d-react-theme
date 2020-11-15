import React from "react";

const BackgroundTextTile = ({ backgroundImage, content }) => {
  return (
    <div className="section__container">
      <div
        className="section__texttile"
        style={{
          background: "E:Reactd-react-themepublicassetsimagessample.jpg",
        }}
      >
        <p className="text">{content}</p>
      </div>
    </div>
  );
};

export default BackgroundTextTile;
