import React from "react";
import "./SearchCard.css";
const SearchCards = () => {
  const searchCard = () => {
    return (
      <div className="search-card">
        <h3 className="search-card-title">First card</h3>
        <p className="search-card-subtitle">3.2 K</p>
        <p className="search-card-description">
          Sit qui ad culpa velit duis nulla elit quis consequat nisi labore elit
          ipsum est.
        </p>
        <div className="search-card-buttons">
          <button className="search-icon-button">
            <div className="icon">
              <i className="material-icons">comment</i>
            </div>
          </button>
          <button
            type="submit"
            className="search-icon-button"
            onClick={(event) => {
              const icon = document.getElementById("heart");
              icon.innerHTML =
                icon.innerHTML === "favorite_border"
                  ? "favorite"
                  : "favorite_border";
            }}
          >
            <div className="icon">
              <i className="material-icons" id="heart">
                favorite_border
              </i>
            </div>
          </button>
        </div>
      </div>
    );
  };
  return (
    <section>
      <div className="section__container">
        <div className="section__left">
          <form className="search-form">
            <input type="text" placeholder="Search here" />
            <button>
              <div className="icon">
                <i className="material-icons">search</i>
              </div>
            </button>
          </form>
        </div>
        <div className="section__right">
          <h2>Here you go...</h2>
          {searchCard()}
          {searchCard()}
          {searchCard()}
          {searchCard()}
          {searchCard()}
          {searchCard()}
          <div className="cards"></div>
        </div>
      </div>
    </section>
  );
};

export default SearchCards;
