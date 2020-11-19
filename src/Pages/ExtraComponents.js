import React from "react";
import Base from "../Base";
import AvatarCard from "../Components/extra/AvatarCard";
import AvatarProfile from "../Components/extra/AvatarProfile";
import Strip from "../Components/extra/Strip";
import "./ExtraComponents.css";
const ExtraComponents = () => {
  return (
    <Base>
      <section className="extra-component">
        <AvatarCard />
        <AvatarProfile />
        <Strip />
      </section>
    </Base>
  );
};

export default ExtraComponents;
