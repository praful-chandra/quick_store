import React from "react";
import "./homeItems_styles.scss";

function HomePageItem({ BoxNumber, title, imageUrl }) {
  return (
    <div className={`home-wrapper-item home-wrapper-item-${BoxNumber}`}>
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
