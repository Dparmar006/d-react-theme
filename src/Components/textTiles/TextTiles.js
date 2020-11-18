import React from "react";
import BackgroundTextTile from "./BackgroundTextTile";
import SimpleTextTile from "./SimpleTextTile";
import "./TextTiles.css";
import TextTileWithPhoto from "./TextTileWithPhoto";
const TextTiles = () => {
  const content =
    "Esse nisi excepteur labore occaecat laborum aliquip in ad non reprehenderit. Fugiat quis cupidatat irure commodo ex. Nulla enim consequat occaecat incididunt eu sint amet officia anim labore. Excepteur nisi ex sint pariatur pariatur et minim Lorem adipisicing mollit deserunt.";
  return (
    <section>
      <h2>Text Tiles</h2>
      <div className="section__container">
        <SimpleTextTile content={content + content} />
        {/* 
      TODO: 
      <BackgroundTextTile
      content={content}
      backgroundImage="E:\React\d-react-theme\public\assets\images\sample.jpg"
    /> */}
        <TextTileWithPhoto content={content} />
      </div>
    </section>
  );
};

export default TextTiles;
