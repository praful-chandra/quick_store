import React, { Component } from "react";
import "./homeItems_styles.scss";

import HomePageItem from "./homePage-item-component";
import SecondartBar from "../navbar/secondaryBar_component";

class HomeItems extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  sections = require("../../data/dummyCategories").default;
  render() {
    
    return (
      <div>
        <SecondartBar />

        <div className="home-wrapper">
          {this.sections.map(({ id, imageUrl, title }) => {
            return (
              <HomePageItem
                key={id}
                BoxNumber={id}
                title={title}
                imageUrl={imageUrl}
                history={this.props.history}
              />
            );
          })}
          {/* <HomePageItem key={this.sections[0].id} BoxNumber={this.sections[0].id} title={this.sections[0].title} imageUrl={this.sections[0].imageUrl} /> */}
        </div>
      </div>
    );
  }
}

export default HomeItems;
