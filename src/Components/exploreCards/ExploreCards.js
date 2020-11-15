import React from "react";
import "./ExploreCards.css";
const ExploreCards = () => {
  const exploreCard = (info) => {
    return (
      <div className="explore-card">
        <img
          src="./assets/images/sample.jpg"
          alt="shop photo"
          className="shop-photo"
        />
        <h3 className="explore-card-title">{info.title}</h3>
        <p className="explore-card-subtitle">{info.subtitle}</p>
        <p className="explore-card-description">{info.description}</p>
        <button className="primary-button">Book</button>
      </div>
    );
  };
  return (
    <section>
      <h2>Explore here...</h2>
      <div className="section__container">
        <div className="explore-cards">
          {exploreCard({
            title: "First explore",
            subtitle: "First subtitle",
            description:
              "Irure culpa sint cupidatat nostrud velit ut fugiat voluptate aliquip ad ullamco.",
          })}
          {exploreCard({
            title: "Second explore",
            subtitle: "Second subtitle",
            description:
              "Irure culpa sint cupidatat nostrud velit ut fugiat voluptate aliquip ad ullamco.",
          })}
          {exploreCard({
            title: "Third explore",
            subtitle: "Third subtitle",
            description:
              "Irure culpa sint cupidatat nostrud velit ut fugiat voluptate aliquip ad ullamco.",
          })}
        </div>
      </div>
    </section>
  );
};

export default ExploreCards;
