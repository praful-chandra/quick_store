import React from "react";

import "./homeItems_styles.scss";

//Box Number from 1 - 5 only
//Heavly bounded with the Grid Component 
// Dont Use Individually

function HomePageItem({ BoxNumber, title, imageUrl, history }) {
  return (
    <div
      onClick={() => {
        history.push(`/category/${BoxNumber}`);
      }}
      className={`home-wrapper-item home-wrapper-item-${BoxNumber}`}
    >
      <div
        className="home-wrapper-item-background"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="home-wrapper-item-content">
        <div className="home-wrapper-item-content-heading">{title}</div>
        <span>Shop Now</span>
      </div>
    </div>
  );
}

export default HomePageItem;
