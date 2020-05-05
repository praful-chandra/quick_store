import React, { Component } from "react";
import { connect } from "react-redux";
import "./homeItems_styles.scss";

import HomePageItem from "./homePage-item-component";
import SecondartBar from "../../navbar/secondaryBar_component";

import { fetchItemsAsync } from "../../../redux/actions/items-actions";

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    if(!this.props.items)
    this.props.fetchItemsAsync();
  }

  render() {
    return this.props.items ? (
      <div>
        <SecondartBar />

        <div className="home-wrapper">
          {this.props.items.map(({ _id, imageUrl, title },index) => {
            return (
              //The homepage item must only contains boxes from 1 - 5
              // Hard coded GRID , if Used ELseWhere , must contain all the components
              <HomePageItem
                key={_id}
                id={_id}
                BoxNumber={index+1}
                title={title}
                imageUrl={imageUrl}
                history={this.props.history}
              />
            );
          })}
          {/* <HomePageItem key={this.sections[0].id} BoxNumber={this.sections[0].id} title={this.sections[0].title} imageUrl={this.sections[0].imageUrl} /> */}
        </div>
      </div>
    ) : (
      <div>Loading....</div>
    );
  }
}

const mapStateToProps = (state) => ({
  items: state.items.items,
});

export default connect(mapStateToProps, { fetchItemsAsync })(HomeScreen);
